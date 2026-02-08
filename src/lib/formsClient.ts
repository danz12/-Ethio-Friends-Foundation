import { supabase } from "@/lib/supabase";

type FormsBackend = "supabase" | "http";

export type DonationInsert = {
  donor_name: string;
  donor_email: string;
  amount: number;
  frequency: "one-time" | "monthly" | "yearly";
  status: "submitted" | "pending" | "succeeded" | "failed" | "refunded" | "canceled";
  payment_method?: string;
};

export type ContactSubmissionInsert = {
  name: string;
  email: string;
  subject: string;
  inquiry_type: string;
  message: string;
};

function getFormsBackend(): FormsBackend {
  const raw = import.meta.env.VITE_FORMS_BACKEND;
  return raw === "http" || raw === "supabase" ? raw : "supabase";
}

function getApiBaseUrl(): string {
  const raw = (import.meta.env.VITE_API_BASE_URL ?? "").trim();
  return raw.replace(/\/$/, "");
}

function buildApiUrl(path: string): string {
  const base = getApiBaseUrl();
  if (!base) return path;
  return `${base}${path}`;
}

function toError(err: unknown, fallbackMessage = "Request failed"): Error {
  if (err instanceof Error) return err;
  if (err && typeof err === "object" && "message" in err && typeof (err as { message?: unknown }).message === "string") {
    const message = (err as { message: string }).message.trim();
    return new Error(message || fallbackMessage);
  }
  return new Error(fallbackMessage);
}

async function postJson(path: string, body: unknown, options?: { ignoreStatus?: number[] }) {
  const url = buildApiUrl(path);
  const ignoreStatus = options?.ignoreStatus ?? [];

  const response = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });

  if (ignoreStatus.includes(response.status)) return;

  if (response.ok) return;

  const contentType = response.headers.get("content-type") ?? "";
  let message = `Request failed (${response.status})`;

  try {
    if (contentType.includes("application/json")) {
      const payload = (await response.json()) as unknown;
      if (payload && typeof payload === "object" && "error" in payload && typeof (payload as { error?: unknown }).error === "string") {
        message = (payload as { error: string }).error;
      }
    } else {
      const text = (await response.text()).trim();
      if (text) message = text;
    }
  } catch {
    // ignore
  }

  const error = new Error(message);
  (error as { status?: number }).status = response.status;
  throw error;
}

export async function submitDonation(input: DonationInsert) {
  const backend = getFormsBackend();

  if (backend === "http") {
    await postJson("/api/donations", input);
    return;
  }

  const { error } = await supabase.from("donations").insert(input);
  if (error) throw toError(error, "Unable to submit donation.");
}

export async function submitContact(input: ContactSubmissionInsert) {
  const backend = getFormsBackend();

  if (backend === "http") {
    await postJson("/api/contact", input);
    return;
  }

  const { error } = await supabase.from("contact_submissions").insert(input);
  if (error) throw toError(error, "Unable to submit message.");
}

export async function subscribeNewsletter(email: string) {
  const backend = getFormsBackend();

  if (backend === "http") {
    await postJson("/api/newsletter", { email }, { ignoreStatus: [409] });
    return;
  }

  const { error } = await supabase.from("newsletter_subscriptions").insert({ email });
  if (!error) return;

  const code = (error as { code?: unknown }).code;
  if (code === "23505") return;

  throw toError(error, "Unable to subscribe.");
}


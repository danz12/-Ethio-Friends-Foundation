-- PostgreSQL schema (recommended starting point)
-- Note: run as a database owner/admin.

create extension if not exists pgcrypto;

-- 1) Donors
create table if not exists donors (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text,
  country text,
  city text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint donors_email_unique unique (email)
);

-- 2) Donations (pledges/submissions)
create table if not exists donations (
  id uuid primary key default gen_random_uuid(),
  donor_id uuid references donors(id) on delete set null,
  donor_name text not null,
  donor_email text not null,
  amount numeric(12, 2) not null check (amount >= 0),
  currency text not null default 'USD',
  frequency text not null check (frequency in ('one-time', 'monthly', 'yearly')),
  status text not null check (status in ('submitted', 'pending', 'succeeded', 'failed', 'refunded', 'canceled')),
  preferred_payment_method text, -- e.g. 'telebirr', 'cbe', 'bank_transfer', 'cash', 'other'
  note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists donations_created_at_idx on donations (created_at desc);
create index if not exists donations_donor_email_idx on donations (donor_email);
create index if not exists donations_status_idx on donations (status);

-- 3) Payment transactions (Telebirr, CBE, etc.)
create table if not exists payment_transactions (
  id uuid primary key default gen_random_uuid(),
  donation_id uuid not null references donations(id) on delete cascade,
  provider text not null, -- 'telebirr', 'cbe', 'stripe', ...
  provider_reference text, -- external transaction reference/id
  amount numeric(12, 2) not null check (amount >= 0),
  currency text not null default 'USD',
  status text not null, -- 'initiated', 'pending', 'succeeded', 'failed', ...
  raw_payload jsonb, -- store provider webhook/response (optional)
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint payment_transactions_provider_reference_unique unique (provider, provider_reference)
);

create index if not exists payment_transactions_donation_id_idx on payment_transactions (donation_id);
create index if not exists payment_transactions_created_at_idx on payment_transactions (created_at desc);

-- 4) Contact submissions
create table if not exists contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text not null,
  inquiry_type text not null,
  message text not null,
  created_at timestamptz not null default now()
);

create index if not exists contact_submissions_created_at_idx on contact_submissions (created_at desc);

-- 5) Newsletter subscriptions
create table if not exists newsletter_subscriptions (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  status text not null default 'active' check (status in ('active', 'unsubscribed')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint newsletter_subscriptions_email_unique unique (email)
);

-- 6) Volunteer applications
create table if not exists volunteer_applications (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text,
  skills text,
  availability text,
  message text,
  status text not null default 'submitted' check (status in ('submitted', 'reviewing', 'accepted', 'rejected')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists volunteer_applications_created_at_idx on volunteer_applications (created_at desc);


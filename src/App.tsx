import { lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import AppLayout from "@/components/AppLayout";
import HomePage from "@/components/pages/HomePage";
import { AppProvider } from "@/contexts/AppContext";

const NotFound = lazy(() => import("./pages/NotFound"));
const LegacyProgramRedirect = lazy(() => import("./pages/LegacyProgramRedirect"));
const AboutPage = lazy(() => import("@/components/pages/AboutPage"));
const ProgramsPage = lazy(() => import("@/components/pages/ProgramsPage"));
const ProgramDetailPage = lazy(() => import("@/components/pages/ProgramDetailPage"));
const ImpactPage = lazy(() => import("@/components/pages/ImpactPage"));
const LegalAwarenessPage = lazy(() => import("@/components/pages/LegalAwarenessPage"));
const MediaPage = lazy(() => import("@/components/pages/MediaPage"));
const PartnershipsPage = lazy(() => import("@/components/pages/PartnershipsPage"));
const ContactPage = lazy(() => import("@/components/pages/ContactPage"));
const BeneficiariesPage = lazy(() => import("@/components/pages/BeneficiariesPage"));
const DonatePage = lazy(() => import("@/components/pages/DonatePage"));
const PrivacyPage = lazy(() => import("@/components/pages/PrivacyPage"));
const TermsPage = lazy(() => import("@/components/pages/TermsPage"));

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="light">
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
              <Route element={<AppLayout />}>
                <Route index element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="programs" element={<ProgramsPage />} />
                <Route path="programs/:programId" element={<ProgramDetailPage />} />
                <Route path="program-:programId" element={<LegacyProgramRedirect />} />
                <Route path="program/:programId" element={<LegacyProgramRedirect />} />
                <Route path="impact" element={<ImpactPage />} />
                <Route path="legal-awareness" element={<LegalAwarenessPage />} />
                <Route path="media" element={<MediaPage />} />
                <Route path="partnerships" element={<PartnershipsPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="beneficiaries" element={<BeneficiariesPage />} />
                <Route path="donate" element={<DonatePage />} />
                <Route path="privacy" element={<PrivacyPage />} />
                <Route path="terms" element={<TermsPage />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AppProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;

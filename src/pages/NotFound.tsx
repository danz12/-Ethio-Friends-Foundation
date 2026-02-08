import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Seo from "@/components/Seo";
import StructuredData from "@/components/StructuredData";
import PageHero from "@/components/PageHero";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <article className="min-h-screen pt-20">
      <Seo
        title="404 - Page Not Found"
        description="The page you are looking for could not be found."
        noIndex
      />
      <StructuredData
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "404", path: location.pathname || "/404" },
        ]}
      />
      <PageHero
        imageSrc="/images/official/photo_2024-11-28_13-05-39.jpg"
        align="center"
        badge={{ label: "Error" }}
        title="404"
        description="Page not found."
      >
        <div className="flex justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/[0.16] border border-white/20 px-6 py-3 text-white font-semibold transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </PageHero>
    </article>
  );
};

export default NotFound;

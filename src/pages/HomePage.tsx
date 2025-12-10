import Hero from "../components/homepage/Hero";

import CompanyJourney from "@/components/homepage/CompanyJourney";
import BrandIdentity from "@/components/homepage/BrandIdentity";
import Services from "@/components/homepage/Services";
import Testimonials from "@/components/homepage/Testimonials";

function HomePage() {
  return (
    <div className="bg-background min-h-screen text-text-main">
      <Hero />
      <BrandIdentity />
      <CompanyJourney />
      <Services />
      <Testimonials />
    </div>
  );
}

export default HomePage;

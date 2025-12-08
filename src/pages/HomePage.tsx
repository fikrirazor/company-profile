import Hero from "../components/homepage/Hero";

import CompanyOverview2 from "@/components/homepage/CompanyOverview2";
import CompanyOverview from "@/components/homepage/CompanyOverview";
import Services from "@/components/homepage/Services";

function HomePage() {
  return (
    <div>
      
      <Hero />
      <CompanyOverview />
      <CompanyOverview2 />
      <Services />

      {/* Testimonials */}
      <section id="testimonials" className="px-4 py-12 max-h-[80vh] bg-[#121212]/90">
        <div className="max-w-screen-2xl mx-auto text-white text-center">
          {/* Title */}
          <h2 className="text-6xl font-extrabold py-2">Brands That Trust Our Vision</h2>
          <h5 className="text-lg font-bold py-10">
            We've helped these amazing brands elevate their visual identity
          </h5>
          {/*cards*/}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-20 text-black">
            <div className="bg-white h-96 rounded-xl p-4 "></div>
            <div className="bg-white h-96 rounded-xl p-4"></div>
            <div className="bg-white h-96 rounded-xl p-4"></div>
          </div>
        </div>
      </section>


    </div>
  );
}

export default HomePage;

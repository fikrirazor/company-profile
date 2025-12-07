import Hero from "../components/homepage/Hero";
import Navbar from "../components/Navbar";
import CompanyOverview2 from "@/components/homepage/CompanyOverview2";
import CompanyOverview from "@/components/homepage/CompanyOverview";
import Services from "@/components/homepage/Services";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CompanyOverview />
      <CompanyOverview2 />
      <Services />

      {/* Testimonials */}
      <section id="testimonials">
        <h2>Brands That Trust Our Vision</h2>
        <h5>We've helped these amazing brands elevate their visual identity</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>gambar</div>
        </div>
      </section>
      
      {/*Footer*/}
      <footer className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <p>tes</p>
          <p>tes</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;

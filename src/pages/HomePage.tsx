import Hero from "../components/homepage/Hero";
import Navbar from "../components/Navbar";
import CompanyOverview2 from "@/components/homepage/CompanyOverview2";
import CompanyOverview from "@/components/homepage/CompanyOverview";
import Services from "@/components/homepage/Services";
import Logo from "@/assets/logo.svg";

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
      <footer className=" px-4 py-12 bg-[#121212]">
        <div className="max-w-screen-2xl mx-auto ">
          <div className=" flex flex-col md:flex-row justify-between text-white ">
            <div className="flex flex-col items-start space-y-12">
              <h2 className="text-5xl font-bold">Enjoying the content?</h2>
              <h2 className="text-5xl font-bold text-white/50 ">
                Like, Follow, and Share!
              </h2>
              <button className="bg-white/50 p-2 rounded-2xl shadow-2xl shadow-amber-50 font-bold text-black/50">Hello KARYAVISUAL</button>
              <p className="inline-block bg-white text-[#121212] rounded-2xl font-bold p-1">#UXWITHPURPOSE</p>
            </div>
            <div className="grid grid-rows-1 gap-20">
              <img src={Logo} alt="img" className="w-32 h-32 brightness-0 invert mx-auto" />
              <p className="">#BUILDBETTERWITHJAMAIR</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;

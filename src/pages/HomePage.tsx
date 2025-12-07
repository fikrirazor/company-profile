import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* Company Overview */}
      <section
        id="company-overview"
        className="
    relative 
    h-screen 
    w-full 
    bg-cover bg-center 
    flex 
    items-center
  "
   /*      style={{
          backgroundImage: "url('/your-image.jpg')",
        }} */
      >
        <div className="grid w-full max-w-7xl mx-auto px-6 grid-cols-1 lg:grid-cols-2">
          <div className="hidden lg:block"></div>

          <div className="flex flex-col items-end text-right">
            <h1 className="text-4xl font-bold mb-4 text-black">
              Redefine your luxury
            </h1>
            <p className="text-black max-w-sm">
              Recognizing the profound shifts in the way people are living and
              working, and the desire for a more sustainable lifestyle
            </p>
          </div>
        </div>
      </section>
      {/* Services/Product */}
      <section id="services">
        Landed Residential – perumahan bersubsidi atau premium. Superblock &
        Condominium – proyek terintegrasi dengan fasilitas lengkap. Shopping &
        Trade Center – pusat perbelanjaan dan area komersial. Sports Center &
        Recreation – fasilitas kebugaran, kolam renang, dll. Hotel – jaringan
        hotel yang dikelola grup. Hospital – fasilitas kesehatan. Toll Road –
        investasi infrastruktur transportasi.
      </section>
      {/* Testimonials */}
      <section id="testimonials">
        Testimony Since joining PT Jaya Real Property, Tbk. in 2005 as a fresh
        graduate, I have been given lots of opportunities to be involved in
        numerous property projects as Business Development Officer. A huge
        amount of knowledge and business experience as well as learnings about
        teamwork and leadership practices during my time in Jaya Real Property
        has supported my career development as a complete and competent property
        professional. Praditya Wibowo Testimony Manager For almost 10 years with
        PT Jaya Real Property, Tbk., I have been given opportunities, trust,
        support and also the space to develop myself to be who I am today. The
        Company has given the opportunity, direction, as well as motivation for
        younger generations to develop and expand their potential to be someone
        resilient, caring and qualified.
      </section>
      {}
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

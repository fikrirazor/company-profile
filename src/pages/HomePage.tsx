import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/*  Overview */}
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
              REDEFINE YOUR VISUAL IDENTITY <br />
              <span>Elevate Your Brand Story</span>
            </h1>
            <p className="text-black max-w-sm">
              Experience a transformative shift as we redefine visual
              excellence, elevating your brand's narrative to new heights.
              Immerse yourself in a world where every pixel tells a story, every
              frame captures essence, and every visual is curated to exceed
              market expectations—creating a legacy of memorable brand presence.
              <br /> ◉ Visual Strategy Consulting <br />◉ Premium Content
              Production
              <br /> ◉ Brand Consistency Audit
            </p>
          </div>
        </div>
      </section>
      {/*  Overview 2 */}
      <section
        id="company-overview2"
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
              YEARS OF VISUAL STORYTELLING
              <br />
              <span>Transforming Visions into Visual Reality </span>
            </h1>
            <p className="text-black max-w-sm">
              With years of expertise and dedication, we have consistently
              transformed brand visions into tangible visual assets. As we
              continue to make creative aspirations come to life, turning
              concepts into remarkable visual achievements that connect,
              convert, and captivate.
              <br /> ◉ Our Creative Journey <br />◉ Innovative Techniques
              <br /> ◉ Industry Recognition <br />◉ Insights & Case Studies
            </p>
          </div>
        </div>
      </section>

      {/* Services/Product */}
      <section id="services">
        <h2>
          Our Signature Services Empowering Local Brands Through Visual
          Excellence
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 md:grid-rows-4 gap-4">
          <div>gambar1</div>
          <div> gambar 2</div>
          <div>gambar 3</div>
          <div>gambar 4</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">Video</div>
      </section>
      {/* Testimonials */}
      <section id="testimonials">
        <h2>Brands That Trust Our Vision</h2>
        <h5>We've helped these amazing brands elevate their visual identity</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> 
          <div>gambar</div>
        </div>
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

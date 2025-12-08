import ImageOverview2 from "@/assets/images/camera-6609535_1920.jpg";
function CompanyOverview2() {
  return (
    <section
      id="company-overview2"
      className="relative h-screen w-full flex items-center overflow-hidden"
    >
      {/* BG */}
      <img
        src={ImageOverview2}
        alt="Company Overview2"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* BG Blur */}
      <div className="absolute inset-0 w-full h-full  backdrop-blur-sm"></div>

      {/* Content Menggunakan Grid*/}
      <div className="relative w-full max-w-7xl mx-auto px-4 z-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold mb-4 text-white">
            YEARS OF VISUAL STORYTELLING
            <br />
            <span>Transforming Visions into Visual Reality</span>
          </h1>
          <p className="text-white mb-4">
            With years of expertise and dedication, we have consistently
            transformed brand visions into tangible visual assets. As we
            continue to make creative aspirations come to life, turning concepts
            into remarkable visual achievements that connect, convert, and
            captivate.
          </p>
          <div className="grid grid-cols-2 gap-2 text-white">
            <div>Our Creative Journey</div>
            <div>Innovative Techniques</div>
            <div>Industry Recognition</div>
            <div>Insights & Case Studies</div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default CompanyOverview2;

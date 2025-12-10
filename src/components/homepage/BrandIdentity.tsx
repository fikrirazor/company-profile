import ImageOverview from "@/assets/images/nature-6572635_1920.jpg";
function BrandIdentity() {
  return (
    <section
      id="brand-identity"
      className="relative h-screen w-full flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={ImageOverview}
        alt=""
        className="absolute inset-0 object-cover w-full h-full"
      />

      {/* Backdrop Blur Overlay */}
      <div className="absolute inset-0 backdrop-blur-sm"></div>

      {/* Content Container */}
      <div className="relative w-full max-w-7xl mx-auto px-4 z-10 flex">
        <div className="flex-1"></div>

        <div className="flex-1 max-w-xl">
          <h1 className="text-4xl font-bold mb-4 text-text-light pb-2">
            REDEFINE YOUR VISUAL IDENTITY <br />
            <span className="text-2xl">Elevate Your Brand Story</span>
          </h1>
          <p className="text-text-light pb-2">
            Experience a transformative shift as we redefine visual excellence,
            elevating your brand's narrative to new heights. Immerse yourself in
            a world where every pixel tells a story, every frame captures
            essence, and every visual is curated to exceed market expectations—
            creating a legacy of memorable brand presence.
          </p>
          <ul className="space-y-2">
            <li className="text-text-light">Visual Strategy Consulting</li>
            <li className="text-text-light">Premium Content Production</li>
            <li className="text-text-light">Brand Consistency Audit</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default BrandIdentity;

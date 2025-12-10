import ImageOverview from "@/assets/images/nature-6572635_1920.jpg";
import { ScanEye, Clapperboard, ClipboardCheck } from "lucide-react";

const featureText = [
  { title: "Visual Strategy", icon: ScanEye },
  { title: "Premium Production", icon: Clapperboard },
  { title: "Brand Audit", icon: ClipboardCheck }
];

export default function BrandIdentity() {
  return (
    <section
      id="brand-identity"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      {/* Background Image - Parallax Effect */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${ImageOverview})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-surface-dark/60" />

      {/* Centered Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center h-full">
        {/* Empty Left Side */}
        <div className="hidden lg:block"></div>

        {/* Right Side Content */}
        <div className="flex flex-col items-start justify-center h-full text-left text-text-light animate__animated animate__fadeInRight">
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            REDEFINE YOUR <br />
            <span className="text-primary">VISUAL IDENTITY</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-body opacity-90 mb-10 max-w-xl">
            Elevate your brand story. We curate every pixel to tell a compelling narrative 
            and create a legacy of memorable presence.
          </p>

          {/* Feature Grid */}
          <div className="grid grid-cols-3 gap-6 w-full max-w-xl">
            {featureText.map((item, index) => (
              <div key={index} className="flex flex-col items-start group">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-3 group-hover:bg-primary transition-all duration-300">
                  <item.icon className="w-6 h-6"  />
                </div>
                <h3 className="text-sm md:text-base font-bold font-sans tracking-wide uppercase">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

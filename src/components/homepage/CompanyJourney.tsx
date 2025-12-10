import ImageOverview2 from "@/assets/images/camera-6609535_1920.jpg";
import { PenTool, Globe, Award } from "lucide-react";
import AnimatedContent from "@/components/AnimatedContent";

const journeyFeatures = [
  { title: "Creative Journey", icon: PenTool },
  { title: "Global Reach", icon: Globe },
  { title: "Industry Awards", icon: Award }
];

export default function CompanyJourney() {
  return (
    <section
      id="company-journey"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      {/* Background Image - Parallax Effect */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${ImageOverview2})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-surface-dark/60" />

      {/* Centered Content -> Left Aligned Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center h-full">
        {/* Left Side Content */}
        <div className="flex flex-col items-start justify-center h-full text-left text-text-light">
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={true} 
            duration={1.5}
            ease="bounce.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1}
            threshold={0.1}
          >
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            YEARS OF <br />
            <span className="text-primary">VISUAL STORYTELLING</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-body opacity-90 mb-10 max-w-xl">
            Transforming brand visions into tangible visual assets. We turn creative 
            aspirations into remarkable achievements that connect, convert, and captivate.
          </p>

          {/* Feature Grid */}
          <div className="grid grid-cols-3 gap-6 w-full max-w-xl">
            {journeyFeatures.map((item, index) => (
              <div key={index} className="flex flex-col items-start group">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-3 group-hover:bg-primary transition-all duration-300">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-sm md:text-base font-bold font-sans tracking-wide uppercase">{item.title}</h3>
              </div>
            ))}
          </div>
          </AnimatedContent>
        </div>

        {/* Empty Right Side */}
        <div className="hidden lg:block"></div>
      </div>
    </section>
  );
}

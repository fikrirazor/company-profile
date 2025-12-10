import { Quote, Star } from "lucide-react";

const testimonyItems = [
  {
    name: "Alex Morgan",
    role: "CMO",
    company: "Urban Innovation",
    quote: "The visual transformation they delivered was beyond our expectations. Our engagement metrics have doubled since the rebrand.",
  },
  {
    name: "Sarah Jenkins",
    role: "Creative Director",
    company: "Luxe Arch",
    quote: "Professional, artistic, and deeply intuitive. They didn't just take photos; they captured the very soul of our architectural projects.",
  },
  {
    name: "Michael Chen",
    role: "Founder",
    company: "TechFlow Solutions",
    quote: "A seamless collaboration. The team understood our technical vision and translated it into a stunning visual language.",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="px-6 py-20 min-h-[80vh] bg-surface-dark flex items-center">
      <div className="max-w-7xl mx-auto text-text-light w-full">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 font-sans">
            Trusted by Visionaries
          </h2>
          <p className="text-lg md:text-xl text-text-light/80 max-w-2xl mx-auto font-body">
            We've helped these amazing brands elevate their visual identity and connect with their audience.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-text-main">
          {testimonyItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-background rounded-2xl p-8 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 shadow-xl animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Quote Icon & Text */}
              <div>
                <Quote className="w-10 h-10 text-secondary mb-6 opacity-80" />
                <p className="text-lg md:text-xl font-body leading-relaxed mb-6 italic text-text-main/90">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info & Rating */}
              <div className="flex items-center justify-between border-t border-text-muted/20 pt-6">
                <div>
                  <h4 className="font-bold text-lg font-sans">{item.name}</h4>
                  <p className="text-sm text-text-muted font-body">
                    {item.role}, <span className="text-secondary font-medium">{item.company}</span>
                  </p>
                </div>
                <div className="flex gap-1 text-secondary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

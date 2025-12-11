import HeroImage from "@/assets/images/camera-190793_1920.jpg";
import AnimatedContent from "@/components/AnimatedContent";

function ServicesHero() {
    return (
        <section className="relative w-full h-[85vh] overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 w-full h-full">
                <img
                    src={HeroImage}
                    alt="Services Hero"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute inset-0 bg-surface-dark/50" />
            <div className="relative z-10 text-center text-text-light px-4 max-w-4xl mx-auto">
                <AnimatedContent
                    distance={160}
                    direction="vertical"
                    reverse={false}
                    duration={1.5}
                    ease="bounce.out"
                    initialOpacity={0.2}
                    animateOpacity
                    scale={1}
                    threshold={0.3}
                    delay={0.3}
                    disappearEase="power3.in"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 uppercase">
                        Visual Masterpieces
                    </h1>
                    <p className="text-xl md:text-2xl font-body opacity-90">
                        Elevating local brands through clear, compelling, and effective visual storytelling.
                    </p>
                </AnimatedContent>
            </div>
        </section>
    );
}

export default ServicesHero;

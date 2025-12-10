import HeroImage from "@/assets/images/camera-190793_1920.jpg";

function ServicesHero() {
    return (
        <section className="relative h-[85vh] w-full overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${HeroImage})` }}
            />

            {/* Elegant Overlay: Dark Gradient for readability */}
            <div className="absolute inset-0 bg-surface-dark/40 bg-gradient-to-b from-surface-dark/70 via-surface-dark/20 to-surface-dark"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">

                {/* Decorative Element */}
                <div className="w-0.5 h-16 bg-gradient-to-b from-transparent to-secondary mb-6 opacity-70"></div>

                <h2 className="text-secondary tracking-[0.4em] text-xs md:text-sm font-semibold mb-6 uppercase">
                    Our Services
                </h2>

                <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl text-text-light mb-8 leading-tight">
                    <span className="italic font-light block opacity-90">Visual</span>
                    <span className="font-normal">Masterpieces</span>
                </h1>

                <p className="max-w-2xl text-text-light/90 text-lg md:text-2xl font-sans font-light leading-relaxed tracking-wide">
                    Elevating local brands through clear, compelling, and <span className="text-secondary italic font-sans">effective</span> visual storytelling.
                </p>

                <div className="w-0.5 h-16 bg-gradient-to-t from-transparent to-secondary mt-10 opacity-70"></div>
            </div>
        </section>
    );
}

export default ServicesHero;

import image1 from "@/assets/images/camera-6609535_1920.jpg";
function ServicesList() {
    const services = [
        {
            id: 1,
            title: "Photography Services",
            description:
                "Professional product and lifestyle photography that captures your brand essence and tells your story visually.",
            features: [
                "Product Photography",
                "Lifestyle Shoots",
                "Studio & On-location",
            ],
            image: "",
        },
        {
            id: 2,
            title: "Brand Identity Design",
            description:
                "Comprehensive visual identity solutions that represent your brand values and connect with your audience.",
            features: ["Logo Design", "Brand Guidelines", "Packaging Design"],
            image: "",
        },
        {
            id: 3,
            title: "Digital Marketing Visuals",
            description:
                "Engaging digital content designed to boost your online presence and drive customer engagement.",
            features: ["Social Media Content", "Banner Ads", "Email Templates"],
            image: "",
        },
        {
            id: 4,
            title: "Social Media Management",
            description:
                "Professional social media management services to help you grow your brand and engage with your audience.",
            features: ["Content Creation", "Scheduling", "Analytics"],
            image: "",
        },
    ];

    return (
        <section
            id="services"
            className="py-20 px-4  mx-auto bg-background"
        >   
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((serviceItem) => (
                    <div
                        key={serviceItem.id}
                        className="group relative h-[263px] w-full overflow-hidden border border-border shadow-lg"
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0 w-full h-full">
                            <img 
                                src={image1} 
                                alt={serviceItem.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/50 transition-colors duration-300 group-hover:bg-black/60" />

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col justify-end p-8 text-white z-10">
                            <h3 className="text-4xl font-extrabold mb-3 ">
                                <span className="bg-text-light text-gray-900 px-2 py-0.5">
                                    {serviceItem.title}
                                </span>
                            </h3>
                            <p className="text-white/90 mb-6 leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                                {serviceItem.description}
                            </p>
                            <ul className="space-y-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                {serviceItem.features.map((feature, index) => (
                                    <li key={index} className="flex items-center text-sm font-medium text-white/80">
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </section>
    );
}

export default ServicesList;

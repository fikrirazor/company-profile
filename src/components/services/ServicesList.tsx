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
        },
        {
            id: 2,
            title: "Brand Identity Design",
            description:
                "Comprehensive visual identity solutions that represent your brand values and connect with your audience.",
            features: ["Logo Design", "Brand Guidelines", "Packaging Design"],
        },
        {
            id: 3,
            title: "Digital Marketing Visuals",
            description:
                "Engaging digital content designed to boost your online presence and drive customer engagement.",
            features: ["Social Media Content", "Banner Ads", "Email Templates"],
        },
    ];

    return (
        <section
            id="services"
            className="py-20 px-4 max-w-7xl mx-auto bg-background"
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((serviceItem) => (
                    <div
                        key={serviceItem.id}
                        className="bg-surface p-8 border border-text-muted hover:border-primary transition-colors"
                    >
                        <h3 className="text-xl font-bold mb-4 text-text-main">
                            {serviceItem.title}
                        </h3>
                        <p className="text-text-main mb-6 leading-relaxed">
                            {serviceItem.description}
                        </p>
                        <ul className="space-y-3">
                            {serviceItem.features.map((feature, index) => (
                                <li key={index} className="text-text-main flex items-start">
                                    <span className="text-primary mr-3">✓</span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ServicesList;

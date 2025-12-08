function Services() {
  const services = [
    {
      id: 1,
      title: "Photography Services",
      description: "Professional product and lifestyle photography that captures your brand essence and tells your story visually.",
      features: [
        "Product Photography",
        "Lifestyle Shoots",
        "Studio & On-location"
      ]
    },
    {
      id: 2,
      title: "Brand Identity Design",
      description: "Comprehensive visual identity solutions that represent your brand values and connect with your audience.",
      features: [
        "Logo Design",
        "Brand Guidelines",
        "Packaging Design"
      ]
    },
    {
      id: 3,
      title: "Digital Marketing Visuals",
      description: "Engaging digital content designed to boost your online presence and drive customer engagement.",
      features: [
        "Social Media Content",
        "Banner Ads",
        "Email Templates"
      ]
    }
  ];

  return (
    <>
      <section
        id="hero"
        className="h-screen w-full flex flex-col items-center justify-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/path-to-your-banner-image.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <p className="relative z-10 text-white text-center text-xl md:text-2xl font-light tracking-wide max-w-3xl px-6">
          OUR SERVICES
          <br />
          Visual Solutions for Local Brands
          <br />
          Simple, clear, effective.
        </p>
      </section>
      
      <section id="services" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((serviceItem) => (
            <div key={serviceItem.id} className="bg-white p-8 border border-gray-200 hover:border-blue-300 transition-colors">
              <h3 className="text-xl font-bold mb-4 text-gray-800">{serviceItem.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{serviceItem.description}</p>
              <ul className="space-y-3">
                {serviceItem.features.map((feature, index) => (
                  <li key={index} className="text-gray-700 flex items-start">
                    <span className="text-blue-500 mr-3">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section
        id="cta"
        className="py-20 bg-[#121212]/90 text-white"
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            NEED VISUALS FOR YOUR BRAND?
          </h2>
          <p className="text-xl mb-10">Get a free quote today.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded transition duration-300">
              WhatsApp Us
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-indigo-700 font-bold py-3 px-8 rounded transition duration-300">
              See Portfolio
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
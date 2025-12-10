import ImageService1 from "@/assets/images/image-serv1.jpg";
import ImageService2 from "@/assets/images/image-serv2.jpg";
import ImageService3 from "@/assets/images/image-serv3.jpg";
import ImageService4 from "@/assets/images/image-serv4.jpg";
function Services() {
  return (
    <section id="services " className="max-w-7xl mx-auto py-10">
      <h2 className="text-center text-4xl font-bold my-10 text-text-main">
        Our Signature Services Empowering
        <br /> Local Brands Through Visual Excellence
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        <img src={ImageService1} alt="Visual Strategy" className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
        <img src={ImageService2} alt="Production" className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
        <img src={ImageService3} alt="Campaigns" className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
        <img src={ImageService4} alt="Digital" className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
      </div>
    </section>
  );
}

export default Services;

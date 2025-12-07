import ImageService1 from "@/assets/images/image-serv1.jpg";
import ImageService2 from "@/assets/images/image-serv2.jpg";
import ImageService3 from "@/assets/images/image-serv3.jpg";
import ImageService4 from "@/assets/images/image-serv4.jpg";
function Services() {
  return (
    <section id="services " className="max-w-7xl mx-auto py-10">
      <h2 className="text-center text-4xl font-bold my-10">
        Our Signature Services Empowering
        <br /> Local Brands Through Visual Excellence
      </h2>
      <div className="grid grid-rows-1 md:grid-cols-4 gap-4  ">
        <img src={ImageService1} alt="service1" />

        <img src={ImageService2} alt="service2" />

        <img src={ImageService3} alt="service3" />

        <img src={ImageService4} alt="service4" />
      </div>
    </section>
  );
}

export default Services;

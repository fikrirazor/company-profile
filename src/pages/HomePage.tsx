import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section
        className="
    relative 
    h-screen 
    w-full 
    bg-cover bg-center 
    flex 
    items-center
  "
        style={{
          backgroundImage: "url('/your-image.jpg')",
        }}
      >
        <div
          className="grid w-full max-w-7xl mx-auto px-6 grid-cols-1 lg:grid-cols-2">
          <div className="hidden lg:block"></div>

          <div className="flex flex-col items-end text-right">
            <h1 className="text-4xl font-bold mb-4 text-black">
              Redefine your luxury
            </h1>
            <p className="text-black max-w-sm">elevate your lifestyle</p>
          </div>
        </div>
      </section>
      <footer className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
            <p>tes</p>
            <p>tes</p>
        </div>

      </footer>
    </div>
  );
}

export default HomePage;

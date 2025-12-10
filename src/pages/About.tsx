function About() {
  return (
    <div>
      <section
        id="hero"
        className="h-screen w-full flex flex-col items-center justify-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/path-to-your-banner-image.jpg')" }}
      >
        <div className="absolute inset-0 bg-surface-dark/50"></div>
        <p className="relative z-10 text-text-light text-center text-xl md:text-2xl font-light tracking-wide max-w-3xl px-6">
          BEHIND EVERY GREAT BRAND IS A GREAT VISUAL STORY
          <br />
          Kami adalah storyteller visual yang membantu brand lokal menemukan dan
          menampilkan cerita unik mereka.
        </p>
      </section>
      <section id="our-story" className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            OUR JOURNEY
          </h2>
          <h3 className="text-xl text-center text-text-muted mb-12">
            From Pixel to Purpose
          </h3>

          <div className="bg-surface p-8 rounded-lg shadow-md">
            <p className="text-text-main leading-relaxed text-center">
              KARYAVISUAL dimulai pada 2018 dari sebuah studio kecil di Bandung,
              dengan satu kamera dan mimpi besar: mengubah cara brand lokal
              berkomunikasi secara visual. Awalnya hanya fokus pada fotografi
              produk, kami berkembang menjadi mitra strategis visual yang
              memahami bahwa setiap gambar harus membawa cerita, emosi, dan
              tujuan bisnis. Hari ini, dengan tim 15+ kreator, kami telah
              membantu 200+ brand lokal menemukan suara visual mereka dan tumbuh
              bersama.
            </p>
          </div>
        </div>
      </section>

      <section
        id="cta"
        className="py-20 px-6 bg-surface-dark/90 text-text-light"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            READY TO TELL YOUR VISUAL STORY?
          </h2>
          <p className="text-xl mb-10">
            Let's create something remarkable together.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-background text-primary hover:bg-surface font-bold py-3 px-8 rounded-full transition duration-300">
              Schedule Free Consultation
            </button>
            <button className="bg-transparent border-2 border-text-light hover:bg-background hover:text-primary font-bold py-3 px-8 rounded-full transition duration-300">
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

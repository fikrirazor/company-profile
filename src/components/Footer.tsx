import Logo from "@/assets/logo.svg";

function Footer() {
  return (
    <footer className="px-4 py-12 bg-[#121212] text-white">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* konten kiri */}
          <div className="flex flex-col items-start space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">Enjoying the content?</h2>
            <h2 className="text-4xl md:text-5xl font-bold text-white/60">
              Like, Follow, and Share!
            </h2>
            
            <div className="bg-white/50 px-4 py-2 rounded-2xl shadow-2xl shadow-amber-500/30 font-bold text-black">
              Hello KARYAVISUAL
            </div>
            <span className="inline-block bg-white text-[#121212] rounded-2xl font-bold px-3 py-1">
              #UXWITHPURPOSE
            </span>
          </div>

          {/* content kanan  */}
          <div className="flex flex-col items-center justify-center gap-8">
            <img
              src={Logo}
              alt="KARYAVISUAL Logo"
              className="w-24 h-24 md:w-32 md:h-32 brightness-0 invert mx-auto"
            />
            <p className="text-center text-white/80">#BUILDBETTERWITHJAMAIR</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
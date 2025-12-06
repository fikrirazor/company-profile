import { useState } from "react";
import { Link } from "react-router"; // Fixed import

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "about" },
    { name: "Blog List", href: "#blog" },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-3">
        {/* Logo */}
        <div className="text-xl font-semibold text-white">Super Contar</div>

        {/* Hamburger */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <img
              className={`${isMenuOpen ? "hidden" : "block"}`}
              src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
              width="32"
            />
            <img
              className={`${isMenuOpen ? "block" : "hidden"}`}
              src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
              width="32"
            />
          </button>
        </div>

        {/* Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:w-auto md:flex flex-col md:flex-row text-right md:text-left font-semibold mt-5 md:mt-0`}
        >
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="block md:inline-block px-3 py-3 text-white hover:text-amber-400 transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Call Button */}
        <div className="flex w-full md:w-auto justify-end mt-3 md:mt-0">
          <a href="tel:+123" className="inline-block">
            <div className="flex items-center justify-center h-10 w-32 rounded-md 
              bg-amber-400 text-white font-medium p-2 
              hover:bg-[#b89866] transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.42-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.94c.363-.261.527-.724.417-1.163L6.963 3.102a1.12 1.12 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              Call Now
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
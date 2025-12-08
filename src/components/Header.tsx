
import { useState } from "react";
import { Link, useNavigate } from "react-router"; 
import { useAuthStore } from "@/store/authStore"; 

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuth, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); 
    setIsMenuOpen(false); 
  };

  // Daftar menu publik
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Team", href: "/teams" },
    { name: "About Us", href: "/about" },
    { name: "Blog List", href: "/blogs" },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-3">
        {/* Logo */}
        <Link to="/" className="text-xl font-semibold text-white">KARYAVISUAL</Link>

        {/* Hamburger */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="text-white"
          >
            {isMenuOpen ? (
              <img
                src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
                width="32"
                alt="Close"
              />
            ) : (
              <img
                src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
                width="32"
                alt="Menu"
              />
            )}
          </button>
        </div>

        {/* Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:w-auto md:flex flex-col md:flex-row md:items-center text-right md:text-left font-semibold mt-5 md:mt-0`}
        >
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsMenuOpen(false)} // tutup menu di mobile
              className="block md:inline-block px-3 py-3 text-white hover:text-amber-400 transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}

          {/* Logout hanya muncul jika login */}
          {isAuth && (
            <button
              onClick={handleLogout}
              className="block md:inline-block px-3 py-3 text-white hover:text-red-400 transition-colors duration-200 text-left md:text-center"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
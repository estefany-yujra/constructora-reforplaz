import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import logo from "../assets/images/logo.png"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-black/30 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-1">

        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Reforplaz"
            className={`h-20 object-contain transition hover:scale-105 ${
              scrolled
                ? "drop-shadow-[0_0_4px_rgba(0,0,0,0.4)]"
                : "drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
            }`}
          />
        </Link>

        {/* MENU */}
        <ul
          className={`hidden md:flex items-center gap-12 text-[1.35rem] font-semibold transition-colors duration-300 ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
        >
          {["Inicio", "Nosotros", "Servicios", "Proyectos", "Contacto"].map((item) => (
            <li key={item}>
              <Link
                to={item === "Inicio" ? "/" : `/${item.toLowerCase()}`}
                className="relative group"
              >
                {item}

                {/* underline animado */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* BOTON */}
        <Link to="/contacto">
          <button
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
              scrolled
                ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:scale-105"
                : "bg-white/90 text-black hover:bg-white hover:scale-105"
            }`}
          >
            Cotizar
          </button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar

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
          ? "border-b border-stone-200 bg-white/88 shadow-sm backdrop-blur-md"
          : "bg-slate-950/25 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Reforplaz"
            className="h-12 object-contain transition hover:scale-105 md:h-14"
          />
        </Link>

        <ul
          className={`hidden items-center gap-8 text-sm font-semibold uppercase tracking-[0.2em] transition-colors duration-300 lg:flex ${
            scrolled ? "text-slate-800" : "text-white"
          }`}
        >
          {["Inicio", "Nosotros", "Servicios", "Proyectos", "Contacto"].map((item) => (
            <li key={item}>
              <Link
                to={item === "Inicio" ? "/" : `/${item.toLowerCase()}`}
                className="relative group"
              >
                {item}

                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        <Link to="/contacto">
          <span
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
              scrolled
                ? "bg-slate-950 text-white hover:scale-105"
                : "bg-white/90 text-slate-950 hover:bg-white hover:scale-105"
            }`}
          >
            Cotizar
          </span>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar

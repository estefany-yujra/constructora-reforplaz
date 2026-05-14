import { Link } from "react-router-dom"
import logo from "../assets/images/logo.png"

function Footer() {
  return (
    <footer className="site-copy bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto grid gap-10 px-8 md:grid-cols-4">
        <div>
          <img src={logo} alt="Industrias Reforplaz" className="mb-4 h-14" />
          <p className="text-sm text-gray-400">
            Industrias Reforplaz desarrolla soluciones en fibra de vidrio para parques
            acuaticos, esculturas y espacios recreativos de alto impacto.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-semibold">Enlaces</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/proyectos">Proyectos</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold">Servicios</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Parques acuaticos</li>
            <li>Esculturas</li>
            <li>Parques infantiles</li>
            <li>Soluciones en fibra de vidrio</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold">Contacto</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>+591 71512374</li>
            <li>reforplaz2015@gmail.com</li>
            <li>Santa Cruz de la Sierra - Bolivia</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-6 text-sm text-gray-500">
        <div className="grid gap-2 md:grid-cols-3 md:items-center">
          <div className="hidden md:block" />
          <p className="text-center">© 2026 Industrias Reforplaz. Todos los derechos reservados.</p>
          <p className="text-center text-xs tracking-[0.08em] text-gray-400 md:text-right">
            Diseno y desarrollo web: Estefany R. Yujra Q.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

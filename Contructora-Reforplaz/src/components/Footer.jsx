import { Link } from "react-router-dom"
import logo from "../assets/images/logo.png"

function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-10">

        {/* LOGO + DESCRIPCIÓN */}
        <div>
          <img src={logo} alt="Reforplaz" className="h-14 mb-4" />
          <p className="text-gray-400 text-sm">
            Diseñamos y construimos parques acuáticos, esculturas y espacios recreativos que transforman experiencias.
          </p>
        </div>

        {/* ENLACES */}
        <div>
          <h3 className="font-semibold mb-4">Enlaces</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/proyectos">Proyectos</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>

        {/* SERVICIOS */}
        <div>
          <h3 className="font-semibold mb-4">Servicios</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Parques Acuáticos</li>
            <li>Esculturas</li>
            <li>Parques Infantiles</li>
            <li>Infraestructura</li>
          </ul>
        </div>

        {/* CONTACTO */}
        <div>
          <h3 className="font-semibold mb-4">Contacto</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>📞 +591 71512374</li>
            <li>✉️ reforplaz2015@gmail.com</li>
            <li>📍 Santa Cruz de la Sierra - Bolivia</li>
          </ul>
        </div>

      </div>

      {/* LINEA */}
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-500 text-sm">
        © 2026 Reforplaz. Todos los derechos reservados.
      </div>

    </footer>
  )
}

export default Footer
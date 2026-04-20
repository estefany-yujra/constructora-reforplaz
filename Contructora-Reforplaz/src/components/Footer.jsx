import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:px-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">
            Reforplaz
          </p>
          <h3 className="mt-4 max-w-md text-2xl font-semibold text-slate-950">
            Construimos espacios recreativos, tematicos y funcionales con identidad propia.
          </h3>
          <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600">
            La estructura del sitio ya quedo lista para seguir creciendo con paginas internas,
            fichas de proyecto y una seccion de contacto mas completa.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Navegacion
          </p>
          <div className="mt-5 flex flex-col gap-3 text-sm text-slate-700">
            <Link to="/">Inicio</Link>
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/servicios">Servicios</Link>
            <Link to="/proyectos">Proyectos</Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Contacto
          </p>
          <div className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
            <p>Atencion personalizada para cotizaciones y proyectos especiales.</p>
            <Link
              to="/contacto"
              className="inline-flex rounded-full bg-slate-950 px-5 py-2.5 font-semibold text-white transition hover:bg-slate-800"
            >
              Ir a contacto
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

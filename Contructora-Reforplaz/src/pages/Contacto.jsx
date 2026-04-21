import { motion } from "framer-motion"
import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"
import { MdEmail, MdLocationOn } from "react-icons/md"

const contactItems = [
  {
    icon: <FaWhatsapp size={22} />,
    name: "WhatsApp",
    detail: "+591 71512374",
    hint: "Escribenos directamente",
    color: "text-green-400",
    ring: "from-green-400/30 to-emerald-300/10",
    link: "https://wa.me/59171512374?text=Hola,%20quiero%20cotizar%20un%20proyecto%20con%20Reforplaz."
  },
  {
    icon: <FaFacebook size={22} />,
    name: "Facebook",
    detail: "Industrias Reforplaz",
    hint: "Noticias y novedades",
    color: "text-blue-400",
    ring: "from-blue-400/30 to-cyan-300/10",
    link: "https://www.facebook.com/share/18p72c1Ht6/"
  },
  {
    icon: <FaInstagram size={22} />,
    name: "Instagram",
    detail: "@reforplazindustrias",
    hint: "Proyectos y contenido visual",
    color: "text-pink-400",
    ring: "from-pink-400/30 to-orange-300/10",
    link: "https://www.instagram.com/industrias.reforplaz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  },
  {
    icon: <FaYoutube size={22} />,
    name: "YouTube",
    detail: "Industrias Reforplaz",
    hint: "Mira nuestros trabajos",
    color: "text-red-400",
    ring: "from-red-400/30 to-orange-300/10",
    link: "https://www.youtube.com/@IndustriasReforplaz"
  },
  {
    icon: <MdEmail size={22} />,
    name: "Correo",
    detail: "reforplaz2015@gmail.com",
    hint: "Consultas y cotizaciones",
    color: "text-cyan-400",
    ring: "from-cyan-400/30 to-blue-300/10",
    link: "mailto:reforplaz2015@gmail.com"
  }
]

function Contacto() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#08101c_0%,#0b1628_36%,#08111f_100%)] px-8 pt-28 text-white">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-7 grid gap-8 border-b border-cyan-300/15 pb-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end"
        >
          <div>
            <h1 className="bg-[linear-gradient(135deg,#dff9ff_0%,#8be9ff_38%,#22d3ee_62%,#60a5fa_100%)] bg-clip-text text-[2.8rem] font-black leading-[0.9] tracking-[-0.07em] text-transparent md:text-[3.4rem]">
              Contactanos
            </h1>
          </div>

          <div className="max-w-md lg:justify-self-end">
            <div className="flex items-start gap-4">
              <span className="mt-1 h-14 w-px bg-[linear-gradient(180deg,#fb923c_0%,#22d3ee_100%)]"></span>
              <p className="text-lg italic leading-relaxed text-slate-200">
                Cuentanos tu idea y la convertimos en un proyecto real.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
            className="rounded-[1.8rem] border border-cyan-300/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.72),rgba(9,17,31,0.9))] p-6 shadow-[0_26px_60px_rgba(2,6,23,0.24)] backdrop-blur-md"
          >
            <div className="mb-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
                Cotiza tu proyecto
              </p>
              <h2 className="mt-3 text-[1.75rem] font-black leading-[0.94] tracking-[-0.05em] text-slate-100">
                Hablemos de lo que quieres construir
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
                Completa el formulario y nos pondremos en contacto contigo para darte una respuesta clara y personalizada.
              </p>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full rounded-xl border border-white/10 bg-slate-900/40 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-cyan-300/45 focus:outline-none focus:ring-2 focus:ring-cyan-300/20"
              />

              <input
                type="email"
                placeholder="Correo"
                className="w-full rounded-xl border border-white/10 bg-slate-900/40 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-cyan-300/45 focus:outline-none focus:ring-2 focus:ring-cyan-300/20"
              />

              <textarea
                placeholder="Describe tu proyecto..."
                className="h-36 w-full rounded-xl border border-white/10 bg-slate-900/40 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-cyan-300/45 focus:outline-none focus:ring-2 focus:ring-cyan-300/20"
              ></textarea>
            </div>

            <div className="mt-3 space-y-3">
              <button className="w-full rounded-xl bg-[linear-gradient(135deg,#22d3ee_0%,#2563eb_55%,#f97316_100%)] py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-slate-950 shadow-[0_18px_40px_rgba(37,99,235,0.28)] transition duration-300 hover:-translate-y-0.5">
                Enviar solicitud
              </button>
              <p className="text-xs leading-6 text-slate-500">
                Tambien puedes escribirnos por WhatsApp o por cualquiera de nuestras redes sociales.
              </p>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
            className="space-y-5"
          >
            <div className="rounded-[1.8rem] border border-cyan-300/10 bg-[linear-gradient(180deg,rgba(8,18,31,0.78),rgba(7,15,27,0.92))] p-6 shadow-[0_24px_52px_rgba(2,6,23,0.22)]">
              <div className="mb-3">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
                  Canales activos
                </p>
                <h2 className="mt-3 text-[1.75rem] font-black leading-[0.94] tracking-[-0.05em] text-slate-100">
                  Contacto y redes
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Todas nuestras redes estan activas y funcionan como accesos directos para consultas, seguimiento y contenido.
                </p>
              </div>

              <div className="space-y-3">
                {contactItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`group grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-[1.2rem] border border-white/8 bg-[linear-gradient(135deg,rgba(15,23,42,0.68),rgba(11,20,34,0.86))] px-4 py-3 shadow-[0_12px_28px_rgba(2,6,23,0.14)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/24 hover:bg-[linear-gradient(135deg,rgba(18,28,44,0.82),rgba(10,19,33,0.96))]`}
                  >
                    <div className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_45%),linear-gradient(135deg,rgba(15,23,42,0.9),rgba(10,18,31,0.92))] ${item.color}`}>
                      {item.icon}
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-[1rem] font-semibold text-slate-200">
                        {item.detail}
                      </p>
                      <p className="mt-0.5 text-xs leading-5 text-slate-500">
                        {item.hint}
                      </p>
                    </div>

                    <div className="min-w-[108px] text-right">
                      <p className="text-[0.82rem] font-semibold uppercase tracking-[0.18em] text-slate-100">
                        {item.name}
                      </p>
                      <span className={`mt-2 ml-auto block h-px w-16 bg-gradient-to-r ${item.ring}`}></span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-8 rounded-[1.9rem] border border-cyan-300/10 bg-[linear-gradient(180deg,rgba(8,18,31,0.78),rgba(7,15,27,0.92))] p-6 shadow-[0_22px_52px_rgba(2,6,23,0.22)]"
        >
          <div className="mb-5 flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(34,211,238,0.16),rgba(59,130,246,0.12),rgba(249,115,22,0.14))] text-cyan-200">
              <MdLocationOn size={24} />
            </div>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
                Ubicacion
              </p>
              <h3 className="mt-2 text-[1.9rem] font-black leading-[0.94] tracking-[-0.04em] text-slate-100">
                Santa Cruz de la Sierra - Bolivia
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                Podemos coordinar atencion y seguimiento por medios digitales y redes activas, con respuesta cercana para consultas y cotizaciones.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.6rem] border border-white/8">
            <iframe
              src="https://www.google.com/maps?q=Santa+Cruz+de+la+Sierra&output=embed"
              width="100%"
              height="260"
              className="border-0 grayscale-[0.2] contrast-110 saturate-[0.85]"
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contacto
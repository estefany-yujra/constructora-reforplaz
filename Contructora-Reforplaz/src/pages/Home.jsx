import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import videoBg from "../assets/video/hero.mp4"
import servicesImage from "../assets/images/servicios.jpg"
import proyecto1 from "../assets/images/proyecto1.jpg"
import proyecto2 from "../assets/images/proyecto2.jpg"
import proyecto3 from "../assets/images/proyecto3.jpg"

function Home() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[88vh] w-full overflow-hidden">
        <video autoPlay loop muted className="absolute h-full w-full object-cover">
          <source src={videoBg} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_26%),radial-gradient(circle_at_78%_18%,rgba(37,99,235,0.16),transparent_24%),linear-gradient(180deg,rgba(4,10,18,0.16)_0%,rgba(4,10,18,0.08)_42%,rgba(4,10,18,0.22)_100%)]"></div>
        <div className="absolute left-[8%] top-[18%] h-52 w-52 rounded-full bg-cyan-400/14 blur-3xl"></div>
        <div className="absolute bottom-[14%] right-[10%] h-64 w-64 rounded-full bg-blue-600/14 blur-3xl"></div>

        <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl flex-col items-center justify-center px-6 pb-10 pt-28 text-center text-white md:px-8 md:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-3 inline-flex w-fit items-center gap-3 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.15)] backdrop-blur-md md:text-[0.8rem]"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.95)]"></span>
            TECNOLOGIA EN FIBRA DE VIDRIO
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.1 }}
            className="mx-auto max-w-4xl text-[2.15rem] font-black leading-[0.92] tracking-[-0.07em] text-slate-100 sm:text-[2.7rem] md:text-[3.2rem] lg:text-[3.7rem]"
          >
            <span className="inline-block rounded-[1rem] border border-white/10 bg-[rgba(4,10,18,0.28)] px-4 py-2 bg-[linear-gradient(180deg,#f4f8fb_0%,#dde6ee_36%,#91a1b2_100%)] bg-clip-text text-transparent shadow-[0_8px_28px_rgba(0,0,0,0.18)] backdrop-blur-[4px] [text-shadow:0_4px_20px_rgba(0,0,0,0.28)]">
              CREAMOS ESPACIOS QUE
            </span>
            <span className="mt-5 inline-block rounded-[1rem] border border-slate-300/12 bg-[rgba(4,10,18,0.24)] px-4 py-2 bg-[linear-gradient(180deg,#203a57_0%,#102033_34%,#163553_72%,#355684_100%)] bg-clip-text text-transparent shadow-[0_8px_28px_rgba(0,0,0,0.2)] backdrop-blur-[4px] [text-shadow:0_0_18px_rgba(8,15,26,0.18)]">
              TRANSFORMAN EXPERIENCIAS
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.9 }}
            className="mx-auto mt-5 max-w-3xl rounded-[1rem] border border-white/10 bg-[rgba(4,10,18,0.2)] px-4 py-2.5 text-[1.02rem] leading-relaxed text-slate-100 backdrop-blur-[3px] md:text-[1.15rem]"
          >
            Parques acuaticos, esculturas y proyectos unicos que combinan ingenieria, narrativa visual y construccion de alto impacto.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center"
          >
            <Link
              to="/proyectos"
              className="group relative overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#22d3ee_0%,#2563eb_55%,#1d4ed8_100%)] px-8 py-4 text-base font-bold text-white shadow-[0_18px_45px_rgba(37,99,235,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(34,211,238,0.38)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.35)_50%,transparent_80%)] opacity-0 transition duration-500 group-hover:translate-x-full group-hover:opacity-100"></span>
              <span className="relative z-10">Ver proyectos</span>
            </Link>

            <Link
              to="/contacto"
              className="group rounded-2xl border border-white/25 bg-white/10 px-8 py-4 text-base font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-300/70 hover:bg-white/18 hover:shadow-[0_18px_40px_rgba(15,23,42,0.28)]"
            >
              <span className="bg-[linear-gradient(135deg,#dff9ff_0%,#c9f7ff_65%,#8be9ff_100%)] bg-clip-text text-transparent">
                Cotizar proyecto
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#06111f_0%,#0a1d31_58%,#0f2740_100%)] py-18 text-white md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.14),transparent_30%)]"></div>

        <div className="relative mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-5 lg:grid-cols-[0.96fr_0.84fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.75 }}
              className="max-w-xl"
            >
              <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-cyan-200">
                Nuestros servicios
              </span>

              <h2 className="mt-4 text-[2rem] font-black leading-[0.9] tracking-[-0.06em] text-white md:text-[2.35rem]">
                <span className="block">SOLUCIONES QUE COMBINAN</span>
                <span className="mt-1 block bg-[linear-gradient(135deg,#dff9ff_0%,#8be9ff_35%,#22d3ee_60%,#fb923c_100%)] bg-clip-text text-transparent">
                  INGENIERIA, DIVERSION Y DISEÑO
                </span>
              </h2>

              <p className="mt-5 max-w-lg text-[1.02rem] leading-8 text-slate-300 md:text-lg">
                Desarrollamos proyectos recreativos, tematicos y estructurales pensados para transformar espacios en experiencias memorables. Aqui resumimos nuestra propuesta con una mirada clara: diseno, fabricacion e instalacion de soluciones que equilibran impacto visual, funcionalidad y durabilidad.
              </p>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/servicios"
                className="rounded-xl bg-[linear-gradient(135deg,#22d3ee_0%,#2563eb_55%,#1d4ed8_100%)] px-4 py-2 text-center text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-white shadow-md transition duration-300 hover:-translate-y-1"
              >
                Ver todos los servicios
              </Link>

              <div className="flex items-center gap-3 text-[0.78rem] font-medium uppercase tracking-[0.18em] text-slate-400">
                <span className="h-px w-12 bg-gradient-to-r from-cyan-300 to-orange-400"></span>
                Soluciones a medida para cada espacio
              </div>
            </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="relative lg:-mt-6"
            >
              <div className="absolute -left-5 -top-5 h-24 w-24 rounded-full bg-cyan-300/18 blur-3xl"></div>
              <div className="absolute -bottom-5 -right-5 h-28 w-28 rounded-full bg-orange-400/15 blur-3xl"></div>

              <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/8 p-2.5 shadow-[0_24px_56px_rgba(0,0,0,0.3)] backdrop-blur-sm">
                <img
                  src={servicesImage}
                  alt="Resumen visual de servicios"
                  className="h-[340px] w-full rounded-[1.2rem] object-cover"
                />

                <div className="absolute inset-x-5 bottom-5 rounded-[1.2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(6,17,31,0.88),rgba(12,31,48,0.82))] p-3.5 shadow-[0_16px_35px_rgba(0,0,0,0.26)] backdrop-blur-md">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-cyan-200">
                    Enfoque integral
                  </p>
                  <p className="mt-1.5 max-w-[22ch] text-[0.95rem] font-bold leading-snug text-white">
                    Del concepto a la instalacion final con una misma vision de impacto.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, delay: 0.05 }}
            className="mt-8"
          >
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Juegos acuaticos",
                  text: "Atracciones dinamicas para parques, piscinas y espacios recreativos."
                },
                {
                  title: "Esculturas y tematizacion",
                  text: "Piezas visuales que refuerzan identidad, narrativa y presencia."
                },
                {
                  title: "Parques infantiles",
                  text: "Zonas recreativas seguras, atractivas y pensadas para convivir."
                },
                {
                  title: "Infraestructura complementaria",
                  text: "Elementos de apoyo que completan la experiencia del proyecto."
                }
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.35rem] border border-white/10 bg-white/6 p-4 shadow-[0_14px_34px_rgba(2,6,23,0.2)] backdrop-blur-sm"
                >
                  <div className="h-1.5 w-12 rounded-full bg-[linear-gradient(90deg,#22d3ee_0%,#f97316_100%)]"></div>
                  <h3 className="mt-3 text-[1.02rem] font-bold text-white">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#08131f_0%,#0d2236_28%,#123554_100%)] py-24 text-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_26%),radial-gradient(circle_at_80%_18%,rgba(249,115,22,0.14),transparent_22%),linear-gradient(180deg,rgba(8,19,31,0.12),rgba(8,19,31,0.18))]"></div>
        <div className="relative mx-auto max-w-7xl px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75 }}
            className="relative grid gap-8 border-b border-cyan-300/20 pb-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end"
          >
            <div>
              <span className="inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200 shadow-sm">
                Proyectos destacados
              </span>
              <h2 className="mt-3 text-[1.95rem] font-black leading-none tracking-[-0.07em] text-slate-50 md:text-[2.35rem]">
                <span className="block whitespace-nowrap bg-[linear-gradient(135deg,#fb923c_0%,#f97316_46%,#22d3ee_100%)] bg-clip-text text-transparent">
                  GALERIA DE OBRAS DE ALTO IMPACTO
                </span>
              </h2>
            </div>

            <div className="max-w-md lg:justify-self-end">
              <div className="flex items-start gap-4">
                <span className="mt-1 h-14 w-px bg-[linear-gradient(180deg,#fb923c_0%,#22d3ee_100%)]"></span>
                <p className="text-lg italic leading-relaxed text-slate-200">
                  Proyectos recreativos que dejan huella visual y funcional.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="mt-5 grid gap-8 lg:grid-cols-3">
            {[
              {
                img: proyecto1,
                title: "Complejo acuatico infantil",
                category: "Ingenieria recreativa",
                description: "Espacios familiares pensados para juego, color y experiencia segura.",
                href: "/proyectos"
              },
              {
                img: proyecto2,
                title: "Torre acuatico de gran altura",
                category: "Proyecto residencial",
                description: "Soluciones a medida para entornos privados con presencia visual superior.",
                href: "/proyectos"
              },
              {
                img: proyecto3,
                title: "Infraestructura recreativa integral",
                category: "Infraestructura turistica",
                description: "Atracciones de alto impacto para destinos recreativos y turisticos.",
                href: "/proyectos"
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/12 bg-slate-950/30 shadow-[0_24px_60px_rgba(2,6,23,0.32)]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-[0.4deg]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,10,18,0.04)_5%,rgba(2,6,23,0.24)_45%,rgba(2,6,23,0.78)_100%)]"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_26%)] opacity-0 transition duration-500 group-hover:opacity-100"></div>
                  <div className="absolute left-6 top-6 rounded-full border border-cyan-300/20 bg-slate-950/70 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-cyan-100 backdrop-blur-sm">
                    {item.category}
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-6 transition duration-500 group-hover:translate-y-[-4px]">
                    <h3 className="max-w-[14ch] text-[1.7rem] font-black leading-[0.98] tracking-[-0.04em] text-slate-50">
                      {item.title}
                    </h3>
                  </div>

                  <div className="absolute inset-0 flex items-end bg-[linear-gradient(180deg,rgba(2,6,23,0.04)_0%,rgba(2,6,23,0.5)_44%,rgba(2,6,23,0.92)_100%)] p-6 opacity-0 transition duration-500 group-hover:opacity-100">
                    <div className="translate-y-6 rounded-[1.5rem] border border-cyan-300/14 bg-[linear-gradient(180deg,rgba(9,18,31,0.9),rgba(6,17,31,0.96))] p-5 shadow-[0_20px_45px_rgba(0,0,0,0.28)] backdrop-blur-md transition duration-500 group-hover:translate-y-0">
                      <p className="text-sm leading-6 text-slate-200">
                        {item.description}
                      </p>
                      <Link
                        to={item.href}
                        className="mt-5 inline-flex items-center gap-3 rounded-2xl bg-[linear-gradient(135deg,#22d3ee_0%,#2563eb_58%,#f97316_100%)] px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-950 transition duration-300 hover:-translate-y-0.5"
                      >
                        Ver proyecto
                        <span className="text-base leading-none">+</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-sm leading-relaxed text-slate-400">
              Cada proyecto destacado funciona aqui como una muestra resumida. La galeria completa y el detalle tecnico viviran en la pagina de proyectos.
            </p>

            <Link
              to="/proyectos"
              className="rounded-2xl border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.12),rgba(59,130,246,0.12),rgba(249,115,22,0.12))] px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-cyan-100 shadow-[0_14px_35px_rgba(15,23,42,0.18)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/45 hover:text-white"
            >
              Explorar proyectos
            </Link>
          </div>
        </div>
      </section>

      {/* EXPERIENCIA, PROCESO Y GARANTIA */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#08131f_0%,#0b1d2d_45%,#123554_100%)] py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.12),transparent_30%)]"></div>
        <div className="relative mx-auto max-w-7xl px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8 }}
            className="mb-10 max-w-3xl"
          >
            <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-cyan-200">
              Experiencia Reforplaz
            </span>
            <h2 className="mt-4 text-[1.95rem] font-black leading-none tracking-[-0.07em] text-slate-100 md:text-[2.3rem]">
              <span className="block whitespace-nowrap bg-[linear-gradient(135deg,#d7f7ff_0%,#67e8f9_38%,#60a5fa_74%,#fb923c_100%)] bg-clip-text text-transparent">
                EXPERIENCIA, PROCESO Y GARANTIA
              </span>
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
              Convertimos ideas en espacios memorables con una metodologia clara, experiencia comprobada y ejecucion integral de principio a fin.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="grid gap-4 md:grid-cols-3"
          >
            {[
              { value: "+12", label: "anos creando espacios memorables" },
              { value: "360°", label: "diseno, fabricacion e instalacion" },
              { value: "Alto", label: "impacto visual y estructural" }
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[1.6rem] border border-cyan-300/10 bg-[linear-gradient(180deg,rgba(13,27,42,0.84),rgba(10,22,34,0.92))] px-5 py-5 shadow-[0_20px_50px_rgba(2,6,23,0.28)] backdrop-blur-sm"
              >
                <div className="h-1.5 w-14 rounded-full bg-[linear-gradient(90deg,#22d3ee_0%,#2563eb_60%,#f97316_100%)]"></div>
                <p className="mt-4 bg-[linear-gradient(135deg,#d7f7ff_0%,#67e8f9_38%,#60a5fa_74%,#fb923c_100%)] bg-clip-text text-[2rem] font-black leading-none tracking-[-0.05em] text-transparent">
                  {item.value}
                </p>
                <p className="mt-2 max-w-[18ch] text-sm font-medium leading-6 text-slate-300">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-12"
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px flex-1 bg-[linear-gradient(90deg,transparent_0%,rgba(34,211,238,0.45)_40%,rgba(249,115,22,0.45)_100%)]"></span>
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-cyan-200">
                Nuestro proceso
              </span>
              <span className="h-px flex-1 bg-[linear-gradient(90deg,rgba(34,211,238,0.45)_0%,rgba(249,115,22,0.45)_60%,transparent_100%)]"></span>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Concepto y diseno",
                  text: "Escuchamos la idea, analizamos el espacio y desarrollamos una propuesta funcional, atractiva y alineada al proyecto."
                },
                {
                  step: "02",
                  title: "Fabricacion y desarrollo",
                  text: "Transformamos el concepto en soluciones reales con procesos tecnicos enfocados en calidad, resistencia y presencia visual."
                },
                {
                  step: "03",
                  title: "Instalacion y entrega",
                  text: "Ejecutamos el montaje final cuidando cada detalle para entregar un espacio listo para funcionar, destacar y perdurar."
                }
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-[1.7rem] border border-cyan-300/10 bg-[linear-gradient(180deg,rgba(8,19,31,0.86),rgba(7,16,26,0.94))] p-6 shadow-[0_18px_44px_rgba(2,6,23,0.24)]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-cyan-200">
                      Paso {item.step}
                    </p>
                    <span className="text-[2.6rem] font-black leading-none tracking-[-0.06em] text-cyan-300/18">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="mt-4 text-[1.35rem] font-black leading-tight tracking-[-0.03em] text-slate-100">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home

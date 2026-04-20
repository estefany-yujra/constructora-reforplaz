import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import SectionHeading from "../components/home/SectionHeading"
import {
  featuredProjects,
  metrics,
  processSteps,
  services,
} from "../data/homeContent"
import videoBg from "../assets/video/hero.mp4"

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7 },
}

function Home() {
  return (
    <main className="overflow-hidden bg-stone-100 text-slate-950">
      <section className="relative isolate min-h-screen w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={videoBg} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(7,18,28,0.92),rgba(7,18,28,0.62)_42%,rgba(14,165,233,0.18))]" />

        <div className="hero-grid relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-14 pt-32 text-white md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl"
          >
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">
              Diseno, construccion e impacto visual
            </span>

            <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
              Creamos espacios que convierten una idea en una experiencia memorable.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
              Desarrollamos parques acuaticos, esculturas, areas recreativas e
              infraestructura especial para proyectos que quieren destacar de verdad.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#proyectos"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Ver proyectos
              </a>
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-950"
              >
                Cotizar proyecto
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.9 }}
            className="mt-14 grid gap-4 md:mt-20 md:grid-cols-3"
          >
            {metrics.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-md"
              >
                <p className="text-3xl font-semibold text-white">{item.value}</p>
                <p className="mt-3 max-w-xs text-sm leading-6 text-slate-200">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:px-10 lg:grid-cols-[1.1fr_1.3fr]">
        <motion.div {...fadeUp}>
          <SectionHeading
            eyebrow="Enfoque"
            title="Una home debe vender confianza antes de vender servicios."
            description="Reorganizamos el inicio para que cuente una historia mas clara: primero propuesta de valor, despues capacidades, luego evidencia y finalmente una llamada a la accion."
          />
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid gap-5 md:grid-cols-2"
        >
          {[
            "Mensaje principal mas claro y directo.",
            "Secciones con una jerarquia visual consistente.",
            "Contenido facil de mover a otras paginas despues.",
            "Base lista para crecer sin saturar un solo archivo.",
          ].map((point) => (
            <div
              key={point}
              className="rounded-3xl border border-stone-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)]"
            >
              <div className="mb-4 h-2 w-14 rounded-full bg-cyan-400" />
              <p className="text-base leading-7 text-slate-700">{point}</p>
            </div>
          ))}
        </motion.div>
      </section>

      <section id="servicios" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <motion.div {...fadeUp}>
          <SectionHeading
            eyebrow="Servicios"
            title="Soluciones construidas para destacar visualmente y durar."
            description="En vez de mostrar una lista plana, la home ahora presenta cada servicio con una pequena promesa de valor."
          />
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              {...fadeUp}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group rounded-[2rem] border border-stone-200 bg-white p-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:border-cyan-200"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
                0{index + 1}
              </span>
              <h3 className="mt-5 text-2xl font-semibold text-slate-950">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {service.description}
              </p>
              <div className="mt-8 h-px w-full bg-gradient-to-r from-cyan-400 to-transparent transition group-hover:from-sky-600" />
            </motion.article>
          ))}
        </div>
      </section>

      <section id="proyectos" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.div {...fadeUp}>
            <SectionHeading
              eyebrow="Proyectos destacados"
              title="La prueba visual de que la propuesta puede hacerse realidad."
              description="Estas tarjetas ya estan listas para convertirse despues en una seccion dinamica o en una pagina completa de portafolio."
            />
          </motion.div>

          <div className="mt-14 grid gap-7 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.title}
                {...fadeUp}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                className="group overflow-hidden rounded-[2rem] bg-slate-950"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
                </div>

                <div className="space-y-4 p-8 text-white">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                    <span className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.24em] text-cyan-200">
                      {project.location}
                    </span>
                  </div>
                  <p className="text-sm leading-7 text-slate-300">
                    {project.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <motion.div {...fadeUp}>
          <SectionHeading
            eyebrow="Proceso"
            title="Una estructura simple tambien ayuda a explicar como trabajan."
            description="Mostrar el proceso en la home aporta orden, reduce dudas del cliente y hace que el sitio se sienta mas profesional."
            centered
          />
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <motion.article
              key={step.title}
              {...fadeUp}
              transition={{ duration: 0.65, delay: index * 0.09 }}
              className="rounded-[2rem] border border-stone-200 bg-stone-50 p-8"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">
                {step.number}
              </span>
              <h3 className="mt-5 text-2xl font-semibold text-slate-950">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {step.description}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10">
        <motion.div
          {...fadeUp}
          className="mx-auto max-w-7xl rounded-[2.5rem] bg-slate-950 px-8 py-16 text-center text-white md:px-14"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200">
            Siguiente paso
          </span>
          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Lista para convertir esta home en una base fuerte para toda la web.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            El sitio ya puede crecer con paginas internas mas completas sin perder
            coherencia visual ni estructura.
          </p>
          <Link
            to="/contacto"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-cyan-400 px-8 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Cotizar ahora
          </Link>
        </motion.div>
      </section>
    </main>
  )
}

export default Home

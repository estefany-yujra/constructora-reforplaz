import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

import proyecto2 from "../assets/images/proyectos/servicio2.jpeg"
import proyecto3 from "../assets/images/proyectos/servicio3.png"
import proyecto4 from "../assets/images/proyectos/servicio4.jpeg"
import proyecto5 from "../assets/images/proyectos/servicio5.png"
import proyecto6 from "../assets/images/proyectos/servicio6.jpeg"
import proyecto7 from "../assets/images/proyectos/servicio7.png"
import equipoImagen from "../assets/images/proyectos/servicio8.JPG"

const MotionDiv = motion.div

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, ease: "easeOut" },
}

const pillars = [
  {
    title: "Mision",
    text: "Desarrollar proyectos con calidad visual, compromiso tecnico y soluciones que inspiren confianza en cada etapa.",
  },
  {
    title: "Vision",
    text: "Consolidarnos como una empresa referente por su creatividad, cumplimiento y capacidad de transformar ideas en espacios memorables.",
  },
  {
    title: "Valores",
    text: "Responsabilidad, detalle, trabajo en equipo y pasion por construir resultados bien hechos y bien presentados.",
  },
]

const gallery = [
  {
    id: "02",
    image: proyecto2,
    title: "Calidad visible",
    description:
      "Acabados y composiciones que transmiten una imagen profesional desde el primer vistazo.",
  },
  {
    id: "03",
    image: proyecto3,
    title: "Diseno con identidad",
    description:
      "Cada proyecto se trabaja buscando una presencia visual clara, atractiva y coherente.",
  },
  {
    id: "04",
    image: proyecto4,
    title: "Obras con presencia",
    description:
      "Espacios construidos para funcionar bien y al mismo tiempo dejar una impresion fuerte.",
  },
  {
    id: "05",
    image: proyecto5,
    title: "Detalles que suman valor",
    description:
      "La diferencia muchas veces esta en el cuidado de los elementos que hacen ver mejor toda la obra.",
  },
  {
    id: "06",
    image: proyecto6,
    title: "Soluciones adaptadas",
    description:
      "Cada propuesta responde al contexto del cliente sin perder estilo, orden ni personalidad.",
  },
  {
    id: "07",
    image: proyecto7,
    title: "Resultado memorable",
    description:
      "Buscamos que cada espacio quede asociado a una sensacion de calidad y confianza duradera.",
  },
]

function Nosotros() {
  const [selectedProject, setSelectedProject] = useState(gallery[0])

  return (
    <main className="bg-[#04111d] text-slate-100">
      <section className="relative overflow-hidden">
        <img
          src={equipoImagen}
          alt="Nosotros Reforplaz"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,17,29,0.72)_0%,rgba(4,17,29,0.56)_42%,rgba(4,17,29,0.82)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.1),transparent_22%),radial-gradient(circle_at_left,rgba(249,115,22,0.08),transparent_18%)]" />

        <div className="relative mx-auto max-w-5xl px-6 pb-10 pt-24 text-center md:px-10 md:pb-12 md:pt-28">
          <MotionDiv
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="rounded-[1.8rem] border border-white/8 bg-[linear-gradient(145deg,rgba(3,12,23,0.58),rgba(6,28,48,0.48))] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.2)] backdrop-blur-sm lg:p-8"
          >
            <div className="mx-auto max-w-3xl">
              <div className="mb-3 inline-flex items-center gap-3 rounded-full border border-cyan-300/15 bg-slate-950/45 px-4 py-2 backdrop-blur-md">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100/85">
                  Nosotros
                </span>
              </div>

              <h1 className="text-[2.2rem] font-black leading-none tracking-[-0.07em] text-white md:text-[3.1rem]">
                SOBRE REFORPLAZ
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-200/90 md:text-base">
                Tu inversión se convierte en un espacio que genera orgullo y valor.
              </p>

              <div className="mt-3 flex flex-wrap justify-center gap-3">
                <div className="rounded-full border border-white/10 bg-slate-950/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-200">
                  Calidad
                </div>
                <div className="rounded-full border border-white/10 bg-slate-950/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-200">
                  Compromiso
                </div>
                <div className="rounded-full border border-white/10 bg-slate-950/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-200">
                  Identidad
                </div>
              </div>

              <div className="mt-7">
                <a
                  href="#galeria"
                  className="inline-flex rounded-full border border-cyan-300/25 bg-slate-950/45 px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white transition duration-300 hover:border-orange-300/45 hover:text-orange-200"
                >
                  Ver galeria
                </a>
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>

      <section id="identidad" className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <MotionDiv {...reveal} className="grid gap-8 lg:grid-cols-[1fr_1.05fr]">
          <div className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(160deg,rgba(3,12,23,0.95),rgba(6,33,57,0.95),rgba(9,77,98,0.88))] p-7 shadow-[0_24px_70px_rgba(0,0,0,0.22)]">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              QUIENES SOMOS
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">
              MAS QUE CONSTRUIR CREAMOS EXPERIENCIAS MEMORABLES
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-200/90 md:text-base">
              Nacimos con un sueño: transformar espacios en experiencias memorables. Cada proyecto que emprendemos es más que construcción; es la oportunidad de dejar huella, de convertir ideas en realidades que inspiran confianza y orgullo. Nuestro trabajo refleja la pasión de un equipo que cree que la calidad y el detalle pueden cambiar la forma en que las personas disfrutan sus entornos. <br />
              Creemos que los proyectos hablan por quienes los impulsan. Por eso trabajamos para que cada espacio construido refleje la identidad de nuestros clientes y se convierta en un legado. Nuestra misión no es solo edificar, sino crear lugares que generen orgullo, confianza y experiencias inolvidables.
            </p>
          </div>

          <div className="grid gap-4">
            {pillars.map((item, index) => (
              <MotionDiv
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="rounded-[1.5rem] border border-white/8 bg-slate-950/55 p-6 transition duration-300 hover:border-cyan-300/30"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-300">
                  {item.title}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">
                  {item.text}
                </p>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>
      </section>

      <section id="galeria" className="mx-auto max-w-7xl px-6 py-6 md:px-10 md:py-8">
        <MotionDiv
          {...reveal}
          className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-300">
              Galeria
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              PROYECTOS QUE REFLEJAN CALIDAD Y CONFIANZA
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-300">
            Explora nuestra galería: espacios diseñados para inspirar confianza y mostrar resultados tangibles.
          </p>
        </MotionDiv>

        <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
          <MotionDiv
            {...reveal}
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/60 shadow-[0_30px_70px_rgba(0,0,0,0.3)]"
          >
            <div className="relative h-[24rem] overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="h-full w-full object-cover transition duration-500"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(2,10,20,0.18),rgba(2,10,20,0.95))]" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <span className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300">
                  Proyecto {selectedProject.id}
                </span>
                <h3 className="mt-3 text-3xl font-bold text-white">
                  {selectedProject.title}
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-7 text-slate-200/90">
                  {selectedProject.description}
                </p>
              </div>
            </div>
          </MotionDiv>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {gallery.map((project, index) => {
              const isActive = selectedProject.id === project.id

              return (
                <MotionDiv
                  key={project.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                >
                  <button
                    type="button"
                    onMouseEnter={() => setSelectedProject(project)}
                    onFocus={() => setSelectedProject(project)}
                    onClick={() => setSelectedProject(project)}
                    className={`group w-full overflow-hidden rounded-[1.6rem] border text-left transition duration-300 ${
                      isActive
                        ? "border-cyan-300/60 shadow-[0_18px_45px_rgba(8,145,178,0.28)]"
                        : "border-white/8 hover:border-orange-300/45"
                    } bg-slate-950/55`}
                  >
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(3,9,18,0.15),rgba(3,9,18,0.88))]" />
                      <div className="absolute left-4 top-4 rounded-full bg-slate-950/75 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-orange-300 backdrop-blur">
                        {project.id}
                      </div>
                      <div className="absolute inset-x-0 bottom-0 p-4">
                        <h3 className="text-lg font-bold text-white">{project.title}</h3>
                      </div>
                    </div>
                  </button>
                </MotionDiv>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <MotionDiv
          {...reveal}
          className="grid gap-7 overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(135deg,rgba(3,12,23,0.96),rgba(6,31,54,0.94),rgba(10,109,127,0.9))] p-6 lg:grid-cols-[0.9fr_1.1fr] lg:p-7"
        >
          <div className="relative overflow-hidden rounded-[1.4rem]">
            <img
              src={equipoImagen}
              alt="Equipo de trabajo de Reforplaz"
              className="h-full min-h-[21rem] w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,9,18,0.02),rgba(3,9,18,0.72))]" />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Nuestro equipo
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              PERSONAS QUE CONSTRUYEN CONFIANZA
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-200/90 md:text-base">
              Nuestro equipo convierte retos en resultados, con experiencia y responsabilidad en cada paso.
            </p>

            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-950/35 p-4 backdrop-blur-md">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-300">
                  Confianza
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-200/90">
                  Mostrar al equipo refuerza la seriedad y el compromiso de la marca.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/35 p-4 backdrop-blur-md">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-300">
                  Cercania
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-200/90">
                  Equilibra la galeria de proyectos con una presencia mas humana.
                </p>
              </div>
            </div>

            <div className="mt-7">
              <Link
                to="/contacto"
                className="inline-flex rounded-full border border-cyan-300/25 bg-slate-950/45 px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white transition duration-300 hover:border-orange-300/45 hover:text-orange-200"
              >
                Hablemos de tu proyecto
              </Link>
            </div>
          </div>
        </MotionDiv>
      </section>
    </main>
  )
}

export default Nosotros

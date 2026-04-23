import { useEffect, useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"

const MotionDiv = motion.div
const MotionArticle = motion.article

const imageModules = import.meta.glob("../assets/images/proyectos/**/*.{png,jpg,jpeg,JPG,webp}", {
  eager: true,
  import: "default"
})

const categories = [
  {
    slug: "banos_portatiles",
    title: "BAÑOS PORTATILES",
    concept: "Infraestructura funcional",
    icon: "BP",
    description:
      "Esta linea esta pensada para resolver necesidades sanitarias en espacios de alto flujo sin sacrificar presencia visual. Son modulos resistentes, faciles de integrar y adecuados para proyectos recreativos, comerciales o temporales donde la funcionalidad debe verse tan bien como responde."
  },
  {
    slug: "basureros",
    title: "BASUREROS",
    concept: "Mobiliario complementario",
    icon: "BS",
    description:
      "Aqui reunimos soluciones de apoyo que ayudan a ordenar, cuidar y completar la experiencia del espacio. Son piezas practicas, durables y visualmente coherentes con proyectos urbanos, recreativos y de convivencia donde cada detalle suma al resultado final."
  },
  {
    slug: "embarcaciones",
    title: "EMBARCACIONES",
    concept: "Experiencia y presencia",
    icon: "EM",
    description:
      "Esta categoria muestra propuestas con una carga visual mucho mas especial. Son piezas pensadas para generar impacto, reforzar una narrativa de proyecto y aportar una experiencia distinta, combinando resistencia estructural con una lectura mas atractiva y memorable."
  },
  {
    slug: "esculturas",
    title: "ESCULTURAS",
    concept: "Tematizacion y caracter",
    icon: "ES",
    description:
      "Las esculturas funcionan como puntos de identidad dentro de un proyecto. No solo decoran: construyen presencia, cuentan una historia y ayudan a que el espacio tenga un sello propio. Es una linea ideal para tematizacion, ambientacion y atractivo visual de alto nivel."
  },
  {
    slug: "gimnasio",
    title: "GIMNASIO",
    concept: "Movimiento y uso continuo",
    icon: "GY",
    description:
      "Estos proyectos estan orientados a zonas activas que necesitan equipamiento durable, funcional y capaz de soportar uso constante. El enfoque combina practicidad, lectura contemporanea y una integracion visual que hace que el area se sienta bien resuelta desde el primer vistazo."
  },
  {
    slug: "juegos_acuaticos",
    title: "JUEGOS ACUATICOS",
    concept: "Diversion de alto impacto",
    icon: "JA",
    description:
      "Esta es una de las lineas mas expresivas del portafolio. Reune atracciones que convierten el agua en protagonista, creando espacios dinamicos, familiares y memorables. Son proyectos donde la experiencia, el color y la presencia visual tienen un papel central."
  },
  {
    slug: "parque_infantiles",
    title: "PARQUES INFANTILES",
    concept: "Juego, color y convivencia",
    icon: "PI",
    description:
      "Aqui mostramos espacios pensados para descubrir, jugar y convivir. Son proyectos que equilibran seguridad, composicion visual y capacidad de uso, creando entornos que invitan a permanecer y que enriquecen el valor recreativo del lugar donde se instalan."
  },
  {
    slug: "parque_interior",
    title: "PARQUE INTERIOR",
    concept: "Experiencia indoor",
    icon: "IN",
    description:
      "Esta categoria presenta propuestas para interiores donde la experiencia debe mantenerse viva incluso en entornos controlados. El objetivo es construir recorrido, energia visual y una sensacion envolvente que haga que el espacio destaque por si mismo."
  },
  {
    slug: "tanques",
    title: "TANQUES",
    concept: "Soluciones tecnicas",
    icon: "TK",
    description:
      "Los tanques representan la parte mas tecnica y estructural del portafolio. Son soluciones desarrolladas para responder a necesidades concretas de capacidad, resistencia y confiabilidad, manteniendo un estandar de fabricacion que acompana el resto de la propuesta Reforplaz."
  }
]

const extractImageNumber = (path) => {
  const match = path.match(/(\d+)(?=\.[^.]+$)/)
  return match ? Number(match[1]) : 0
}

const getImagesFromFolder = (folder) =>
  Object.entries(imageModules)
    .filter(([path]) => path.includes(`/${folder}/`))
    .sort(([pathA], [pathB]) => extractImageNumber(pathA) - extractImageNumber(pathB))
    .map(([, module]) => module)

const projectCards = categories.map((category) => {
  const images = getImagesFromFolder(category.slug)
  const previewImages = images.slice(0, 3)
  const galleryImages = images.length > 3 ? images.slice(3, 15) : images.slice(0, 12)

  return {
    ...category,
    previewImages,
    galleryImages,
    totalImages: images.length
  }
})

function Proyectos() {
  const [activeProjectSlug, setActiveProjectSlug] = useState("")

  const activeProject = useMemo(
    () => projectCards.find((project) => project.slug === activeProjectSlug) ?? null,
    [activeProjectSlug]
  )

  useEffect(() => {
    if (!activeProject) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setActiveProjectSlug("")
      }
    }

    window.addEventListener("keydown", handleEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", handleEscape)
    }
  }, [activeProject])

  return (
    <main className="overflow-hidden bg-[#040d16] text-white">
      <section className="relative isolate overflow-hidden border-b border-white/6">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#04101c_0%,#061829_52%,#08111d_100%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_24%),radial-gradient(circle_at_82%_12%,rgba(59,130,246,0.12),transparent_18%)]"></div>

        <div className="relative mx-auto max-w-5xl px-6 pb-10 pt-24 text-center md:px-8 md:pb-12 md:pt-28">
          <MotionDiv
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="mx-auto inline-flex rounded-full border border-white/10 bg-white/6 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-cyan-100 backdrop-blur-md"
          >
            Proyectos
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08 }}
            className="mx-auto mt-2 max-w-3xl"
          >
            <h1 className="text-[2.2rem] font-black tracking-[-0.08em] text-slate-50 sm:text-[2.8rem] md:text-[3.15rem]">
              NUESTRO PORTAFOLIO
            </h1>
            <p className="mx-auto mt-2 max-w-2xl text-[0.98rem] leading-7 text-slate-300 md:text-[1.02rem]">
              Una seleccion organizada por categorias para presentar cada linea de trabajo
              con claridad, peso visual y una experiencia de exploracion mas cuidada.
            </p>
          </MotionDiv>
        </div>
      </section>

      <section className="relative">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#06111d_0%,#071827_38%,#08111d_100%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.08),transparent_20%)]"></div>

        <div className="relative mx-auto max-w-7xl space-y-10 px-6 py-14 md:px-8 md:py-16">
          {projectCards.map((project, index) => {
            const previewPrimary = project.previewImages[0]
            const previewSecondary = project.previewImages.slice(1, 3)
            const isAlternating = index % 2 === 1

            return (
              <MotionArticle
                key={project.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: Math.min(index * 0.04, 0.16) }}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(7,18,30,0.96),rgba(8,24,38,0.92),rgba(10,44,62,0.78))] shadow-[0_24px_70px_rgba(0,0,0,0.22)]"
              >
                <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
                  <div className={isAlternating ? "lg:order-2" : ""}>
                    <div className="flex items-start gap-4">
                      {project.icon ? (
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/10 bg-[linear-gradient(135deg,rgba(103,232,249,0.95),rgba(56,189,248,0.88),rgba(251,146,60,0.85))] text-sm font-black uppercase tracking-[0.16em] text-slate-950 shadow-[0_14px_36px_rgba(34,211,238,0.2)]">
                          {project.icon}
                        </div>
                      ) : null}

                      <div className="min-w-0">
                        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-cyan-200">
                          {project.concept}
                        </p>
                        <h2 className="mt-2 text-[2rem] font-black leading-none tracking-[-0.06em] text-white md:text-[2.45rem]">
                          {project.title}
                        </h2>
                      </div>
                    </div>

                    <p className="mt-2 max-w-xl text-sm leading-7 text-slate-300 md:text-base md:leading-8">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center">
                      <button
                        type="button"
                        onClick={() => setActiveProjectSlug(project.slug)}
                        className="rounded-2xl bg-[linear-gradient(135deg,#22d3ee_0%,#2563eb_58%,#fb923c_100%)] px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_18px_48px_rgba(37,99,235,0.3)] transition duration-300 hover:-translate-y-1"
                      >
                        Ver portafolio completo
                      </button>

                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                        {project.totalImages} imagenes disponibles
                      </p>
                    </div>
                  </div>

                  <div className={`grid gap-4 md:grid-cols-[1.35fr_0.9fr] ${isAlternating ? "lg:order-1" : ""}`}>
                    <div className="group relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-slate-950/30">
                      {previewPrimary ? (
                        <img
                          src={previewPrimary}
                          alt={`${project.title} preview principal`}
                          className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[340px]"
                        />
                      ) : (
                        <div className="flex h-[320px] items-center justify-center bg-slate-950/50 text-sm uppercase tracking-[0.2em] text-slate-500 md:h-[340px]">
                          Sin imagen
                        </div>
                      )}
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.08)_10%,rgba(2,6,23,0.22)_46%,rgba(2,6,23,0.82)_100%)]"></div>
                    </div>

                    <div className="grid gap-4">
                      {previewSecondary.map((image, imageIndex) => (
                        <div
                          key={`${project.slug}-preview-${imageIndex}`}
                          className="group relative overflow-hidden rounded-[1.45rem] border border-white/10 bg-slate-950/30"
                        >
                          <img
                            src={image}
                            alt={`${project.title} preview ${imageIndex + 2}`}
                            className="h-[152px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[160px]"
                          />
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.08)_6%,rgba(2,6,23,0.26)_48%,rgba(2,6,23,0.84)_100%)]"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </MotionArticle>
            )
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/8 bg-[linear-gradient(135deg,#071320_0%,#0a2235_48%,#0f3d5a_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(251,146,60,0.12),transparent_26%)]"></div>
        <div className="relative mx-auto max-w-6xl px-6 py-12 md:px-8 md:py-14">
          <div className="rounded-[1.7rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5 shadow-[0_18px_44px_rgba(0,0,0,0.18)] backdrop-blur-md md:p-6">
            <p className="text-[0.74rem] font-semibold uppercase tracking-[0.32em] text-cyan-200">
              Siguiente paso
            </p>
            <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <h2 className="text-[1.45rem] font-black leading-none tracking-[-0.06em] text-white md:text-[1.75rem]">
                  PROYECTOS PREPARADO PARA CRECER BIEN
                </h2>
                <p className="mt-2 max-w-2xl text-[0.95rem] leading-7 text-slate-200">
                  ...
                </p>
              </div>

              <Link
                to="/contacto"
                className="self-start rounded-2xl bg-[linear-gradient(135deg,#22d3ee_0%,#2563eb_58%,#fb923c_100%)] px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_14px_30px_rgba(37,99,235,0.24)] transition duration-300 hover:-translate-y-1 lg:self-auto"
              >
                Solicitar cotizacion
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeProject ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-950/82 p-4 backdrop-blur-md"
            onClick={() => setActiveProjectSlug("")}
          >
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.28 }}
              className="relative max-h-[90vh] w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(4,12,21,0.98),rgba(8,20,34,0.98))] shadow-[0_35px_120px_rgba(0,0,0,0.45)]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 border-b border-white/8 px-6 py-5 md:px-8">
                <div>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-cyan-200">
                    {activeProject.concept}
                  </p>
                  <h3 className="mt-2 text-[1.9rem] font-black leading-none tracking-[-0.05em] text-white md:text-[2.3rem]">
                    {activeProject.title}
                  </h3>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
                    {activeProject.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveProjectSlug("")}
                  className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-200 transition duration-300 hover:bg-white/10"
                >
                  Cerrar
                </button>
              </div>

              <div className="max-h-[calc(90vh-190px)] overflow-y-auto px-6 py-6 md:px-8">
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {activeProject.galleryImages.map((image, imageIndex) => (
                    <div
                      key={`${activeProject.slug}-gallery-${imageIndex}`}
                      className="group relative overflow-hidden rounded-[1.45rem] border border-white/10 bg-slate-950/30"
                    >
                      <img
                        src={image}
                        alt={`${activeProject.title} galeria ${imageIndex + 1}`}
                        className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.05)_8%,rgba(2,6,23,0.22)_46%,rgba(2,6,23,0.82)_100%)]"></div>
                      <div className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-slate-950/72 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-cyan-100 backdrop-blur-sm">
                        Imagen {String(imageIndex + 1).padStart(2, "0")}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </main>
  )
}

export default Proyectos

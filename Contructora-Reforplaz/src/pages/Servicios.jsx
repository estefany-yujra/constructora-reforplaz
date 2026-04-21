import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import serviceHero from "../assets/images/proyectos/servicios.png"
import service1 from "../assets/images/proyectos/servicio1.png"
import service2 from "../assets/images/proyectos/servicio2.jpeg"
import service3 from "../assets/images/proyectos/servicio3.png"
import service4 from "../assets/images/proyectos/servicio4.jpeg"
import service5 from "../assets/images/proyectos/servicio5.png"
import service6 from "../assets/images/proyectos/servicio6.jpeg"
import service7 from "../assets/images/proyectos/servicio7.png"
import service8 from "../assets/images/proyectos/servicio8.JPG"

const MotionDiv = motion.div
const MotionSection = motion.section

const services = [
  {
    title: "Juegos acuaticos",
    tag: "Recreacion",
    image: service1,
    description:
      "Desarrollamos elementos acuaticos pensados para transformar piscinas y espacios recreativos en experiencias visuales, dinamicas y memorables para familias, visitantes y proyectos turisticos."
  },
  {
    title: "Parques infantiles",
    tag: "Convivencia",
    image: service2,
    description:
      "Creamos areas de juego que equilibran seguridad, color y composicion para convertir cada espacio en un entorno mas vivo, atractivo y mejor aprovechado."
  },
  {
    title: "Esculturas y tematizacion",
    tag: "Identidad visual",
    image: service3,
    description:
      "Diseñamos piezas que aportan caracter, narrativa y presencia a proyectos que necesitan una imagen distintiva y una experiencia visual mas envolvente."
  },
  {
    title: "Embarcaciones y piezas especiales",
    tag: "Impacto",
    image: service4,
    description:
      "Fabricamos soluciones visualmente potentes para propuestas tematicas, recreativas y personalizadas donde la forma y la resistencia deben trabajar juntas."
  },
  {
    title: "Banos portatiles",
    tag: "Funcionalidad",
    image: service5,
    description:
      "Integramos modulos sanitarios resistentes y bien resueltos para proyectos con alto flujo, necesidades temporales o infraestructura complementaria."
  },
  {
    title: "Tanques y soluciones estructurales",
    tag: "Tecnica",
    image: service6,
    description:
      "Desarrollamos piezas con enfoque tecnico para responder a exigencias de capacidad, durabilidad y confiabilidad en distintos tipos de proyecto."
  },
  {
    title: "Gimnasios y zonas activas",
    tag: "Movimiento",
    image: service7,
    description:
      "Construimos espacios activos preparados para uso constante, integrando funcionalidad, buena lectura visual y materiales pensados para durar."
  },
  {
    title: "Mobiliario complementario",
    tag: "Apoyo",
    image: service8,
    description:
      "Sumamos elementos que completan la experiencia general del espacio, mejoran su uso y ayudan a mantener una imagen mas coherente y profesional."
  }
]

const processSteps = [
  {
    step: "01",
    title: "Diseno y propuesta",
    text: "Analizamos la idea, el espacio y el objetivo del proyecto para construir una solucion clara, viable y alineada con la experiencia que se quiere lograr."
  },
  {
    step: "02",
    title: "Fabricacion especializada",
    text: "Desarrollamos cada pieza con enfoque tecnico, control de calidad y materiales pensados para responder bien en uso, presencia y durabilidad."
  },
  {
    step: "03",
    title: "Instalacion y entrega",
    text: "Acompanamos la implementacion final para que el resultado llegue bien resuelto, integrado al espacio y listo para funcionar como se planifico."
  }
]

const valuePoints = [
  {
    title: "Soluciones a medida",
    text: "Cada propuesta se adapta al espacio, al uso y al tipo de experiencia que el proyecto necesita."
  },
  {
    title: "Alta resistencia",
    text: "Trabajamos con enfoque constructivo para lograr piezas durables, confiables y preparadas para uso real."
  },
  {
    title: "Acabado con presencia",
    text: "No buscamos solo funcionalidad. Tambien cuidamos la lectura visual para que el resultado se vea bien terminado."
  },
  {
    title: "Acompanamiento integral",
    text: "Desde la idea inicial hasta la instalacion final, el servicio mantiene una misma linea de criterio y ejecucion."
  }
]

function Servicios() {
  return (
    <main className="overflow-hidden bg-[#04101c] text-white">
      <section className="relative isolate overflow-hidden border-b border-white/6">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#04101c_0%,#071827_52%,#08111d_100%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(249,115,22,0.12),transparent_18%)]"></div>

        <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-24 md:px-8 md:pb-16 md:pt-28">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
            >
              <div className="inline-flex rounded-full border border-white/10 bg-white/6 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-cyan-100 backdrop-blur-md">
                Servicios
              </div>

              <h1 className="mt-5 max-w-[12ch] text-[2.4rem] font-black leading-[0.88] tracking-[-0.08em] text-slate-50 sm:text-[2.9rem] md:text-[3.35rem]">
                SOLUCIONES QUE SE DISENAN, FABRICAN E INSTALAN BIEN
              </h1>

              <p className="mt-5 max-w-2xl text-[0.98rem] leading-8 text-slate-300 md:text-[1.04rem]">
                Desarrollamos servicios en fibra de vidrio para proyectos recreativos,
                tematicos y estructurales donde la funcionalidad, la presencia visual y la
                resistencia deben trabajar juntas desde el inicio.
              </p>

              <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/contacto"
                  className="rounded-2xl bg-[linear-gradient(135deg,#22d3ee_0%,#2563eb_58%,#fb923c_100%)] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_16px_42px_rgba(37,99,235,0.3)] transition duration-300 hover:-translate-y-1"
                >
                  Solicitar cotizacion
                </Link>

                <Link
                  to="/proyectos"
                  className="rounded-2xl border border-white/16 bg-white/6 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-slate-100 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/45 hover:bg-white/10"
                >
                  Ver proyectos
                </Link>
              </div>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -left-4 -top-4 h-28 w-28 rounded-full bg-cyan-300/18 blur-3xl"></div>
              <div className="absolute -bottom-4 right-4 h-28 w-28 rounded-full bg-orange-400/14 blur-3xl"></div>

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 p-2 shadow-[0_24px_70px_rgba(0,0,0,0.24)] backdrop-blur-sm">
                <img
                  src={serviceHero}
                  alt="Resumen visual de servicios Reforplaz"
                  className="h-[330px] w-full rounded-[1.5rem] object-cover md:h-[390px]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.06)_6%,rgba(2,6,23,0.18)_44%,rgba(2,6,23,0.72)_100%)]"></div>
                <div className="absolute bottom-6 left-6 right-6 rounded-[1.3rem] border border-white/10 bg-[linear-gradient(135deg,rgba(6,17,31,0.88),rgba(10,28,45,0.82))] p-4 shadow-[0_18px_44px_rgba(0,0,0,0.24)] backdrop-blur-md">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-cyan-200">
                    Alcance integral
                  </p>
                  <p className="mt-2 max-w-[30ch] text-sm leading-6 text-slate-100">
                    Diseñamos servicios que pueden convertirse en soluciones reales,
                    visibles y bien integradas dentro de cada proyecto.
                  </p>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      <MotionSection
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#06111d_0%,#071827_38%,#08111d_100%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.08),transparent_20%)]"></div>

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-18">
          <div className="max-w-3xl">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-cyan-200">
              Lineas de servicio
            </p>
            <h2 className="mt-3 text-[2rem] font-black leading-[0.9] tracking-[-0.06em] text-white md:text-[2.45rem]">
              SERVICIOS PENSADOS PARA RESOLVER Y DESTACAR
            </h2>
            <p className="mt-4 max-w-2xl text-[0.98rem] leading-8 text-slate-300">
              Organizamos nuestra propuesta en lineas claras para que sea facil entender
              que hacemos, donde aportamos valor y como cada servicio puede adaptarse a
              distintos tipos de proyecto.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <MotionDiv
                key={service.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: Math.min(index * 0.05, 0.2) }}
                className={`group overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,19,31,0.94),rgba(9,24,38,0.92))] shadow-[0_20px_55px_rgba(0,0,0,0.2)] ${
                  index % 4 === 0 || index % 4 === 3 ? "xl:translate-y-4" : ""
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-56 w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.02)_0%,rgba(2,6,23,0.22)_46%,rgba(2,6,23,0.8)_100%)]"></div>
                  <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-slate-950/72 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-cyan-100 backdrop-blur-sm">
                    {service.tag}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-[1.2rem] font-black leading-tight tracking-[-0.03em] text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {service.description}
                  </p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </MotionSection>

      <section className="relative border-t border-white/6">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#07111d_0%,#0a1d31_46%,#08111d_100%)]"></div>

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-18">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-cyan-200">
                Como trabajamos
              </p>
              <h2 className="mt-3 text-[2rem] font-black leading-[0.9] tracking-[-0.06em] text-white md:text-[2.35rem]">
                UN PROCESO CLARO DE PRINCIPIO A FIN
              </h2>
              <p className="mt-4 max-w-xl text-[0.98rem] leading-8 text-slate-300">
                El servicio no se limita a fabricar una pieza. Buscamos construir una
                respuesta completa, bien pensada y capaz de llegar al resultado final con
                coherencia tecnica y visual.
              </p>
            </div>

            <div className="grid gap-4">
              {processSteps.map((item, index) => (
                <MotionDiv
                  key={item.step}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: Math.min(index * 0.08, 0.18) }}
                  className="rounded-[1.7rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5 shadow-[0_16px_38px_rgba(0,0,0,0.18)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#67e8f9_0%,#38bdf8_52%,#fb923c_100%)] text-sm font-black tracking-[0.14em] text-slate-950">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-[1.18rem] font-black leading-tight tracking-[-0.03em] text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-300">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/6">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#07131f_0%,#0b2134_50%,#09121d_100%)]"></div>

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-18">
          <div className="max-w-3xl">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-cyan-200">
              Valor diferencial
            </p>
            <h2 className="mt-3 text-[2rem] font-black leading-[0.9] tracking-[-0.06em] text-white md:text-[2.35rem]">
              LO QUE APORTA NUESTRO SERVICIO
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {valuePoints.map((item, index) => (
              <MotionDiv
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: Math.min(index * 0.05, 0.18) }}
                className="rounded-[1.55rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,19,31,0.9),rgba(7,16,26,0.96))] p-5 shadow-[0_16px_36px_rgba(0,0,0,0.18)]"
              >
                <div className="h-1.5 w-14 rounded-full bg-[linear-gradient(90deg,#22d3ee_0%,#2563eb_58%,#fb923c_100%)]"></div>
                <h3 className="mt-4 text-[1.1rem] font-black leading-tight tracking-[-0.03em] text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.text}
                </p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/6">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#071320_0%,#0a2235_48%,#0f3d5a_100%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(251,146,60,0.1),transparent_26%)]"></div>

        <div className="relative mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-16">
          <div className="rounded-[1.85rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.2)] backdrop-blur-md md:p-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-cyan-200">
                  Del servicio al resultado
                </p>
                <h2 className="mt-3 text-[1.65rem] font-black leading-[0.94] tracking-[-0.06em] text-white md:text-[2rem]">
                  CADA SERVICIO TOMA FORMA EN PROYECTOS REALES
                </h2>
                <p className="mt-3 text-[0.98rem] leading-7 text-slate-200">
                  Nuestra mejor manera de demostrar lo que hacemos es mostrar como esas
                  soluciones se convierten en proyectos visibles, funcionales y bien
                  resueltos dentro del espacio final.
                </p>
              </div>

              <Link
                to="/proyectos"
                className="self-start rounded-2xl bg-[linear-gradient(135deg,#22d3ee_0%,#2563eb_58%,#fb923c_100%)] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_16px_38px_rgba(37,99,235,0.26)] transition duration-300 hover:-translate-y-1 lg:self-auto"
              >
                Explorar proyectos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/6">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#06111d_0%,#08111d_100%)]"></div>

        <div className="relative mx-auto max-w-6xl px-6 py-14 text-center md:px-8 md:py-16">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-cyan-200">
            Cotizacion
          </p>
          <h2 className="mt-4 text-[2rem] font-black leading-[0.92] tracking-[-0.06em] text-white md:text-[2.45rem]">
            CUENTANOS LO QUE NECESITAS
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[0.98rem] leading-8 text-slate-300">
            Podemos ayudarte a desarrollar una solucion adaptada al tipo de espacio, al
            uso esperado y a la idea que quieres construir.
          </p>

          <Link
            to="/contacto"
            className="mt-7 inline-flex rounded-2xl bg-[linear-gradient(135deg,#22d3ee_0%,#2563eb_58%,#fb923c_100%)] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_16px_40px_rgba(37,99,235,0.28)] transition duration-300 hover:-translate-y-1"
          >
            Solicitar cotizacion
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Servicios

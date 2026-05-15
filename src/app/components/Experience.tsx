import { Briefcase, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

export function Experience() {
  const responsibilities = [
    "Administración de infraestructura TI",
    "Soporte técnico nivel 1, 2 y 3",
    "Gestión de bases de datos SQL Server",
    "Administración de sistemas clínicos",
    "Gestión de backups y recuperación",
    "Seguridad informática y control de incidentes",
    "Administración de usuarios y permisos",
    "Soporte a plataformas biométricas y VoIP",
    "Desarrollo y mantenimiento de aplicaciones web internas",
    "Desarrollo frontend y backend",
    "Integración de APIs y servicios empresariales",
    "Automatización de procesos internos",
    "Optimización y soporte de plataformas tecnológicas",
  ];

  const techStack = [
    {
      category: "Desarrollo",
      items: ["Java", "Python", "TypeScript", "React", "Spring Boot", "Flask", "APIs REST"],
    },
    {
      category: "Base de Datos",
      items: ["PostgreSQL", "SQL Server", "Consultas SQL", "Optimización"],
    },
    {
      category: "Infraestructura & Sistemas",
      items: ["Docker", "Linux Server", "Windows Server", "Redes", "VoIP", "Backups", "Virtualización"],
    },
    {
      category: "Seguridad & Operaciones",
      items: ["Ciberseguridad", "Soporte TI", "Sistemas Clínicos", "Administración TI"],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F2F2F2] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#F26101] via-[#91BED4] to-[#003354]"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-4">
            Experiencia Laboral
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-[#F26101] to-[#9C3E00] mx-auto"
          ></motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-2xl p-8 border border-[#CFCFCF] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#91BED4]/10 to-transparent rounded-bl-full"></div>
          <div className="flex items-start gap-4 mb-6 relative z-10">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#003354] to-[#91BED4] p-3 rounded-lg shadow-lg"
            >
              <Briefcase className="text-[#F2F2F2]" size={28} />
            </motion.div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-[#003354] mb-2">
                Asistente de Ingeniería TI y Desarrollador FullStack
              </h3>
              <p className="text-lg text-[#F26101] font-medium">
                Instituto Cardiovascular del Cesar
              </p>
            </div>
          </div>

          <div className="mb-8">
            <p className="text-[#545454] leading-relaxed">
              Responsable de la administración y soporte de la infraestructura tecnológica institucional,
              garantizando la continuidad operativa de plataformas clínicas, bases de datos, redes,
              seguridad informática y sistemas corporativos.
            </p>
            <p className="text-[#545454] leading-relaxed mt-4">
              Participación activa en el desarrollo y mantenimiento de soluciones web internas,
              automatización de procesos y optimización tecnológica mediante desarrollo fullstack
              e integración de sistemas empresariales.
            </p>
          </div>

          <div className="mb-8 relative z-10">
            <h4 className="text-xl font-semibold text-[#1A1A1A] mb-4">Funciones Clave</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {responsibilities.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-2 p-2 rounded-lg hover:bg-[#F2F2F2] transition-colors"
                >
                  <CheckCircle className="text-[#91BED4] flex-shrink-0 mt-1" size={18} />
                  <span className="text-[#545454]">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <h4 className="text-xl font-semibold text-[#1A1A1A] mb-4">Tecnologías Utilizadas</h4>
            <div className="space-y-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <h5 className="font-medium text-[#003354] mb-2">{tech.category}</h5>
                  <div className="flex flex-wrap gap-2">
                    {tech.items.map((item, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1 bg-[#F2F2F2] text-[#545454] rounded-full text-sm border border-[#CFCFCF] hover:border-[#003354] hover:bg-white transition-all cursor-default shadow-sm"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

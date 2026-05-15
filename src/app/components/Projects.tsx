import { ExternalLink, Code, Database, Shield, Mail, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import intranet1 from "../../imports/Captura_de_pantalla_2026-05-14_210814.png";
import intranet2 from "../../imports/Captura de pantalla 2026-05-14 21090.png";
import intranet3 from "../../imports/Captura_de_pantalla_2026-05-14_210927.png";
import intranet4 from "../../imports/Captura_de_pantalla_2026-05-14_210952.png";
import intranet5 from "../../imports/Captura_de_pantalla_2026-05-14_211007.png";
import intranet6 from "../../imports/Captura_de_pantalla_2026-05-14_211020.png";
import intranet7 from "../../imports/Captura_de_pantalla_2026-05-14_211032.png";
import intranet8 from "../../imports/Captura_de_pantalla_2026-05-14_211055.png";
import intranet9 from "../../imports/Captura_de_pantalla_2026-05-14_211109.png";
import intranet10 from "../../imports/Captura_de_pantalla_2026-05-14_211130.png";
import intranet11 from "../../imports/Captura_de_pantalla_2026-05-14_211144.png";
import casos4 from "../../imports/Captura_de_pantalla_2026-05-14_210343.png";
import casos5 from "../../imports/Captura_de_pantalla_2026-05-14_210417.png";
import casos6 from "../../imports/Captura_de_pantalla_2026-05-14_210456.png";
import casos7 from "../../imports/Captura_de_pantalla_2026-05-14_210510.png";
import casos8 from "../../imports/Captura_de_pantalla_2026-05-14_210532.png";
import casos9 from "../../imports/Captura_de_pantalla_2026-05-14_210749.png";
import casos1 from "../../imports/Captura_de_pantalla_2026-05-14_210206.png";
import casos2 from "../../imports/Captura_de_pantalla_2026-05-14_210250.png";
import casos3 from "../../imports/Captura_de_pantalla_2026-05-14_210306.png";
import casos10 from "../../imports/Captura de pantalla 2026-05-14 213957.png";
import casos11 from "../../imports/Captura de pantalla 2026-05-14 214155.png"
import { useState } from "react";

export function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      title: "Intranet Institucional",
      description:
        "Hub centralizado que unifica el acceso a todos los aplicativos web de la clínica. Permite a los empleados acceder fácilmente a sus aplicaciones sin necesidad de buscar enlaces dispersos. Diseñado con escalabilidad para integrar futuros sistemas.",
      icon: <Code size={24} />,
      technologies: ["React", "TypeScript", "Java", "Spring Boot", "PostgreSQL"],
      features: [
        "Portal único de acceso",
        "Sistema de autenticación integrado",
        "Gestión de permisos por rol",
        "Escalable para nuevos módulos",
        "Interfaz intuitiva y moderna",
        "Acceso rápido a todos los sistemas institucionales",
      ],
      images: [intranet1, intranet2, intranet3, intranet4, intranet5, intranet6, intranet7, intranet8, intranet9, intranet10, intranet11],
    },
    {
      title: "Sistema de Gestión de Casos por Email",
      description:
        "Plataforma automatizada que convierte correos de soporte en casos rastreables. Incluye gestión completa de observaciones, trazabilidad detallada, generación de reportes por caso y usuario, y logs de todas las operaciones HTTP (GET, POST, PUT). Incorpora módulo de consultas SQL directas con Diccionario de Datos integrado.",
      icon: <Mail size={24} />,
      technologies: ["Python", "Flask", "React", "Supabase", "APIs REST", "Twilio"],
      features: [
        "Conversión automática de emails a casos",
        "Trazabilidad completa de observaciones",
        "Generación de reportes personalizados",
        "Logs detallados de operaciones HTTP",
        "Módulo de consultas SQL con Diccionario de Datos",
        "Dashboard de métricas y estadísticas",
      ],
      images: [casos1, casos2, casos3, casos4, casos5, casos6, casos7, casos8, casos9, casos10, casos11],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#003354] via-[#91BED4] to-[#F26101]"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-4">
            Proyectos Destacados
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-[#F26101] to-[#9C3E00] mx-auto"
          ></motion.div>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-gradient-to-br from-[#F2F2F2] to-white rounded-2xl overflow-hidden border border-[#CFCFCF] shadow-2xl hover:shadow-3xl transition-shadow relative"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#91BED4]/10 to-transparent rounded-bl-full"></div>

              <div className="p-8 relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-[#003354] to-[#91BED4] p-3 rounded-lg shadow-lg"
                  >
                    <div className="text-[#F2F2F2]">{project.icon}</div>
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-[#003354] mb-2">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-[#545454] leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-[#1A1A1A] mb-3">Características Principales</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05, duration: 0.4 }}
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-2 text-[#545454] p-2 rounded-lg hover:bg-white transition-colors"
                      >
                        <span className="text-[#91BED4] mt-1">▸</span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-[#1A1A1A] mb-3">Tecnologías</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05, duration: 0.3 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-4 py-2 bg-white text-[#003354] rounded-lg border border-[#91BED4] font-medium shadow-md hover:shadow-lg transition-shadow cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {project.images && (
                  <div>
                    <h4 className="font-semibold text-[#1A1A1A] mb-3">Capturas del Sistema</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {project.images.map((img, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05, duration: 0.3 }}
                          whileHover={{ scale: 1.05, y: -4 }}
                          className="aspect-video bg-white rounded-lg overflow-hidden border-2 border-[#CFCFCF] cursor-pointer hover:border-[#91BED4] transition-all shadow-md hover:shadow-xl"
                          onClick={() => setSelectedImage(img)}
                        >
                          <motion.img
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                            src={img}
                            alt={`${project.title} - Captura ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="max-w-6xl max-h-[90vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute -top-12 right-0 text-white hover:text-[#F26101] flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm"
                onClick={() => setSelectedImage(null)}
              >
                <X size={20} />
                Cerrar
              </motion.button>
              <motion.img
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                src={selectedImage}
                alt="Vista ampliada"
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

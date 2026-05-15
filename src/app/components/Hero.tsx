import { Github, Linkedin, Instagram, FileText, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "motion/react";
import profileImg from "../../imports/image.png";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#91BED4]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F26101]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A]"
              >
                Yeferson David <br />
                <span className="text-[#003354]">Sanchez Villarreal</span>
              </motion.h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-1 bg-gradient-to-r from-[#F26101] to-[#9C3E00]"
              ></motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-[#545454]"
            >
              Asistente de Ingeniería TI & Desarrollador FullStack
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-lg text-[#545454] leading-relaxed"
            >
              Especialista en infraestructura tecnológica y desarrollo backend, con experiencia en administración de sistemas clínicos, bases de datos y desarrollo de soluciones web empresariales.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/YefersonDSanchezV"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#003354] text-[#F2F2F2] rounded-lg hover:bg-[#91BED4] hover:text-[#1A1A1A] transition-colors shadow-lg hover:shadow-xl"
              >
                <Github size={20} />
                GitHub
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/yeferson-david-sanchez-villarreal-835431297"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#003354] text-[#F2F2F2] rounded-lg hover:bg-[#91BED4] hover:text-[#1A1A1A] transition-colors shadow-lg hover:shadow-xl"
              >
                <Linkedin size={20} />
                LinkedIn
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://yefersondev.hashnode.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#F26101] text-[#F2F2F2] rounded-lg hover:bg-[#9C3E00] transition-colors shadow-lg hover:shadow-xl"
              >
                <FileText size={20} />
                Blog
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-xl border border-[#CFCFCF] overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#91BED4]/20 to-transparent rounded-bl-full"></div>

              <div className="flex flex-col items-center mb-6 relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#003354] to-[#91BED4] rounded-full blur-md opacity-50"></div>
                  <img
                    src={profileImg}
                    alt="Yeferson David Sanchez Villarreal"
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl relative z-10"
                  />
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#F26101] rounded-full border-4 border-white z-20 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </motion.div>
              </div>

              <h3 className="text-2xl font-semibold text-[#003354] mb-6 text-center">Información de Contacto</h3>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F2F2F2] transition-colors"
                >
                  <MapPin className="text-[#F26101] flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium text-[#1A1A1A]">Ubicación</p>
                    <p className="text-[#545454]">Valledupar, Cesar</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F2F2F2] transition-colors"
                >
                  <Phone className="text-[#F26101] flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium text-[#1A1A1A]">Teléfono</p>
                    <p className="text-[#545454]">+57 302 709 1702</p>
                    <p className="text-[#545454]">+57 313 500 6547</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F2F2F2] transition-colors"
                >
                  <Mail className="text-[#F26101] flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium text-[#1A1A1A]">Email</p>
                    <p className="text-[#545454] break-all">yefersond.sanchezv@gmail.com</p>
                    <p className="text-[#545454] break-all">ing.yefersond.sanchezv@gmail.com</p>
                  </div>
                </motion.div>

                <div className="pt-4 flex gap-4 justify-center">
                  <motion.a
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://www.instagram.com/yefersondev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#545454] hover:text-[#F26101] transition-colors"
                  >
                    <Instagram size={24} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://hashnode.com/@yefersondev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#545454] hover:text-[#F26101] transition-colors"
                  >
                    <FileText size={24} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

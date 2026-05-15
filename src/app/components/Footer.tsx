import { Github, Linkedin, Instagram, FileText, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={20} />,
      url: "https://github.com/YefersonDSanchezV",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      url: "https://www.linkedin.com/in/yeferson-david-sanchez-villarreal-835431297",
    },
    {
      name: "Instagram",
      icon: <Instagram size={20} />,
      url: "https://www.instagram.com/yefersondev/",
    },
    {
      name: "Hashnode",
      icon: <FileText size={20} />,
      url: "https://hashnode.com/@yefersondev",
    },
    {
      name: "Blog",
      icon: <FileText size={20} />,
      url: "https://yefersondev.hashnode.dev/",
    },
  ];

  return (
    <footer id="contact" className="bg-[#1A1A1A] text-[#F2F2F2] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F26101] via-[#91BED4] to-[#003354]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#003354]/20 to-transparent rounded-tl-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Yeferson<span className="text-[#F26101]">Dev</span>
            </h3>
            <p className="text-[#CFCFCF]">
              Desarrollador FullStack con énfasis en Backend e Infraestructura TI
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#91BED4]">Contacto</h4>
            <div className="space-y-2 text-[#CFCFCF]">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-[#F26101]" />
                <span>Valledupar, Cesar</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-[#F26101]" />
                <span>+57 302 709 1702</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-[#F26101]" />
                <span className="text-sm">yefersond.sanchezv@gmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#91BED4]">Sígueme</h4>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-[#CFCFCF] hover:text-[#F26101] transition-colors"
                  title={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[#545454] pt-8 text-center text-[#CFCFCF]">
          <p>
            © {currentYear} Yeferson David Sanchez Villarreal. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

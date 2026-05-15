import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Inicio", href: "#hero" },
    { label: "Stack", href: "#stack" },
    { label: "Experiencia", href: "#experience" },
    { label: "Proyectos", href: "#projects" },
    { label: "Contacto", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1A1A1A]/98 backdrop-blur-md shadow-lg"
          : "bg-[#1A1A1A]/95 backdrop-blur-sm"
      } border-b border-[#545454]`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <span className="text-[#F2F2F2] font-semibold text-xl cursor-pointer">
              Yeferson<span className="text-[#F26101]">Dev</span>
            </span>
          </motion.div>

          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="text-[#CFCFCF] hover:text-[#91BED4] transition-colors relative group"
              >
                {item.label}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F26101] group-hover:w-full transition-all duration-300"
                ></motion.span>
              </motion.a>
            ))}
          </nav>

          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-[#F2F2F2]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 5 }}
                    className="block text-[#CFCFCF] hover:text-[#91BED4] transition-colors py-2 px-2 rounded-lg hover:bg-[#545454]/20"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

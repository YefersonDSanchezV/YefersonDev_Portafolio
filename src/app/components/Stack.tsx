import { Code2, Database, Server, GitBranch, Brain, Palette, FileCode } from "lucide-react";
import { motion } from "motion/react";

export function Stack() {
  const stackCategories = [
    {
      icon: <Code2 size={24} />,
      title: "Lenguajes de Programación",
      items: ["Java", "Python", "TypeScript"],
    },
    {
      icon: <FileCode size={24} />,
      title: "Frameworks",
      items: ["Spring Boot", "Flask", "React"],
    },
    {
      icon: <Database size={24} />,
      title: "Bases de Datos",
      items: ["PostgreSQL", "Supabase", "Firebase"],
    },
    {
      icon: <Server size={24} />,
      title: "Infraestructura",
      items: ["Docker", "Linux Server", "Windows Server", "VMWare Workstation Pro"],
    },
    {
      icon: <GitBranch size={24} />,
      title: "Control de Versiones",
      items: ["GitHub"],
    },
    {
      icon: <Brain size={24} />,
      title: "IA & Productividad",
      items: ["Gemini 3.0 Pro/Flash", "ChatGPT", "Antigravity by Google"],
    },
    {
      icon: <Palette size={24} />,
      title: "Diseño & Diagramas",
      items: ["Figma AI", "dbdiagram", "Miro"],
    },
  ];

  return (
    <section id="stack" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
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
            Stack de Desarrollo
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-[#F26101] to-[#9C3E00] mx-auto"
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stackCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gradient-to-br from-[#F2F2F2] to-white rounded-xl p-6 border border-[#CFCFCF] hover:border-[#91BED4] transition-all hover:shadow-2xl group"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="text-[#003354] group-hover:text-[#F26101] transition-colors"
                >
                  {category.icon}
                </motion.div>
                <h3 className="font-semibold text-[#1A1A1A]">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 bg-white text-[#545454] rounded-full text-sm border border-[#CFCFCF] hover:border-[#003354] hover:text-[#003354] transition-all cursor-default shadow-sm"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

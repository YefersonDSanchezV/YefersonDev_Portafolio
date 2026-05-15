import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Stack } from "./components/Stack";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stack />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
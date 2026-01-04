import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Stars from "./components/Stars";
import OpenSource from "./components/OpenSource";

function App() {
  return (
    <>
      <Stars />
      <Navbar />

      {/* Content offset for fixed navbar */}
      
        <Hero />
        <Skills />
        <Projects />
        <OpenSource />
        <Contact />
     
    </>
  );
}

export default App;

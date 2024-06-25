// components
import About from "../Components/About";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Preloader from "../Components/Preloader";
import Project from "../Components/Project";
import Skills from "../Components/Skills";
// others
import Aos from "aos";

Aos.init({
  once: true,
  duration: 1500,
});

const Landing = () => {
  return (
    <>
      <Preloader />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default Landing;

import { useRef, useEffect } from "react";
// components
import Header from "./Header";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
// others
import Typed from "typed.js";

const Landing = () => {
  const autoRef = useRef(null);
  const typed = useRef(null);

  const options = {
    strings: ["Helix Designs", "a Graphics Designer", "a Video Editor"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
  };

  useEffect(() => {
    typed.current = new Typed(autoRef.current, options);

    return () => {
      typed.current.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="hero min-h-screen w-full bg-white dark:bg-black text-center pb-10">
      <Header />

      <section className="px-12">
        <div className="mt-20">
          <p className="text-black dark:text-white text-2xl sm:text-3xl mb-8">
            Hi There 👋
          </p>
          <h2 className="text-black dark:text-white h-24 sm:h-auto text-3xl sm:text-4xl md:text-5xl font-bold mb-12 leading-[1.5]">
            I am{" "}
            <span
              className="auto-type text-blue-medium dark:text-blue-light"
              ref={autoRef}
            ></span>
          </h2>
        </div>

        <div>
          <a
            href="#"
            className="btn py-3 px-10 uppercase block rounded-[10rem] relative text-center text-blue-very-light bg-blue-dark dark:text-blue-dark dark:bg-blue-very-light w-60 max-w-[90%] mb-12 mx-auto hover:-translate-y-[3px] hover:shadow-custom-light dark:hover:shadow-custom-dark active:-translate-y-[1px]  active:shadow-custom-light dark:active:shadow-custom-dark after:bg-blue-dark after:inline-block dark:after:bg-blue-very-light after:top-0 after:left-0 after:h-full after:w-full after:absolute after:rounded-[100px] after:-z-10 hover:after:scale-x-[1.2] hover:after:scale-y-[1.4] hover:after:opacity-0"
            download="helix_Designs_Resume.pdf"
          >
            Download Resume
          </a>
        </div>

        <div className="flex justify-center items-center gap-10">
          <div>
            <a
              href="https://www.linkedin.com/in/helix-designs-828366310/"
              target={"_blank"}
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="border text-black border-black rounded-full py-[11px] px-3 transition-normal dark:text-white dark:border-white hover:border-blue-medium hover:text-blue-medium dark:hover:border-blue-light dark:hover:text-blue-light hover:scale-[1.05] text-2xl"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;

import { SiAdobepremierepro, SiCanva, SiAdobeindesign, SiAffinity, SiAdobephotoshop  } from "react-icons/si";

const Skills = () => {
  return (
    <div className="px-8 md:px-12 py-12 bg-light dark:bg-dark overflow-hidden">
      <div>
        <div>
          <h1
            className="text-4xl md:text-5xl text-center mb-4 text-slightly-black dark:text-slightly-white"
            data-aos="fade-up"
          >
            My Tools
          </h1>
        </div>
        <div>
          <p
            className="text-base md:text-xl text-center text-black dark:text-white mb-10"
            data-aos="fade-up"
          >
            Here are a few tools and technologies I use
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 md:gap-x-6 md:gap-y-10 flex-wrap">
        <div
          className="flex items-center flex-col justify-center gap-4"
          data-aos="fade-left"
          data-aos-delay="450"
        >
          <SiAdobephotoshop className="bg-blue-dark text-blue-very-light rounded-md w-12 h-12 p-2 dark:bg-blue-very-light dark:text-blue-dark" />
          <p className="text-base text-black dark:text-white">Photoshop</p>
        </div>
        <div
          className="flex items-center flex-col justify-center gap-4"
          data-aos="fade-left"
          data-aos-delay="550"
        >
          <SiCanva className="bg-blue-dark text-blue-very-light rounded-md w-12 h-12 p-2 dark:bg-blue-very-light dark:text-blue-dark" />
          <p className="text-base text-black dark:text-white">Canva</p>
        </div>
        <div
          className="flex items-center flex-col justify-center gap-4"
          data-aos="fade-left"
          data-aos-delay="600"
        >
          <SiAdobeindesign className="bg-blue-dark text-blue-very-light rounded-md w-12 h-12 p-2 dark:bg-blue-very-light dark:text-blue-dark" />
          <p className="text-base text-black dark:text-white">InDesign</p>
        </div>
        <div
          className="flex items-center flex-col justify-center gap-4"
          data-aos="fade-left"
          data-aos-delay="600"
        >
          <SiAffinity className="bg-blue-dark text-blue-very-light rounded-md w-12 h-12 p-2 dark:bg-blue-very-light dark:text-blue-dark" />
          <p className="text-base text-black dark:text-white">Affinity</p>
        </div>
        <div
          className="flex items-center flex-col justify-center gap-4"
          data-aos="fade-left"
          data-aos-delay="600"
        >
          <SiAdobepremierepro className="bg-blue-dark text-blue-very-light rounded-md w-12 h-12 p-2 dark:bg-blue-very-light dark:text-blue-dark" />
          <p className="text-base text-black dark:text-white">Premiere pro</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;

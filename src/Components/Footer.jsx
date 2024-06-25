// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="py-0 pb-10 px-8 md:px-12 bg-light dark:bg-dark text-black dark:text-white">
      <div className="flex justify-center items-center gap-4 md:gap-10 mb-8">
        <div className="h-[1px] bg-black dark:bg-white w-[15%] md:w-[20%]"></div>
        <div>
          <h2 className="text-xl md:text-3xl text-center">Helix Designs</h2>
        </div>
        <div className="h-[1px] bg-black dark:bg-white w-[15%] md:w-[20%]"></div>
      </div>

      <div className="flex justify-center items-center gap-6 mb-8">
        <div>
          <a
            href="https://www.linkedin.com/in/helix-designs-828366310/"
            target={"_blank"}
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="border text-black border-black rounded-full py-[11px] px-3 transition-normal dark:text-white dark:border-white hover:border-blue-medium hover:text-blue-medium dark:hover:border-blue-light dark:hover:text-blue-light hover:scale-[1.05] text-xl"
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-6 mb-8">
        <a
          href="mailto:moyinadelowo@gmail.com"
          className="socials text-black dark:text-white transition-normal hover:underline hover:text-blue-medium dark:hover:text-blue-light "
        >
          <FontAwesomeIcon icon={faEnvelope} className="mr-3" />{" "}
          adesidamosope1@gmail.com
        </a>
        <a
          href="tel:+12197073354"
          className="socials text-black dark:text-white transition-normal hover:underline hover:text-blue-medium dark:hover:text-blue-light "
        >
          <FontAwesomeIcon icon={faPhone} className="mr-3" /> +1-219-707-3354
        </a>
      </div>

      <div className="text-sm text-center">
        <p>Copyright &copy; {new Date().getFullYear()} | All rights reserved</p>
      </div>
      <div className="text-sm text-center mt-2">
        <p>Made with ♥ by <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="text-slightly-black dark:text-slightly-white underline hover:no-underline transition-normal"
        >
          YourmixJNR.
        </a></p>
      </div>
    </footer>
  );
};

export default Footer;

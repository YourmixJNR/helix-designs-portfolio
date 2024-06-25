import { useState } from "react";
import Switch from "./Switch";
import { Link } from "react-router-dom";

const Header = () => {
  const [responsive, setResponsive] = useState(false);
  const handleResponsive = () => setResponsive((curr) => !curr);

  return (
    <header className="navbar flex items-center justify-between py-6 px-12 text-black dark:text-white font-U8-Bold md:font-U8">
      <div className="navbar__logo z-20">
        <Link to={"/"}>
          <h1 className="text-2xl font-U8-Bold">HD</h1>
        </Link>
      </div>

      <nav
        className={
          responsive
            ? "nav fixed md:relative top-0 left-[100%] md:left-0 w-full md:w-auto h-screen md:h-auto z-[5] transition-slow active"
            : "nav fixed md:relative top-0 left-[100%] md:left-0 w-full md:w-auto h-screen md:h-auto z-[5] transition-slow"
        }
      >
        <ul className="nav-menu list-none flex items-center gap-8 flex-col md:flex-row justify-center bg-light md:bg-transparent dark:bg-transparent dark:md:bg-none w-full md:w-auto h-screen md:h-auto">
          <li className="nav-list">
            <a
              href="#about"
              className="nav-link text-black dark:text-white relative uppercase before:w-full before:bg-black dark:before:bg-white before:absolute before:h-[2px] before:block before:left-0 before:-bottom-1 before:scale-x-0 hover:before:scale-x-100 before:transition-all before:duration-300 before:rounded-[5%]"
              onClick={handleResponsive}
            >
              About Me
            </a>
          </li>
          <li className="nav-list">
            <a
              href="#contact"
              className="nav-link text-black dark:text-white relative uppercase before:w-full before:bg-black dark:before:bg-white before:absolute before:h-[2px] before:block before:left-0 before:-bottom-1 before:scale-x-0 hover:before:scale-x-100 before:transition-all before:duration-300 before:rounded-[5%]"
              onClick={handleResponsive}
            >
              Contact Me
            </a>
          </li>
          <li className="nav-list">
            <a
              href="#project"
              className="nav-link text-black dark:text-white relative uppercase before:w-full before:bg-black dark:before:bg-white before:absolute before:h-[2px] before:block before:left-0 before:-bottom-1 before:scale-x-0 hover:before:scale-x-100 before:transition-all before:duration-300 before:rounded-[5%]"
              onClick={handleResponsive}
            >
              Projects
            </a>
          </li>
        </ul>
      </nav>

      <div>
        <Switch />
      </div>

      <div
        className={
          responsive
            ? "hamburger cursor-pointer relative z-20 md:hidden active"
            : "hamburger cursor-pointer relative z-20 md:hidden"
        }
        onClick={handleResponsive}
      >
        <span className="bar block w-7 h-[3px] my-[6px] transition-all bg-black dark:bg-white rounded-md"></span>
        <span className="bar block w-11 h-[3px] my-[6px] transition-all bg-black dark:bg-white rounded-md"></span>
        <span className="bar block w-9 h-[3px] my-[6px] transition-all bg-black dark:bg-white rounded-md"></span>
      </div>
    </header>
  );
};

export default Header;

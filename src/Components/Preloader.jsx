import { useEffect, useRef } from "react";

const Preloader = () => {
  useEffect(() => {
    preloader.current.classList.add("active");
    preloaderTop.current.classList.add("active");
    preloaderBottom.current.classList.add("active");
    preloaderText.current.classList.add("active");
  });
  const preloader = useRef();
  const preloaderTop = useRef();
  const preloaderBottom = useRef();
  const preloaderText = useRef();
  return (
    <div
      className="preloader fixed w-full h-screen top-0 left-0 z-40 overflow-hidden"
      ref={preloader}
    >
      <div
        className="preloader__top fixed w-full h-[50vh] top-0 left-0"
        ref={preloaderTop}
      ></div>
      <div
        className="preloader__bottom fixed w-full h-[50vh] left-0 bottom-0"
        ref={preloaderBottom}
      ></div>
      <div
        className="preloader__text w-full h-screen flex items-center justify-center text-[140px] md:text-[200px] leading-normal z-[100]"
        ref={preloaderText}
      >
        <h1 className="text text__m relative bottom-[30px] md:bottom-8 left-5 md:left-[26px]">
          H
        </h1>
        <h1 className="text text__o relative top-[30px] md:top-8 right-5 md:right-[26px]">
          D
        </h1>
      </div>
    </div>
  );
};

export default Preloader;

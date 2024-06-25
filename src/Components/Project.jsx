import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const Project = () => {
  return (
    <div
      className="py-12 px-8 md:px-12 bg-light dark:bg-dark overflow-hidden"
      id="project"
    >
      <h1
        className="text-4xl md:text-5xl text-center mb-5  text-slightly-black dark:text-slightly-white"
        data-aos="fade-up"
      >
        Projects
      </h1>
      <p
        className="text-center text-xl text-slightly-black dark:text-slightly-white"
        data-aos="fade-up"
      >
        These are some of my featured projects. You can view more on <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="text-slightly-black dark:text-slightly-white underline hover:no-underline transition-normal"
        >
          here.
        </a>
      </p>

      <div>
        <div className="w-full gap-y-8 gap-x-5 content-center justify-center justify-items-center mt-12">
          <ImageGallery items={images} />;
        </div>
      </div>
    </div>
  );
};

export default Project;

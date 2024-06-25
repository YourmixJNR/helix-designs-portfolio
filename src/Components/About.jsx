const About = () => {
  return (
    <section
      className="py-12 px-8 md:px-12 bg-light dark:bg-dark overflow-hidden"
      id="about"
    >
      <h1
        className="text-4xl md:text-5xl text-center mb-8 md:mb-10 text-slightly-black dark:text-slightly-white"
        data-aos="fade-up"
      >
        About Me
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 text-center md:text-left items-center justify-center md:justify-between gap-12 w-full content-center justify-items-center">
        <div>
          <p
            className="text-black dark:text-white max-w-lg md:max-w-md"
            data-aos="fade-right"
          >
            I'm Helix, a creative video editor and graphic designer with a
            passion for storytelling and visual art. My editing journey is
            marked by a keen eye for detail and a talent for crafting compelling
            narratives. Skilled in Adobe Creative Suite, Premiere Pro, and
            graphic design principles, I bring ideas to life through dynamic
            videos and stunning visuals. When it comes to video editing and
            graphic design, consider me your go-to expert. Creating engaging and
            informative content is where I thrive.
            <br />
            <br />
            Beyond the editing suite, I'm
            an avid enthusiast of art, design, and innovation. Exploring new
            creative outlets is my way of unwinding and expanding my artistic
            horizons. My passion? Leveraging my skills to help businesses and
            individuals tell their stories and achieve their goals. The fusion
            of creative vision and technical expertise is my secret sauce. I'm
            on a mission to deliver high-quality content that resonates with
            audiences and leaves a lasting impact.
          </p>
        </div>

        <div
          className="max-w-lg md:ml-auto w-full rounded-full overflow-hidden"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <img
            src="/images/profile.jpg"
            alt="Display Pic"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

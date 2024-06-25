import { Link } from "react-router-dom";
// components
import Header from "../Components/Header";
// hooks
import ChangePageTitle from "../hooks/ChangePageTitle";

const Error = () => {
  return (
    <>
      <ChangePageTitle pageTitle={"404 | Page Not Found"} />
      <div className="bg-light dark:bg-dark">
        <Header></Header>
        <main className="py-12 px-8 md:px-12 text-black dark:text-white">
          <section className="flex flex-col justify-center items-center min-h-screen">
            <h1 className="mb-9 font-U8-Bold uppercase text-[150px] sm:text-[250px] leading-[90%]">
              404
            </h1>
            <p className="mb-14 text-xl text-center max-w-[508px]">
              The page you’re looking for can’t be found. It may have been
              deleted, moved, or never existed.
            </p>
            <Link
              to={"/"}
              className="bg-black dark:bg-white text-white dark:text-black rounded-[100px] px-14 py-3 text-sm transition-normal border-2 border-transparent hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white hover:bg-transparent dark:hover:bg-transparent"
            >
              Go to home
            </Link>
          </section>
        </main>
      </div>
    </>
  );
};

export default Error;

import  { useContext } from "react";
import ReactSwitch from "react-switch";
import { ThemeContext } from "../Context/ThemeContext";

const Switch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <ReactSwitch
        onChange={toggleTheme}
        checked={theme === "dark"}
        className="react-switch"
        boxShadow="0px 0px 0px rgba(0, 0, 0, 0.0)"
        activeBoxShadow="0px 0px 0px rgba(0, 0, 0, 0.0)"
        offColor="#fff"
        onColor="#000"
        offHandleColor="#000"
        onHandleColor="#fff"
        handleDiameter={28}
        height={40}
        width={70}
        borderRadius={6}
        uncheckedIcon={
          <div className="flex justify-center items-center h-full text-lg">
            <i className="fa-solid fa-sun text-black"></i>
          </div>
        }
        checkedIcon={
          <div className="flex justify-center items-center h-full text-lg">
            <i className="fa-solid fa-moon text-white"></i>
          </div>
        }
      />
    </div>
  );
};

export default Switch;

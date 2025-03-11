import React from "react";
import Images from "../images/images";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

const Hero = () => {
  const useWindowSize = () => {
    const [size, setSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    useEffect(() => {
      const handleResize = () => {
        setSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return size;
  };

  const { width, height } = useWindowSize();

  return (
    <div className="shadow-lg">
      {width > 600 ? (
        <>
          <div
            className="w-[100%] h-[100vh] "
            style={{ backgroundImage: `url(${Images.Hero})` }}
          >
            <div className=" w-[50%] h-[30%] text-[40px] pt-[20vh] lg:pt-[30vh] pl-6 lg:text-[60px]">
              <p className="  text-white font-roboto leading-tight font-bold shadow-neutral-600">
                Get An Empowerment Opportunity
              </p>
              <Link to={"/register"}>
                <button className=" bg-gold text-white w-[100px] lg:w-[200px] text-lg font-bold font-roboto p-4 rounded-lg hover:bg-transparent hover:border-2 hover:border-gold hover:scale-105 mt-4">
                  Join Us
                </button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-[100%] h-[100vh] relative">
            <img
              className=" w-full h-full object-cover"
              src={Images.Hero}
              alt="JCI Kenya"
            />
            <div className=" absolute w-[50%] h-[30%] text-[40px] top-[20vh] lg:top-[30vh] ml-6 lg:text-[60px]">
              <p className="  text-white font-roboto leading-tight font-bold shadow-neutral-600">
                Get An Empowerment Opportunity
              </p>
              <Link to={"/register"}>
                <button className=" bg-gold text-white w-[100px] lg:w-[200px] text-lg font-bold font-roboto p-4 rounded-lg hover:bg-transparent hover:border-2 hover:border-gold hover:scale-105 mt-4">
                  Join Us
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;

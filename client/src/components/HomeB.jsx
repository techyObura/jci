import React from "react";
import images from "../images/images";

const HomeB = () => {
  return (
    <div className="">
      <div className="mt-10 lg:mt-0 lg:flex h-[50vh] justify-center w-full">
        <div className=" w-[90%] lg:w-[40%] h-full lg:mt-10">
          <img src={images.kenya} className="w-full h-full" alt="JCI Kenya" />
        </div>
        <div className=" w-full lg:w-[20%] mt-8 lg:h-full flex justify-center items-center">
          <div className="w-[150px] border-4 border-off_black h-[150px] rounded-full flex justify-center items-center">
            <div className=" flex-col">
              <p className=" font-bold text-2xl text-gold">4 million+</p>
              <p className="text-xl font-semibold">local people</p>
            </div>
          </div>
        </div>
        <div className=" w-full p-4 lg:w-[30%] h-full flex justify-center items-center">
          <div className=" text-center lg:text-left">
            <p className="text-md text-gray-500">
              That carry our mission to provide leadership development
              opportunities that develop young people
            </p>
            <p className="mt-5 text-4xl text-seaForm font-bold">
              TO CREATE POSITIVE CHANGE
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default HomeB;

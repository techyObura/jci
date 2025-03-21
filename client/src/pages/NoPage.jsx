import React from "react";

const NoPage = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="text-center mt-12">
        <p className=" font-bold text-3xl"> We are sorry!</p>
        <p className="text-2xl mt-3 text-red-600">
          Check the route and try again
        </p>
      </div>{" "}
    </div>
  );
};

export default NoPage;

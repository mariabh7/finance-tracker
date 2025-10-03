import React from "react";

const ErrorPage = () => {
  return (
    <div className="sq py-40 px-5 w-full h-screen ">
      <div className="flex flex-col justify-center items-center gap-10">
        <div className=" w-[300px] md:w-[535px]">
          <img src="/undraw_err.png"></img>
        </div>
        <div className="text-center  flex justify-center items-center">
          <p className="w-[70%] md:w-full text-base md:text-xl">
            404 <br></br> oops ! looks like you were searching for something
            else try again
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

import React from "react";

const ErrorPage = () => {
  return (
    <div className="sq py-40 px-5 w-full h-screen ">
      <div className="flex flex-col justify-center items-center gap-10">
        <div className=" w-full flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 12a9 9 0 1 0 -9 9" />
            <path d="M3.6 9h16.8" />
            <path d="M3.6 15h7.9" />
            <path d="M11.5 3a17 17 0 0 0 0 18" />
            <path d="M12.5 3a16.984 16.984 0 0 1 2.574 8.62" />
            <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M20.2 20.2l1.8 1.8" />
          </svg>
        </div>
        <div className="text-center  flex justify-center items-center">
          <p className="w-[70%] md:w-full text-base md:text-xl">
            404 ! page not found <br></br> oops ! looks like you were searching
            for something else try again
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

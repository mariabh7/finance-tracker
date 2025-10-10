import React, { useRef } from "react";
import { currencyDollar } from "../ui/dollarIcon";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function InfoSection({ imgs, title, desc, pos }) {
  const check = pos.includes("left") ? true : false;
  return (
    <section
      data-slot="dashBoard-view"
      className="mt-10 lg:mt-20 mb-10 lg:mb-96 relative"
    >
      <div
        className={`flex justify-between ${check ? "lg:flex-row-reverse" : ""}`}
      >
        <div className="p-6 flex w-full md:w-[80%] lg:w-[50%] self-end flex-col  gap-3">
          <h3 className=" text-2xl md:text-3xl capitalize font-medium">
            {title}
          </h3>
          <p className="text-gray-400 text-lg md:text-[22px] ">{desc}</p>
        </div>
        <div
          data-slot="Preview"
          className={`absolute hidden lg:block -top-20 ${pos} self-end w-[670px]`}
        >
          <img src={imgs} className="shadow-2xl rounded-3xl" />
        </div>
      </div>
    </section>
  );
}
const Landingpage = () => {
  const Sectionref = useRef();
  const handleScroll = () => {
    Sectionref.current.scrollIntoView({
      behavior: "smooth", // smooth or auto
      block: "center", // start, center, end, nearest
      inline: "nearest", // for horizontal alignment
    });
  };
  return (
    <div className="relative sq  overflow-x-hidden">
      <div className="py-10  px-3 md:px-20 ">
        <header className="flex justify-between items-center">
          <div className="flex justify-items-start gap-2 items-center">
            {currencyDollar()}
            <h1 className="capitalize font-medium text-xl md:text-3xl">
              finance tracker
            </h1>
          </div>
          <div className="flex  justify-start gap-3 md:gap-5">
            <button className=" p-2 px-3 md:px-10 bg-white rounded-lg border-2  border-gray-200 text-center capitalize text-base">
              <Link to={"/auth/login"}>log in </Link>
            </button>
            <button className="p-2  px-3 md:px-10 bg-black text-white rounded-lg border-2  border-black text-center capitalize text-base">
              <Link to={"/auth/signup"}>sign up </Link>
            </button>
          </div>
        </header>
        <main className=" my-20 md:my-28">
          <section
            ref={Sectionref}
            data-slot="getStartedWithUs"
            className="mt-26 md:mt-44 mb-30 md:mb-64 flex flex-col gap-10 justify-center items-center"
          >
            <div className=" w-[90%] lg:w-[50%] text-center">
              <h1 className="font-semibold first-letter:uppercase text-2xl md:text-4xl">
                Get started with Finance Tracker and ensure an efficient way to
                manage your daily finances.
              </h1>
            </div>
            <div className=" w-[40%] lg:w-[20%]">
              <button className="p-4  w-full px-3 md:px-10 bg-black text-white rounded-2xl border-2  border-black text-center capitalize text-xl">
                <Link to={"/auth/signup"}>get started </Link>
              </button>
            </div>
          </section>
          <InfoSection
            imgs={"/dash.png"}
            title={"dashboard view"}
            desc={
              "Get a clear snapshot of your finances in one place. The dashboard provides real-time insights into your income, expenses, and savings, helping you stay in control and make smarter financial decisions"
            }
            pos={"-right-32"}
          />
          <InfoSection
            imgs={"/trans.png"}
            title={"see where your money goes !"}
            desc={
              "Track every transaction effortlessly. From daily expenses to big purchases, get a transparent view of your money flow so you can stay on top of your budget and make confident financial choices."
            }
            pos={"-left-24"}
          />
          <InfoSection
            imgs={"/anal.png"}
            title={"deep-dive analytics for smarter insights"}
            desc={
              "Go beyond the basics with detailed analytics that help you spot spending patterns, track trends over time, and identify opportunities to save more. Understand your finances on a deeper level and plan with confidence."
            }
            pos={"-right-32"}
          />
          <section className="text-center flex flex-col items-center justify-center gap-10 md:gap-20 my-24 md:my-54">
            <h4 className="text-3xl capitalize font-medium">
              what are you waiting for ? get started{" "}
            </h4>
            <button
              className="animate-bounce cursor-pointer"
              onClick={handleScroll}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v6m0 3v1.5m0 3v.5" />
                <path d="M16 9l-4 -4" />
                <path d="M8 9l4 -4" />
              </svg>
            </button>
          </section>
        </main>
      </div>{" "}
      <footer className="mt-20 p-5 flex bg-black justify-center items-center ">
        <div className="capitalize flex gap-2 items-center text-base ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#d4d3d3"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M14 9.75a3.016 3.016 0 0 0 -4.163 .173a2.993 2.993 0 0 0 0 4.154a3.016 3.016 0 0 0 4.163 .173" />
          </svg>
          <p className="text-gray-300">all rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Landingpage;

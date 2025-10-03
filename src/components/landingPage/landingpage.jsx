import React from "react";
import { currencyDollar } from "../ui/dollarIcon";
import { Link } from "react-router-dom";
const Landingpage = () => {
  console.log("Component rendered");
  return (
    <div className="my-10  mx-3 md:mx-20 ">
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
      <main className="my-28">
        <section
          data-slot="getStartedWithUs"
          className="mt-32 flex flex-col gap-10 justify-center items-center"
        >
          <div className=" w-[90%] lg:w-[50%] text-center">
            <h1 className="font-semibold first-letter:uppercase text-3xl">
              Get started with Finance Tracker and ensure an efficient way to
              manage your daily finances.
            </h1>
          </div>
          <div className=" w-[40%] lg:w-[20%]">
            <button className="p-2  w-full px-3 md:px-10 bg-black text-white rounded-lg border-2  border-black text-center capitalize text-base">
              <Link to={"/auth/signup"}>get started </Link>
            </button>
          </div>
        </section>
        <section data-slot="dashBoard-view" className="my-38 relative ">
          <div className="grid grid-cols-2 ">
            <div className="p-10 flex flex-col gap-10">
              <h3 className="text-3xl font-medium">Dashboard Overview </h3>
              <p className="text-gray-500 text-xl ">
                Get a clear snapshot of your finances in one place. The
                dashboard provides real-time insights into your income,
                expenses, and savings , helping you stay in control and make
                smarter financial decisions
              </p>
            </div>
            <div data-slot="Preview" className=" self-end w-full">
              <img src="/dash.png" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Landingpage;

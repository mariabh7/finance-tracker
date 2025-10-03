import React from "react";
import { currencyDollar } from "../ui/dollarIcon";
import { Link } from "react-router-dom";

function InfoSection({ imgs, title, desc, pos }) {
  return (
    <section data-slot="dashBoard-view" className="my-38 relative">
      <div className="grid grid-cols-2 ">
        <div className="p-6 flex flex-col gap-6">
          <h3 className="text-3xl font-medium">{title}</h3>
          <p className="text-gray-500 text-[22px] ">{desc}</p>
        </div>
        <div
          data-slot="Preview"
          className="absolute -top-20 -right-32 self-end w-[670px]"
        >
          <img src={imgs} className="shadow-2xl rounded-3xl" />
        </div>
      </div>
    </section>
  );
}
const Landingpage = () => {
  console.log("Component rendered");
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
        <main className="my-28">
          <section
            data-slot="getStartedWithUs"
            className=" mt-52 mb-64 flex flex-col gap-10 justify-center items-center"
          >
            <div className=" w-[90%] lg:w-[50%] text-center">
              <h1 className="font-semibold first-letter:uppercase text-4xl">
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
          <InfoSection
            imgs={"/dash.png"}
            title={"dashboard view"}
            desc={
              "Get a clear snapshot of your finances in one place. The dashboard provides real-time insights into your income, expenses, and savings, helping you stay in control and make smarter financial decisions"
            }
          />
        </main>
      </div>{" "}
      <footer className="mt-20 p-5 flex bg-black justify-center items-center ">
        <div className="capitalize text-base text-white">
          <p>
            made with love by{" "}
            <a href="https:github.com/mariabh7" target="blank">
              maria
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landingpage;

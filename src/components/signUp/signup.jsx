import React, { useState } from "react";
import { currencyDollar } from "../ui/dollarIcon";
import { Link } from "react-router-dom";
function SignUpForm() {
  return (
    <form className="flex flex-col gap-2   ourform">
      <div className="single-input">
        <label htmlFor="name">name</label>
        <input id="name" placeholder="enter your name" className="class-i" />
      </div>
      <div className="single-input">
        <label htmlFor="email">email</label>
        <input id="email" placeholder="enter your email" className="class-i" />
      </div>
      <div className="single-input">
        <label htmlFor="job">your job</label>
        <input id="job" placeholder="enter your job" className="class-i" />
      </div>
      <div className="single-input">
        <label htmlFor="password">password</label>
        <input
          id="password"
          placeholder="enter your password"
          className="class-i"
        />
      </div>
      <button
        type="submit"
        className="px-2 mt-3 py-4 w-full text-base bg-black text-white text-center capitalize rounded-xl cursor-pointer"
      >
        create account
      </button>
      <div className="flex mt-3 justify-start capitalize gap-2 ">
        <p className="text-gray-400">already have an account ?</p>
        <Link className="underline" to={"/analytics"}>
          log in here{" "}
        </Link>
      </div>
    </form>
  );
}
function Signup() {
  const [switchs, setSwitchs] = useState("w-[20%]");
  return (
    <div className="p-3 ">
      <div className="grid grid-cols-[48%_52%] ">
        <div className="flex my-5  mx-20 flex-col gap-16 ">
          <div className="flex justify-items-start gap-2 items-center">
            {currencyDollar()}
            <h1 className="capitalize font-medium text-3xl">finance tracker</h1>
          </div>
          <div
            data-slot="SignUpForms"
            className="flex flex-col justify-start gap-3"
          >
            <div data-container="google-log-in" className="w-full relative">
              <button className="flex justify-center border-gray-200 py-3 capitalize border-2 rounded-xl  w-full items-center gap-3 ">
                <img className="w-5" src="public/Group.svg"></img>
                <span>sign in with google</span>
              </button>
              <p className="border-b-[1px] text-center border-gray-200 leading-1 my-5 w-full">
                <span className="bg-white text-gray-400 p-3 ">or</span>
              </p>
            </div>
            <SignUpForm />
          </div>
        </div>
        <div className="relative my-3 mx-5  ">
          <img
            className="hidden lg:block rounded-3xl w-full h-screen"
            src="/public/mesh-gradient (1).png"
          ></img>
          <div className="absolute top-0 py-5 left-[20%] overflow-y-scroll h-full ">
            <ul className="flex w-full gap-3 flex-col">
              <li className="temp">hello</li>
              <li className="temp"> hello1 </li>
              <li className="temp"> hello2</li>
              <li className="temp"> hello3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

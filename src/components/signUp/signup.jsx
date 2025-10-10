import React, { useRef, useState } from "react";
import Slider from "./slider";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { currencyDollar } from "../ui/dollarIcon";
import { Link } from "react-router-dom";
import useCheckInputs from "../../hooks/authentication";
export function SignUpForm() {
  const [check, useCheck] = useCheckInputs();
  return (
    <form
      className="flex flex-col gap-2   ourform"
      onSubmit={(e) => useCheck(e, "signup")}
    >
      <div className="single-input">
        <label htmlFor="name">name</label>
        <input
          name="name"
          id="name"
          placeholder="enter your name"
          className="class-i"
        />
        <div
          data-error="nameError-handeling"
          ref={(el) => (check.current.name = el)}
        ></div>
      </div>
      <div className="single-input">
        <label htmlFor="email">email</label>
        <input
          name="email"
          id="email"
          placeholder="enter your email"
          className="class-i"
        />
        <div data-error="email" ref={(el) => (check.current.email = el)}></div>
      </div>
      <div className="single-input">
        <label htmlFor="job">your job</label>
        <input
          name="job"
          id="job"
          placeholder="enter your job"
          className="class-i"
        />
        <div data-error="job" ref={(el) => (check.current.job = el)}></div>
      </div>
      <div className="single-input">
        <label htmlFor="password">password</label>
        <input
          name="password"
          id="password"
          placeholder="enter your password"
          className="class-i"
        />
        <div
          data-error="pass"
          ref={(el) => (check.current.password = el)}
        ></div>
      </div>

      <button
        type="submit"
        className="px-2 mt-3 py-4 w-full text-base bg-black text-white text-center capitalize rounded-xl cursor-pointer"
      >
        create account
      </button>
      <div className="flex mt-3 justify-start capitalize gap-2 ">
        <p className="text-gray-400 ">already have an account ?</p>
        <Link className="underline" to={"/auth/login"}>
          log in here{" "}
        </Link>
      </div>
    </form>
  );
}
export function LogInForm() {
  const [check1, usecheck1] = useCheckInputs();
  return (
    <form
      className="flex flex-col gap-2   ourform"
      onSubmit={(e) => usecheck1(e, "login")}
    >
      <div className="single-input">
        <label htmlFor="email">email</label>
        <input
          id="email"
          name="email"
          placeholder="enter your email"
          className="class-i"
        />
        <div data-error="pass" ref={(el) => (check1.current.email = el)}></div>
      </div>
      <div className="single-input">
        <label htmlFor="password">password</label>
        <input
          name="password"
          id="password"
          placeholder="enter your password"
          className="class-i"
        />
        <div
          data-error="pass"
          ref={(el) => (check1.current.password = el)}
        ></div>
      </div>
      <button
        type="submit"
        className="px-2 mt-3 py-4 w-full text-base bg-black text-white text-center capitalize rounded-xl cursor-pointer"
      >
        Log into your account
      </button>
      <div className="flex mt-3 justify-start capitalize gap-2 ">
        <p className="text-gray-400 ">don't have an account?</p>
        <Link className="underline" to={"/auth/signup"}>
          sign up here{" "}
        </Link>
      </div>
    </form>
  );
}
function Signup() {
  const [switchs, setSwitchs] = useState("w-[20%]");
  return (
    <div className="p-3 ">
      <div className="grid grid-cols-1 lg:grid-cols-[48%_52%] ">
        <div className="flex my-5 mx-5 md:mx-20 flex-col gap-14 ">
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
                <img className="w-5" src="/Group.svg"></img>
                <span>continue with google</span>
              </button>
              <p className="border-b-[1px] text-center border-gray-200 leading-1 my-5 w-full">
                <span className="bg-white text-gray-400 p-3 ">or</span>
              </p>
            </div>
            <div data-container="formTofill">
              <Outlet />
            </div>
          </div>
        </div>
        <div className=" hidden sq h-screen lg:block relative my-1 mx-5  ">
          <Slider></Slider>
        </div>
      </div>
    </div>
  );
}

export default Signup;

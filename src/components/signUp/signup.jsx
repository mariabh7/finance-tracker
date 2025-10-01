import React, { useState } from "react";
import { currencyDollar } from "../ui/dollarIcon";
function SignUpForm() {
  return (
    <form>
      <div>
        <label htmlFor="name">name</label>
        <input id="name" placeholder="enter your name" />
      </div>
      <div>
        <label htmlFor="email">email</label>
        <input id="email" placeholder="enter your email" />
      </div>
      <div>
        <label htmlFor="job">your job</label>
        <input id="job" placeholder="enter your job" />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input id="password" placeholder="enter your password" />
      </div>
    </form>
  );
}
function Signup() {
  const [switchs, setSwitchs] = useState("w-[20%]");
  return (
    <div>
      <div>
        <div>
          <div className="flex justify-items-start gap-2 items-center">
            {currencyDollar()}
            <h1 className="capitalize font-medium text-2xl">finance tracker</h1>
          </div>
          <div>
            <h1>kepp your finances on track </h1>
            <p>sign up to get your life into another level</p>
          </div>
          <div data-slot="SignUp forms">
            <div data-container="google-log-in">
              <button>sign in with google</button>
              <div>
                <div></div>
                <span>or</span>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div>{/* image */}</div>
      </div>
    </div>
  );
}

export default Signup;

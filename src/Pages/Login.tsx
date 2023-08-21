import React from "react";
import Design from '../Assets/Images/Design.png'

const Login: React.FC = () => {
  return (
    <div className="h-auto pt-10">
      <div className="py-20 md:mx-auto mx-4 max-w-screen-xl">
        <div className="flex justify-between shadow-md mx-4 shadow-secondary rounded-md">
        <div className="hidden md:block w-3/5">
          <img
            src={Design}
            alt="Photu"
            className="w-full rounded-l-md"
          />
        </div>
        <div className="flex flex-col justify-center items-center bg-bgrd rounded-r-md p-6 w-full md:w-2/5 gap-6">
          <div className="text-4xl pb-4 font-bold">Login</div>
          <div className="flex flex-col w-4/5 gap-2">
            <div className="flex flex-col">
              <label className="text-xl font-semibold px-2">Email</label>
              <div className="flex border border-secondary items-center w-full rounded-md bg-primary brightness-150 px-4 py-2">
                <input
                  placeholder="Enter your Email"
                  className="placeholder-secondary w-full text-secondary focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-xl font-semibold px-2">Password</label>
              <div className="flex border border-secondary items-center w-full rounded-md bg-primary brightness-150 px-4 py-2">
                <input
                  placeholder="Enter your password"
                  className="placeholder-secondary w-full text-secondary focus:outline-none"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <button className="px-8 py-2 mt-4 bg-secondary text-primary rounded-md">
              Login
            </button>
            <p className="text-secondary">Create new account</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

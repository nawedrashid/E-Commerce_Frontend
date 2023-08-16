import React from "react";

const Login: React.FC = () => {
  return (
    <div className="h-auto bg-gradient-to-b from-primary via-bgrd to-primary pt-10">
      <div className="flex py-20 justify-around mx-auto max-w-screen-lg">
        <div className="hidden md:block">Design</div>
        <div className="flex flex-col justify-center items-center shadow-md shadow-secondary rounded-md bg-bgrd p-8 gap-6">
          <div className="text-4xl font-bold">Login</div>
          <div className="flex flex-col gap-2">
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
            <button className="px-8 py-2 bg-secondary text-primary rounded-md">Login</button>
            <p className="text-secondary">Create new account</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

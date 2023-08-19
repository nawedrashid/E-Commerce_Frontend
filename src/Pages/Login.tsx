import React from "react";

const Login: React.FC = () => {
  return (
    <div className="h-auto pt-10">
      <div className="py-20 mx-auto max-w-screen-lg">
        <div className="flex justify-between shadow-md mx-4 shadow-secondary rounded-md">
        <div className="hidden md:block w-3/5">
          <img
            src="data:image/jpeg;base64,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"
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

import React from "react";

const Login: React.FC = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-primary via-bgrd to-primary pt-10">
      <div className="flex py-20 justify-around mx-auto max-w-screen-lg">
        <div className="hidden md:block">Design</div>
        <div className="border flex flex-col justify-center items-center border-secondary rounded-md bg-bgrd p-8">
          <div className="text-4xl font-bold">Login</div>
          <div className="flex py-8 gap-6">
            <label className="text-xl font-semibold">Name</label>
            <div className="flex items-center w-full rounded-md bg-primary brightness-150 px-4 py-2">
              <input
                placeholder="Enter your name"
                className="placeholder-secondary w-full text-secondary focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from "react";

function page() {
  return (
    <div className="bg-blue-950  flex items-center justify-center h-screen">
      {/* login page */}
      <div className="bg-slate-50 rounded-lg w-1/4 flex flex-col p-10 shadow-2xl">
        <p className="text-center font-bold text-2xl">Login</p>
        <div className="flex flex-col mt-5">
          {" "}
         
          <input
            type="text"
            className="border border-gray-400 p-2 rounded-md"
            placeholder="enter your email id"
          />
        </div>

        <div className="flex flex-col mt-5">
          {" "}
         
          <input
            type="text"
            className="border border-gray-400 p-2 rounded-md"
            placeholder="your password here"
          />
        </div>
        <button className="bg-slate-950 text-white p-2 rounded-md mt-5">
          Login
        </button>
        <div className=" mt-2 flex justify-between">
            <p>Forgot password?</p>
            <p>Create an account</p>
        </div>
      </div>
    </div>
  );
}

export default page;

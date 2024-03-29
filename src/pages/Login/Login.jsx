import React from "react";
import { logo } from "../../assets/Images/Images";
import { LuLogIn } from "../../assets/Icons/Icons";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // alert("bang;l");
    navigate("/overview");
  };
  return (
    <div className="bg-[url('/login-bg.jpg')] h-screen w-full flex justify-center items-center bg-no-repeat bg-top bg-cover">
      {/* black shadow */}
      <div className="bg-black/70 fixed top-0 right-0 bottom-0 left-0 "></div>
      {/* form */}
      <div
        className="bg-black w-9/12 m-auto  border-t-info border-t-4 rounded-md flex py-8 px-7
       flex-row gap-5  relative z-10"
      >
        {/* left */}
        <div className="flex flex-row gap-3 w-full">
          <img src={logo} alt="" className="w-14 h-16" />
          <div className="">
            <h1 className="text-info text-3xl hover:text-silver-gray duration-300 cursor-pointer font-normal">
              Nucleon Smart Endpoint
            </h1>
            <p className="text-silver-gray text-xl mt-1">
              Protect data that matters
            </p>
          </div>
        </div>
        {/* right */}
        <form
          onSubmit={handleLogin}
          className="flex flex-col  gap-[6px] w-full"
        >
          <input
            type="email"
            name="email"
            id=""
            className="bg-white text-lg py-1 rounded-sm placeholder:text-gray-500 outline-none px-2"
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            id=""
            className="bg-white text-lg py-1 rounded-sm placeholder:text-gray-500 outline-none px-2"
            placeholder="Password"
            required
          />
          <button
            type="submit"
            className="bg-white text-black flex flex-row items-center text-center justify-center gap-2 text-lg py-1 rounded-sm cursor-pointer"
          >
            <LuLogIn /> Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

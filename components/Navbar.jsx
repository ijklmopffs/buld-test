import { useState } from "react";
import logo from "../src/assets/Logo.svg";
import menu from "../src/assets/menu.svg";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className="hidden md:flex items-center justify-between p-4 max-w-[1280px] mx-auto">
        <div className="flex gap-6 items-center">
          <div>
            <img src={logo} alt="" />
          </div>
          <div className="flex items-center gap-4 font-bold text-[#060C3C]">
            <a href="/">Pricing</a>
            <a href="/">Resources Center</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="font-bold text-[#060C3C]">Login</button>
          <button className="font-bold text-white bg-[#6241D4] rounded-md px-8 py-4">
            Sign Up
          </button>
        </div>
      </nav>

      <nav className="flex md:hidden items-center justify-between p-4 max-w-[1280px] mx-auto">
        <div>
          <img src={logo} alt="" />
        </div>

        <div
          className={
            nav
              ? "flex w-full transition-transform ease-in duration-700"
              : "hidden w-full"
          }
        >
          <div className="fixed inset-0 z-10 bg-black opacity-50 md:hidden"></div>
          <div className="flex flex-col z-10 absolute md:static top-0 p-10 gap-10 left-[6.5rem] md:p-0 bg-white md:bg-none h-screen md:h-auto w-4/5 items-start font-semibold text-lg">
            <div className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="17"
                onClick={handleClick}
              >
                <path
                  fill="black"
                  fillRule="evenodd"
                  d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-4 font-bold text-[#060C3C]">
              <a href="/">Pricing</a>
              <a href="/">Resources Center</a>
              <a href="/">About</a>
              <a href="/">Contact</a>
            </div>
            <div className="flex flex-col gap-4 items-start justify-self-start">
              <button className="font-bold text-[#060C3C]">Login</button>
              <button className="font-bold text-white bg-[#6241D4] rounded-md px-8 py-4">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        <div onClick={handleClick}>
          <img src={menu} alt="" />
        </div>
      </nav>
    </>
  );
}

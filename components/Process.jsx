import line from "../src/assets/Direction Line.svg";
import lineMobile from "../src/assets/Arrow.svg";
import login from "../src/assets/Login.svg";
import connect from "../src/assets/Connect.svg";
import getdata from "../src/assets/Get Data.svg";

export default function Process() {
  return (
    <section className="my-20 text-center max-w-[1280px] mx-auto">
      <h2 className="font-bold text-3xl md:text-5xl text-[#060C3C] w-96 md:w-[35rem] mx-auto">
        How our platform process easy to use?
      </h2>
      <div className="flex flex-col md:flex-row justify-center md:justify-between my-16">
        <div className="w-fit mx-auto md:mx-0 my-10 md:my-0">
          <img src={login} alt="" />
          <h3 className="font-bold text-lg md:text-2xl text-[#060C3C] w-72 mx-auto md:my-3">
            Login or sign up to be able use our platform
          </h3>
          <p className=" text-base md:text-lg text-[#5D6180] w-60 mx-auto">
            You must log in first to be able to use our platform to get your
            product analytics
          </p>
        </div>

        <img src={line} alt="" className="hidden md:block" />
        <img src={lineMobile} alt="" className="md:hidden w-16 h-20 mx-auto" />

        <div className="w-fit mx-auto md:mx-0 my-10 md:my-0">
          <img src={connect} alt="" />
          <h3 className="font-bold text-lg md:text-2xl text-[#060C3C] w-64 mx-auto md:my-3">
            Connect your website with just a few click
          </h3>
          <p className="text-base md:text-lg text-[#5D6180] w-64 mx-auto">
            Select the application you wanted to be able to connect with just a
            few clicks
          </p>
        </div>

        <img src={line} alt="" className="hidden md:block" />
        <img src={lineMobile} alt="" className="md:hidden w-16 h-20 mx-auto" />

        <div className="w-fit mx-auto md:mx-0 my-10 md:my-0">
          <img src={getdata} alt="" />
          <h3 className="font-bold text-lg md:text-2xl text-[#060C3C] w-72 mx-auto md:my-3">
            Take some sales data that you want
          </h3>
          <p className="text-base md:text-lg text-[#5D6180] w-60 mx-auto">
            You already have sales data of your product with some variants you
            want
          </p>
        </div>
      </div>
    </section>
  );
}

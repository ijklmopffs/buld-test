import benefitsImg from "../src/assets/benefits.svg";
import benefitsImgMobile from "../src/assets/benefitsMobile.svg";
import analyzeImg from "../src/assets/analyze.svg";
import rocketImg from "../src/assets/Rocket.svg";
import securityImg from "../src/assets/Security.svg";
import dashboardImg from "../src/assets/Dashboard.svg";

export default function Benefits() {
  return (
    <section className="my-20 flex justify-between max-w-[1280px] mx-auto">
      <div className="hidden md:block">
        <img src={benefitsImg} alt="" />
      </div>
      <div>
        <h2 className="font-bold text-3xl md:text-5xl text-[#060C3C] w-96 mx-auto md:mx-0 md:w-[40rem] my-5 text-center md:text-start">
          The reasons to prefer choosing our platform
        </h2>
        <p className="text-lg text-[#5D6180] text-center md:text-start w-80 md:w-96 mx-auto md:mx-0">
          Seamless integration of more than 20+ apps that can help analytics
          your product
        </p>
        <div className="md:hidden mx-auto p-8">
          <img src={benefitsImgMobile} alt="" className="mx-auto" />
        </div>

        <div className="mt-16 flex flex-col justify-between md:flex-wrap md:w-[35rem] gap-7 p-8 md:p-0">
          <div className="flex gap-2">
            <img src={analyzeImg} alt="" />
            <div>
              <h3 className="font-bold text-lg md:text-2xl text-[#060C3C] my-3">
                Real time data
              </h3>
              <p className="text-[#5D6180] w-80 md:w-56 text-sm md:text-base">
                Get the data you need to make smarter decisions.
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <img src={rocketImg} alt="" />
            <div>
              <h3 className="font-bold text-lg md:text-2xl text-[#060C3C] my-3">
                Fast and Easy to use
              </h3>
              <p className="text-[#5D6180] w-80 md:w-56 text-sm md:text-base">
                Easily to convert API with just a few clicks.
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <img src={securityImg} alt="" />
            <div>
              <h3 className="font-bold text-lg md:text-2xl text-[#060C3C] my-3">
                Safely security
              </h3>
              <p className="text-[#5D6180] w-80 md:w-56 text-sm md:text-base">
                All customer data is encrypted.
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <img src={dashboardImg} alt="" />
            <div>
              <h3 className="font-bold text-lg md:text-2xl text-[#060C3C] my-3">
                Powerfull App
              </h3>
              <p className="text-[#5D6180] w-80 md:w-56 text-sm md:text-base">
                Provide simple and minimalist dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

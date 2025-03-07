import featuresImg from "../src/assets/features.svg";
import featuresImgMobile from "../src/assets/featuresMobile.svg";
import integratedImg from "../src/assets/Integrated.svg";
import syncImg from "../src/assets/Sync.svg";
import reportImg from "../src/assets/Report.svg";

export default function Features() {
  return (
    <section className="flex justify-between max-w-[1280px] mx-auto p-8">
      <div>
        <h2 className="font-bold text-3xl md:text-5xl text-[#060C3C] w-auto md:w-[35rem] mx-auto md:mx-0 text-center md:text-start">
          We provide features for your product
        </h2>
        <div className="md:hidden mx-auto">
          <img src={featuresImgMobile} alt="" />
        </div>

        <div>
          <div className="my-10 border-2 border-white bg-white rounded-md shadow-2xl p-6 flex gap-4">
            <div>
              <img src={integratedImg} alt="" />
            </div>
            <div>
              <h3 className="font-bold text-lg md:text-2xl text-[#060C3C]">
                Integrated with Social Media
              </h3>
              <p className="text-[#5D6180] w-64 md:w-96 text-sm md:text-base">
                Seamless integration of more than 20+ apps that can help
                analytics
              </p>
              <a href="/" className="font-bold text-[#6241D4] underline">
                Learn More
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 my-10">
            <img src={syncImg} alt="" />
            <p className="text-[#B4B6C4] font-bold text-lg md:text-2xl">
              Always in syncronized
            </p>
          </div>

          <div className="flex items-center gap-4 my-10">
            <img src={reportImg} alt="" />
            <p className="text-[#B4B6C4] font-bold text-lg md:text-2xl">
              Powerful report
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <img src={featuresImg} alt="" />
      </div>
    </section>
  );
}

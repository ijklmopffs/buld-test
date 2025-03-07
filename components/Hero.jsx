import heroImg from "../src/assets/heroImg.svg";
import partnerImg from "../src/assets/partners.svg";
import heroImgMobile from "../src/assets/heroImgMobile.svg";
import partnerImgMobile from "../src/assets/partnersMobile.svg";

export default function Hero() {
  return (
    <>
      <section className="flex flex-col md:flex-row justify-between md:my-10 max-w-[1280px] mx-auto p-8">
        <div className="space-y-10">
          <h1 className="font-bold text-[#060C3C] text-3xl md:text-6xl w-80 mx-auto md:mx-0 md:w-[40rem] text-center md:text-start">
            We help any business to get analytics and sales marketing
          </h1>
          <p className="text-lg text-[#5D6180] my-5 w-80 md:w-[30rem] text-center md:text-start mx-auto md:mx-0">
            The fastest and simple way to generate growing business solutions
            with our products
          </p>
          <div className="my-8">
            <div>
              <input
                type="text"
                placeholder="Your business email"
                className="border-2 border-[#B4B6C4] rounded-md p-6 w-full md:w-[30rem] text-[#B4B6C4] focus:outline-none mx-auto md:mx-0"
              />
              <button className="font-bold text-white bg-[#6241D4] rounded-md px-8 py-4 relative left-68 md:-left-40 bottom-16 md:bottom-0 md:right-40">
                Get Started
              </button>
            </div>
            <p className="italic text-[#5D6180] my-1 text-sm md:text-base">
              *we will not disseminate your email and so you avoid spam
            </p>
          </div>
          <div className="hidden md:flex gap-8 items-center my-5">
            <div>
              <h2 className="font-bold text-[#060C3C] text-5xl">350+</h2>
              <p className="text-lg text-[#5D6180] w-56">
                over 500 business powered with us
              </p>
            </div>
            <div>
              <h2 className="font-bold text-[#060C3C] text-5xl">4.8</h2>
              <p className="text-lg text-[#5D6180] w-56">
                Rating on google play and app store
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            src={heroImg}
            alt="hero illustration"
            className="hidden md:block"
          />
          <img
            src={heroImgMobile}
            alt="hero illustration"
            className="md:hidden mx-auto"
          />
        </div>
      </section>
      <img src={partnerImg} alt="" className="mx-auto hidden md:block" />
      <img src={partnerImgMobile} alt="" className="mx-auto md:hidden" />
    </>
  );
}

import currencyImg from "../src/assets/currency.png";
import logo from "../src/assets/Logo.svg";
import email from "../src/assets/Icon System.svg";
import instagram from "../src/assets/instagram.svg";
import twitter from "../src/assets/twitter.svg";
import linkedin from "../src/assets/linkedin.svg";
import eduaidImg from "../src/assets/Eduaid Africa.png";

export default function Footer() {
  return (
    <>
      <div className="bg-[#F5FBF4]">
        <div className="max-w-[1280px] mx-auto p-10 flex justify-between">
          <div>
            <h2 className="text-[#1F892B] font-medium text-5xl my-5">
              Refer People; <br /> Earn AfriGold Points
            </h2>
            <p className="text-[#1F892B] text-lg">
              Earn 2 AfriGold Point for every referral you make. <br /> Join the
              programs and get a chance to earn.
            </p>
            <button className="rounded-full bg-[#1F892B] text-white px-6 py-4 font-semibold text-sm mt-8">
              Refer somebody
            </button>
          </div>

          <img src={currencyImg} alt="" />
        </div>
      </div>

      <footer className="bg-[#0B2005] p-8">
        <div className="max-w-[1280px] mx-auto">
          <div>
            <img src={logo} alt="" className="mx-auto md:mx-0" />
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mt-5">
                <p className="flex items-center gap-2 text-[#B4B6C4] my-3 justify-center md:justify-normal">
                  <img src={email} alt="" /> eduaid.africa@santoscreations.org
                </p>
                <p className="flex items-center gap-2 text-[#B4B6C4] my-3 justify-center md:justify-normal">
                  +23489098684874
                </p>
                <p className="flex items-center gap-2 text-[#B4B6C4] my-3 justify-center md:justify-normal">
                  +23489098684874
                </p>
              </div>
              <div className="flex flex-wrap md:flex-nowrap justify-between gap-12 mt-10 md:mt-0">
                <div className="flex flex-col gap-4">
                  <h3 className="font-bold text-white">Take actions</h3>
                  <a className="text-[#B4B6C4]">Donate</a>
                  <a className="text-[#B4B6C4]">Start a fundraiser</a>
                  <a className="text-[#B4B6C4]">Apply for scholarships</a>
                  <a className="text-[#B4B6C4]">Get career counselling</a>
                  <a className="text-[#B4B6C4]">Support a project</a>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="font-bold text-white">Career</h3>
                  <a className="text-[#B4B6C4]">Apply for employment</a>
                  <a className="text-[#B4B6C4]">Apply for internship</a>
                  <a className="text-[#B4B6C4]">Join as volunteer</a>
                  <a className="text-[#B4B6C4]">Get career counselling</a>
                  <a className="text-[#B4B6C4]">Support a project</a>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="font-bold text-white">Programs</h3>
                  <a className="text-[#B4B6C4]">Scholarships and grants</a>
                  <a className="text-[#B4B6C4]">Training and certifications</a>
                  <a className="text-[#B4B6C4]">Workshop conferences</a>
                  <a className="text-[#B4B6C4]">My career, my life</a>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="font-bold text-white">Get involved</h3>
                  <a className="text-[#B4B6C4]">Become a member</a>
                  <a className="text-[#B4B6C4]">Join a local chapter</a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-[1px] bg-[#F4F4F4]/90 my-10" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#B4B6C4] text-sm">
              © 2020 Growthly. All Right Reserved
            </p>
            <div className="flex gap-4">
              <img src={instagram} alt="" />
              <img src={twitter} alt="" />
              <img src={linkedin} alt="" />
            </div>
          </div>
          <img src={eduaidImg} alt="" />
        </div>
      </footer>
    </>
  );
}

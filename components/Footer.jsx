import patternImg from "../src/assets/Pattern.svg";
import logo from "../src/assets/Logo.svg";
import email from "../src/assets/Icon System.svg";
import slack from "../src/assets/Slack.svg";
import instagram from "../src/assets/instagram.svg";
import twitter from "../src/assets/twitter.svg";
import linkedin from "../src/assets/linkedin.svg";

export default function Footer() {
  return (
    <footer className="bg-[#060C3C] p-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex justify-between">
          <div className="space-y-10">
            <h1 className="font-bold text-white text-3xl md:text-5xl text-center md:text-start">
              Ready to get started?
            </h1>
            <p className="text-lg text-[#B4B6C4] my-5 md:w-[30rem] text-center md:text-start">
              The fastest and simple way to generate growing business solutions
              with our products
            </p>
            <div className="md:my-8">
              <div>
                <input
                  type="text"
                  placeholder="Your business email"
                  className="border-2 border-[#B4B6C4] bg-white rounded-md p-6 w-full md:w-[30rem] text-[#B4B6C4] focus:outline-none"
                />
                <button className="font-bold text-white bg-[#6241D4] rounded-md px-8 py-4 relative left-68 md:-left-40 bottom-16 md:bottom-0 md:right-40">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div>
            <img src={patternImg} alt="" className="hidden md:block" />
          </div>
        </div>

        <div className="w-full h-[1px] bg-[#F4F4F4]/90 my-10" />

        <div>
          <img src={logo} alt="" className="mx-auto md:mx-0" />
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mt-5">
              <p className="text-[#B4B6C4] md:w-80 my-3 text-center md:text-start">
                The fastest and simple way to generate growing business
                solutions with our products
              </p>
              <p className="flex items-center gap-2 text-[#B4B6C4] my-3 justify-center md:justify-normal">
                <img src={email} alt="" /> hello@dhuhacreative.com
              </p>
              <p className="flex items-center gap-2 text-[#B4B6C4] my-3 justify-center md:justify-normal">
                <img src={slack} alt="" />
                Join our slack community
              </p>
            </div>
            <div className="flex flex-wrap md:flex-nowrap justify-between gap-12 mt-10 md:mt-0">
              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-white">Product</h3>
                <a className="text-[#B4B6C4]">Landingpages</a>
                <a className="text-[#B4B6C4]">Pricing</a>
                <a className="text-[#B4B6C4]">Benefits</a>
                <a className="text-[#B4B6C4]">Features</a>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-white">Company</h3>
                <a className="text-[#B4B6C4]">About</a>
                <a className="text-[#B4B6C4]">Privacy Policy</a>
                <a className="text-[#B4B6C4]">Terms & Conditions</a>
                <a className="text-[#B4B6C4]">Partners</a>
                <a className="text-[#B4B6C4]">Contacts</a>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-white">Resources</h3>
                <a className="text-[#B4B6C4]">Guides and resources</a>
                <a className="text-[#B4B6C4]">Blog</a>
                <a className="text-[#B4B6C4]">Tools</a>
                <a className="text-[#B4B6C4]">Support</a>
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
      </div>
    </footer>
  );
}

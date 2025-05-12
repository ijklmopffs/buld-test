import logo from "../src/assets/Logo.svg";
import ngflag from "../src/assets/NG.svg";

export default function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between px-4 max-w-[1280px] mx-auto">
        <div>
          <img src={logo} alt="" />
        </div>

        <div className="flex gap-4 items-center">
          <div className="flex gap-12 text-[#525151]">
            <a href="/" className="text-[#4DAF4E]">
              Home
            </a>
            <a href="/">About Us</a>
            <a href="/">Programs</a>
            <a href="/">CSR Partners</a>
            <a href="/">Diaspora Portals</a>
            <a href="/">News & Events</a>
            <a href="/">Contact Us</a>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <button className="text-[#525151]">Sign in</button>
          <button className="font-medium text-sm bg-[#F5FBF4] text-[#4DAF4E] rounded-full px-8 py-4">
            Become a member
          </button>
          <img src={ngflag} alt="" />
        </div>
      </nav>
    </>
  );
}

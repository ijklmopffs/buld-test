import heroImg from "../src/assets/foodbank.png";
import labelImg from "../src/assets/labels.png";

export default function Hero() {
  return (
    <>
      <section className="flex flex-col md:flex-row justify-between relative">
        <img src={heroImg} alt="hero" />
        <div className="max-w-[1280px] mx-auto p-8 absolute text-white left-64 top-10">
          <h4 className="font-semibold text-3xl">Welcome to EduAid Africa</h4>
          <h1 className="font-medium text-6xl">
            Empowering Education, <br /> Enabling Futures Across Africa.
          </h1>
          <p className="text-lg w-[35rem]">
            Join us in transforming the educational landscape through
            scholarships, donations, CSR initiatives, community projects, and
            global education expos.
          </p>
          <img src={labelImg} alt="" />
          <div className="space-x-2">
            <button className="rounded-full bg-[#1F892B] text-white px-6 py-4 font-semibold text-sm">
              Start a fundraiser
            </button>
            <button className="rounded-full text-[#1F892B] bg-white px-6 py-4 font-semibold text-sm">
              Donate now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

import charityImg from "../src/assets/charity.png";
import merchandiseImg from "../src/assets/merchandise.png";

export default function Review() {
  return (
    <>
      <section className="my-20 space-y-6 max-w-[1280px] mx-auto flex gap-20 justify-between p-4">
        <h3 className="font-semibold text-4xl text-[#2C322A]">FAQ</h3>
        <div className="space-y-6">
          <div className="bg-[#1F892B] p-6 rounded-md w-[70rem]">
            <h4 className="font-medium text-2xl text-white">
              What is EduAid-Africa?
            </h4>
          </div>
          <div className="bg-[#F9F9F8] p-6 rounded-md w-[70rem]">
            <h4 className="font-medium text-2xl text-[#1F892B]">
              How do I get involved?
            </h4>
          </div>
          <div className="bg-[#F9F9F8] p-6 rounded-md w-[70rem]">
            <h4 className="font-medium text-2xl text-[#1F892B]">
              What is the GetFinance Africa Wallet?
            </h4>
          </div>
        </div>
      </section>
      <section className="my-20 space-y-6 max-w-[1280px] mx-auto">
        <h3 className="font-semibold text-4xl text-[#2C322A] text-center">
          Ready to Take Action
        </h3>
        <p className="text-[#40493E] mt-3 text-center text-lg">
          Take action today and change lives
        </p>

        <div className="bg-[#F5FBF4] rounded-md flex items-center justify-between p-10">
          <div className="space-y-6">
            <h3 className="font-semibold text-4xl text-[#1F892B]">
              Make A Donation
            </h3>
            <p className="text-[#1F892B] mt-3 text-lg">
              Invest in People , Invest in their growth <br /> Invest in a
              stronger educational Standard
            </p>
            <button className="rounded-full bg-[#1F892B] text-white px-6 py-4 font-semibold text-sm">
              Donate now
            </button>
          </div>
          <img src={charityImg} alt="" />
        </div>
      </section>

      <section className="my-20 space-y-6 max-w-[1280px] mx-auto">
        <h3 className="font-semibold text-4xl text-[#2C322A] text-center">
          Get Our Merchandise
        </h3>
        <p className="text-[#40493E] mt-3 text-center text-lg">
          Donate by getting our merchandise
        </p>
        <img src={merchandiseImg} alt="" />
        <button className="rounded-full bg-[#1F892B] text-white px-6 py-4 font-semibold text-sm mt-20 flex items-center mx-auto">
          Donate with merchandise
        </button>
      </section>
    </>
  );
}

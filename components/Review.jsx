import netflix from "../src/assets/Netflix.svg";
import microsoft from "../src/assets/Microsoft.svg";
import shopify from "../src/assets/Shopify.svg";
import tryImg from "../src/assets/try.svg";
import cynthia from "../src/assets/cyhntya.svg";
import derry from "../src/assets/derry.svg";

export default function Review() {
  return (
    <section className="my-20 space-y-6 max-w-[1280px] mx-auto p-8">
      <h2 className="font-bold text-3xl md:text-5xl text-[#060C3C] w-96 md:w-[40rem] mx-auto text-center my-5">
        See what our customers have to say about us
      </h2>

      <div className="flex flex-col md:flex-row justify-between mt-10 gap-4 md:gap-0">
        <div className="bg-[#F4F1FF] rounded-md p-8 w-fit space-y-4 mx-auto md:mx-0">
          <img src={netflix} alt="" />
          <p className="italic text-[#5D6180] w-72 text-sm md:text-base">
            “I’ve used Growthly at many companies before—it’s the go-to solution
            when you need user and product analytics.”
          </p>
          <div className="flex items-center gap-2">
            <img src={tryImg} alt="" />
            <div>
              <h4 className="font-bold text-[#060C3C] text-lg">
                Try Washington
              </h4>
              <p className="text-[#6241D4]">CEO of Netflix</p>
            </div>
          </div>
        </div>

        <div className="bg-[#F4F1FF] rounded-md p-8 w-fit space-y-4 mx-auto md:mx-0">
          <img src={microsoft} alt="" />
          <p className="italic text-[#5D6180] w-72 text-sm md:text-base">
            “Uses Growthly as the source of truth for all its product data, and
            to determine where the team should focus its time.”
          </p>
          <div className="flex items-center gap-2">
            <img src={cynthia} alt="" />
            <div>
              <h4 className="font-bold text-[#060C3C] text-lg">
                Cyhntya Rebecca
              </h4>
              <p className="text-[#6241D4]">CEO of Microsoft</p>
            </div>
          </div>
        </div>

        <div className="bg-[#F4F1FF] rounded-md p-8 w-fit space-y-4 mx-auto md:mx-0">
          <img src={shopify} alt="" />
          <p className="italic text-[#5D6180] w-72 text-sm md:text-base">
            “Uses Growthly to get deeper user insights that could be easily
            shared among teams throughout the world, improving the company
            investment.”
          </p>
          <div className="flex items-center gap-2">
            <img src={derry} alt="" />
            <div>
              <h4 className="font-bold text-[#060C3C] text-lg">Derry Alasca</h4>
              <p className="text-[#6241D4]">CEO of Shopify</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

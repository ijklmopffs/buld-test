import companiesImg from "../src/assets/companies.png";
import wallImg from "../src/assets/wall.png";
import contactImg from "../src/assets/contact.png";

export default function Scale() {
  return (
    <>
      <main className="bg-[#F9F9F8] my-20">
        <section className="max-w-[1280px] mx-auto p-10">
          <h3 className="font-semibold text-4xl text-[#2C322A] text-center">
            Our Partners
          </h3>
          <p className="text-[#40493E] mt-3 text-center text-lg">
            We empower education development and sustainability{" "}
          </p>

          <div className="mt-10 flex justify-between items-center">
            <div>
              <h4 className="font-medium text-3xl text-[#2C322A]">
                Partner With Us
              </h4>
              <p className="text-[#40493E] mt-3 text-lg w-96">
                EduAid-Africa collaborates with local, national, and
                international partners through customized MOUs to enhance the
                scope and impact of its projects. It engages a wide network of
                funders, technical partners, andimplementation partners to
                ensure the effective delivery of educational aid.
              </p>
              <button className="rounded-full bg-[#1F892B] text-white px-6 py-4 font-semibold text-sm mt-5">
                Partner with Us
              </button>
            </div>

            <img src={companiesImg} alt="" />
          </div>
        </section>
      </main>

      <section className="max-w-[1280px] mx-auto p-10">
        <h3 className="font-medium text-4xl text-center">
          Eduaid Wall of Achievers In Diaspora
        </h3>
        <p className="text-[#40493E] mt-3 text-center text-lg">
          We empower education development and sustainability
        </p>
        <img src={wallImg} alt="" className="mt-20" />

        <button className="rounded-full bg-[#1F892B] text-white px-6 py-4 font-semibold text-sm mt-5 flex items-center mx-auto justify-self-center">
          See all
        </button>
      </section>

      <main className="bg-[#F9F9F8] my-20">
        <section className="max-w-[1280px] mx-auto p-10">
          <h3 className="font-semibold text-4xl text-[#2C322A] text-center">
            Get in Touch
          </h3>
          <p className="text-[#40493E] mt-3 text-center text-lg">
            We empower education development and sustainability{" "}
          </p>

          <div className="mt-10 flex justify-between">
            <div>
              <form action="" className="flex flex-wrap gap-10 w-[40rem]">
                <div className="flex flex-col gap-2">
                  <label htmlFor="">First Name</label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    className="border-[#E8E8E8] border-2 rounded-md p-3 w-72"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="">Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    className="border-[#E8E8E8] border-2 rounded-md p-3 w-72"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="">Email</label>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="border-[#E8E8E8] border-2 rounded-md p-3 w-72"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="">Country</label>
                  <input
                    type="text"
                    placeholder="Enter your country"
                    className="border-[#E8E8E8] border-2 rounded-md p-3 w-72"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="">Message</label>
                  <input
                    type="text"
                    placeholder="Enter your country"
                    className="border-[#E8E8E8] border-2 rounded-md p-3 w-[40rem] pb-40"
                  />
                </div>
                <button className="rounded-md bg-[#1F892B] text-white px-6 py-4 font-semibold text-sm w-full">
                  Submit your inquiry
                </button>
              </form>
            </div>
            <div>
              <img src={contactImg} alt="" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

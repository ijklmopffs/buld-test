import testImg from "../src/assets/test.png";
import mapImg from "../src/assets/Map.png";
import engagementImg from "../src/assets/engagement.png";
import chapterImg from "../src/assets/chapter.png";

export default function Features() {
  return (
    <>
      <main
        className="bg-[#0B2005] bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${mapImg})` }}
      >
        <section className="max-w-[1280px] mx-auto p-40">
          <h3 className="font-semibold text-4xl text-white text-center">
            EduAid Africa 2032 SMART Goals
          </h3>
          <p className="text-lg text-white mt-3 text-center">
            EduAid Africa, an initiative of the Santos Creations Educational
            Foundation (SCEF), is dedicated to achieving impactful and
            sustainable educational transformation across Africa by 2032. The
            SMART Goals outlined below provide a clear roadmap for driving
            innovation, inclusivity, and accessibility in education through
            scholarships, capacity-building programs, infrastructure support,
            and digital learning.
          </p>
          <img src={testImg} alt="" className="mt-20" />
        </section>
      </main>

      <section className="max-w-[1280px] mx-auto mt-40">
        <h3 className="font-semibold text-4xl text-[#2C322A] text-center">
          Engagement and Collaboration
        </h3>
        <p className="text-[#40493E] mt-3 text-center text-lg">
          Get involved, become a member today by joining as an Ambassador,
          Donor, Partner or Volunteer{" "}
        </p>
        <img src={engagementImg} alt="" className="mt-10" />
      </section>

      <section className="max-w-[1280px] mx-auto mt-40 p-4">
        <h3 className="font-semibold text-4xl text-[#2C322A] text-center">
          Create or Join a Local Chapter
        </h3>
        <img src={chapterImg} alt="" className="mt-20" />
      </section>
    </>
  );
}

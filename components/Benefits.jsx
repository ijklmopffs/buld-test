import accessImg from "../src/assets/access.png";
import enhanceImg from "../src/assets/enhance.png";
import supportImg from "../src/assets/support.png";
import fosterImg from "../src/assets/foster.png";
import capacityImg from "../src/assets/capacity.png";
import csrImg from "../src/assets/csr.png";
import educationalImg from "../src/assets/educational.png";
import nigeriaImg from "../src/assets/nigeria.png";
import webinarImg from "../src/assets/webinar.png";
import africaImg from "../src/assets/africa.png";

export default function Benefits() {
  return (
    <section className="max-w-[1280px] mx-auto my-10 p-4">
      <div>
        <h2 className="text-[#2C322A] font-medium text-3xl">Objectives</h2>
        <p className="text-[#40493E] mt-5">
          EduAid-Africa has four key objectives that drive our programs and
          Initiatives
        </p>
      </div>
      <div className="my-10">
        <div className="flex justify-between">
          <img src={accessImg} alt="" />
          <img src={enhanceImg} alt="" />
          <img src={supportImg} alt="" />
          <img src={fosterImg} alt="" />
        </div>
      </div>

      <div>
        <h2 className="text-[#2C322A] font-medium text-3xl">
          Programs and Initiatives
        </h2>
        <p className="text-[#40493E] mt-5">
          EduAid-Africa implements a wide range of programs to achie
        </p>
      </div>
      <div className="mt-8 flex justify-between flex-wrap gap-10">
        <div className="bg-[#F9F9F8] w-[25rem] p-4 space-y-6 rounded-md">
          <img src={capacityImg} alt="" />
          <h3 className="font-medium text-xl text-[#2C322A]">
            Capacity Building and Training Programs
          </h3>
          <p className="text-[#566254] text-sm">
            We organize regular workshops, conferences, and seminars aimed at
            improving the skills of educators, administrators, and students.
            These events provide opportunities for knowledge sharing,
            networking, and professional development.
          </p>
          <button className="rounded-full bg-[#1F892B] text-white px-6 py-4 font-semibold text-sm">
            Donate now
          </button>
        </div>

        <div className="bg-[#F9F9F8] w-[25rem] p-4 space-y-6 rounded-md">
          <img src={csrImg} alt="" />
          <h3 className="font-medium text-xl text-[#2C322A]">
            CSR Project Management{" "}
          </h3>
          <p className="text-[#566254] text-sm">
            We work with corporate partners to design and implement educational
            projects as part of their CSR strategies. EduAid-Africa handles
            every aspect of the project, from inception and planning to
            execution and impact reporting.{" "}
          </p>
          <button className="rounded-full bg-[#1F892B] text-white px-6 py-4 font-semibold text-sm">
            Donate now
          </button>
        </div>

        <div className="bg-[#F9F9F8] w-[25rem] p-4 space-y-6 rounded-md">
          <img src={educationalImg} alt="" />
          <h3 className="font-medium text-xl text-[#2C322A]">
            Educational Expos and Conferences{" "}
          </h3>
          <p className="text-[#566254] text-sm">
            EduAid-Africa organizes regional and continental conferences, as
            well as global education expos that highlight Africa’s educational
            achievements, foster international collaborations, and provide a
            platform for sharing innovations in the education sector.{" "}
          </p>
          <button className="rounded-full bg-[#1F892B] text-white px-6 py-4 font-semibold text-sm">
            Donate now
          </button>
        </div>

        <div className="bg-[#F9F9F8] w-[25rem] p-4 space-y-6 rounded-md">
          <img src={capacityImg} alt="" />
          <h3 className="font-medium text-xl text-[#2C322A]">
            Scholarship Portals{" "}
          </h3>
          <p className="text-[#566254] text-sm">
            We provide a centralized platform where students can access and
            apply for scholarships funded by corporate partners, governments,
            and individual donors. Scholarships are available for secondary,
            vocational, and tertiary education, with a focus on creating
            opportunities for students across all regions of Africa.{" "}
          </p>
          <button className="rounded-full bg-[#1F892B] text-white px-6 py-4 font-semibold text-sm">
            Donate now
          </button>
        </div>

        <div className="bg-[#F9F9F8] w-[25rem] p-4 space-y-6 rounded-md">
          <img src={csrImg} alt="" />
          <h3 className="font-medium text-xl text-[#2C322A]">
            Fundraising and Crowdfunding for Educational Projects{" "}
          </h3>
          <p className="text-[#566254] text-sm">
            Individuals and institutions can raise funds for research,
            infrastructure, or special educational programs through our
            platform, which connects them with global donors and supporters.{" "}
          </p>
          <button className="rounded-full bg-[#1F892B] text-white px-6 py-4 font-semibold text-sm">
            Donate now
          </button>
        </div>

        <div className="bg-[#F9F9F8] w-[25rem] p-4 space-y-6 rounded-md">
          <img src={educationalImg} alt="" />
          <h3 className="font-medium text-xl text-[#2C322A]">
            Examination Portal{" "}
          </h3>
          <p className="text-[#566254] text-sm">
            EduAid-Africa offers an online examination system that allows
            students to apply for scholarships based on their performance. This
            transparent, performance-based system ensures that opportunities are
            available to deserving students regardless of backgroud.{" "}
          </p>
          <button className="rounded-full bg-[#1F892B] text-white px-6 py-4 font-semibold text-sm">
            Donate now
          </button>
        </div>
      </div>

      <div className="my-10">
        <h2 className="text-[#2C322A] font-medium text-3xl">Target Group</h2>
        <p className="text-[#40493E] mt-5">
          EduAid-Africa’s programs and initiatives are designed to impact the
          following target groups
        </p>
      </div>
      <div className="flex justify-between mt-10">
        <div className="text-white bg-[#4DAF4E] rounded-md p-5 text-center space-y-3">
          <h2 className="text-xl font-medium">Students</h2>
          <p className="text-sm w-56">
            Offering scholarships, digital learning resources, and opportunities
            to participate in educational programs that expand their potential.{" "}
          </p>
        </div>

        <div className="text-white bg-[#4DAF4E] rounded-md p-5 text-center space-y-3">
          <h2 className="text-xl font-medium">
            {" "}
            Teachers and <br /> Educational Institutions
          </h2>
          <p className="text-sm w-56">
            Providing capacity-building services, training, and infrastructure
            development to ensure educators have the skills and resources to
            deliver quality education.{" "}
          </p>
        </div>

        <div className="text-white bg-[#4DAF4E] rounded-md p-5 text-center space-y-3">
          <h2 className="text-xl font-medium">
            Corporate Partners and <br /> Donors{" "}
          </h2>
          <p className="text-sm w-56">
            Collaborating with businesses to manage CSR projects focused on
            education, ensuring transparency, accountability, and impactful
            results.{" "}
          </p>
        </div>

        <div className="text-white bg-[#4DAF4E] rounded-md p-5 text-center space-y-3">
          <h2 className="text-xl font-medium">
            International and Local <br /> Communities
          </h2>
          <p className="text-sm w-56">
            Engaging communities across Africa and globally to support
            educational improvements through conferences, fundraising, and
            volunteerism.{" "}
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-[#2C322A] font-semibold text-4xl my-20 text-center">
          Join our 2025 Ongoing Projects
        </h2>
        <div className="flex justify-between max-w-7xl mx-auto">
          <div className="bg-[#F5FBF4] rounded-md p-4 space-y-6">
            <img src={nigeriaImg} alt="" className="w-80" />
            <h6 className="text-[#333333] font-semibold text-xl">
              Nigeria School Donation & <br /> Lagos/Ogun Projects
            </h6>
            <p className="text-[#525151] w-80">
              To enhance educational infrastructure and resources in Nigeria,
              focusing on Lagos and Ogun states.
            </p>
          </div>

          <div className="bg-[#F5FBF4] rounded-md p-4 space-y-6">
            <img src={webinarImg} alt="" className="w-80" />
            <h6 className="text-[#333333] font-semibold text-xl">
              Monthly Training & Online <br /> Webinar{" "}
            </h6>
            <p className="text-[#525151] w-80">
              To Provide continuous professional development opportunities for
              educators, students and stakeholders.{" "}
            </p>
          </div>

          <div className="bg-[#F5FBF4] rounded-md p-4 space-y-6">
            <img src={africaImg} alt="" className="w-80" />
            <h6 className="text-[#333333] font-semibold text-xl">
              Africa Education Expo & CSR <br /> Forum 2025 (October 2025){" "}
            </h6>
            <p className="text-[#525151] w-80">
              To foster collaboration among educational stakeholders and promote
              Corporate Social Responsibility (CSR){" "}
            </p>
          </div>
        </div>

        <button className="rounded-full bg-[#1F892B] text-white px-6 py-4 font-semibold text-sm mt-20 flex items-center mx-auto">
          See all our projects
        </button>
      </div>
    </section>
  );
}

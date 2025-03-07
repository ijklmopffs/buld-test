import mapImg from "../src/assets/Map.svg";

export default function Scale() {
  return (
    <section className="my-20 max-w-[1280px] mx-auto">
      <p className="text-center text-lg text-[#FFD43D]">Global Scale</p>
      <h2 className="font-bold text-3xl md:text-5xl text-[#060C3C] w-80 md:w-[35rem] mx-auto text-center my-5">
        Trusted by company around the world
      </h2>
      <img src={mapImg} alt="" className="mx-auto" />
      <div className="my-10 flex justify-between flex-wrap md:flex-nowrap p-8">
        <div>
          <h3 className="font-bold text-[#060C3C] text-2xl md:text-4xl">
            350+
          </h3>
          <p className="text-[#5D6180] w-44 md:w-64 text-sm md:text-base">
            Over 500k business powered with us
          </p>
        </div>

        <div>
          <h3 className="font-bold text-[#060C3C] text-2xl md:text-4xl">
            750k
          </h3>
          <p className="text-[#5D6180] w-44 md:w-64 text-sm md:text-base">
            Users used our platform in around the world
          </p>
        </div>

        <div>
          <h3 className="font-bold text-[#060C3C] text-2xl md:text-4xl">4.8</h3>
          <p className="text-[#5D6180] w-44 md:w-64 text-sm md:text-base">
            Rating on google play and app store
          </p>
        </div>

        <div>
          <h3 className="font-bold text-[#060C3C] text-2xl md:text-4xl">24+</h3>
          <p className="text-[#5D6180] w-44 md:w-64 text-sm md:text-base">
            More than 30 countries trust our platform
          </p>
        </div>
      </div>
    </section>
  );
}

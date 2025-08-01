import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen relative overflow-hidden text-[#59432D] py-20 max-[599px]:py-10 px-24 max-[1025px]:px-12 max-[599px]:px-6 flex flex-col justify-between"
      style={{
        background: "linear-gradient(to bottom, #F9F5ED, #FAE9C6)",
      }}
    >
      {/* Top Heading */}
      <div className="top flex justify-start z-[2]">
        <h1 className="text-[5vw] max-[1025px]:text-[6vw] max-[599px]:text-[8vw] w-1/2 max-[1025px]:w-3/4 max-[599px]:w-full leading-tight font-bold">
        Real premium Brands made together™
        </h1>
      </div>

      <div className="images absolute top-0 left-0 w-full h-full flex items-center justify-center px-24">
      <img className="w-1/2 h-auto object-contain rotate-12 z-[1]" src="https://res.cloudinary.com/djzddppwb/image/upload/v1753610697/Fruit_Mockup_packaging_ayf0zm.png" alt="" />
      <img className="w-1/2 h-auto object-contain -translate-y-40 -translate-x-10" src="https://res.cloudinary.com/djzddppwb/image/upload/v1753534431/Asset_2_c1cfnt.svg" alt="" />
      </div>

      {/* Bottom Content */}
      <div className="btm flex flex-col gap-10 mt-40 max-[599px]:gap-6">
        {/* Subheading */}
        <div className="top flex items-center justify-center text-center px-4 z-[2]">
          <h1 className="text-[1.5vw] max-[1025px]:text-[2vw] max-[599px]:text-base font-semibold">
          Daily Supplement's of Ingredient's. Our Original Materials helps with:
          </h1>
        </div>

        {/* Circle Icons */}
        <div className="w-full flex items-center justify-center gap-20 flex-wrap max-[599px]:gap-4">
          {[
            { img: "https://us.foursigmatic.com/cdn/shop/files/Enhanced_mental_focus.svg?v=1738313828&width=86", title: "Focus" },
            { img: "https://us.foursigmatic.com/cdn/shop/files/energy.svg?v=1743453491&width=94", title: "Energy" },
            // { img: "https://us.foursigmatic.com/cdn/shop/files/immune-support.svg?v=1743461261&width=92", title: "Immune Support" },
            { img: "https://us.foursigmatic.com/cdn/shop/files/stress-support.svg?v=1743453961&width=87", title: "Stress Support" },
          ].map((svg, i) => (
            <div className="flex flex-col gap-4 items-center justify-center">
              <div
                key={i}
                className="circle rounded-full bg-white h-20 w-20 p-2 flex items-center justify-center text-sm font-semibold shadow-md"
              >
                <img className="w-full h-full object-cover" src={svg.img} alt="" />
              </div>
              <p className="font-[second] text-[1.2vw] font-black">{svg.title}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="btn flex items-center justify-center">
          <a href="#">
            <button className="text-[1.3vw] max-[1025px]:text-[1.8vw] max-[599px]:text-sm cursor-pointer border border-[#FF8100] bg-[#FF8100] text-white hover:bg-white hover:text-[#FF8100] transition duration-300 rounded-full px-6 py-2 max-[599px]:px-4 max-[599px]:py-1">
            Try The Original Bag Materials
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

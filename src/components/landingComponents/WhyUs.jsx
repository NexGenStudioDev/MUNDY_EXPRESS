import React from "react";

const WhyUs = () => {
  return (
    <section className="w-full h-[90vh] max-[1025px]:h-auto relative overflow-hidden bg-[#F9F5ED] text-[#59432D] pt-20 max-[599px]:pt-10 pb-10 px-24 max-[1025px]:px-12 max-[599px]:px-6 flex justify-center items-center">
  {/* Background Image */}
  <img
    className="w-[35%] max-[1025px]:w-[45%] max-[599px]:w-[60%] object-cover absolute -bottom-20 left-0 z-[1]"
    src="//us.foursigmatic.com/cdn/shop/files/Group_46562.png?v=1743097843&width=1034"
    alt=""
  />

  {/* Content Grid */}
  <div className="h-full w-full flex flex-row max-[1025px]:flex-col justify-between px-8 max-[599px]:px-0 gap-10 z-[2]">
    
    {/* Left Text */}
    <div className="flex-1 flex flex-col max-[1025px]:w-full mb-8 max-[599px]:mb-0">
      <h2 className="font-[one] text-[4vw] max-[1025px]:text-[6vw] max-[599px]:text-[8vw] leading-tight">
      Unlike Any other <br /> Packaged Goodies
      </h2>
    </div>

    {/* Right Content */}
    <div className="flex-1 right flex gap-6 max-[599px]:gap-0 max-[1025px]:flex-col w-full">

      {/* First Column */}
      <div className="first w-1/2 max-[1025px]:w-full flex flex-col">
        <div className="head flex flex-col gap-4 pb-6 max-[599px]:pb-2 max-[599px]:gap-0 border-b border-[#59432D]">
          <h1 className="text-[#FF8100] text-[4vw] max-[1025px]:text-[5vw] max-[599px]:text-[7vw]">9 in 10</h1>
          <p className="text-[1.5vw] max-[1025px]:text-[2vw] max-[599px]:text-base leading-tight">
          MundyExpress Buyers say it's the best 
          </p>
        </div>
        <div className="btm py-6 flex flex-col gap-6 max-[599px]:gap-2">
          <div className="flex rounded overflow-hidden text-[1.2vw] max-[1025px]:text-[1.8vw] max-[599px]:text-sm">
            <span className="bg-[#FF8100] text-[#F9F5ED] p-2">#1</span>
            <span className="bg-[#FAE9C8] p-2">
            in Customer Satisfaction 
            </span>
          </div>
          <p className="text-[1.5vw] max-[1025px]:text-[2vw] max-[599px]:text-base leading-tight">
          Ranked by MundyExpress buyers as Healty & Less Costly vs buyers of competitive products.
          </p>
          <p className="italic text-[.9vw] max-[1025px]:text-[1.2vw] max-[599px]:text-xs mt-6 max-[599px]:mt-0">
          Source: Times of India Study of Brand Growth 2025
          </p>
        </div>
      </div>

      {/* Second Column */}
      <div className="second w-1/2 max-[1025px]:w-full">
        <div className="head flex flex-col gap-4 pb-6 max-[599px]:pb-2 max-[599px]:gap-0 border-b border-[#59432D]">
          <h1 className="text-[#FF8100] text-[4vw] max-[1025px]:text-[5vw] max-[599px]:text-[7vw]">94%</h1>
          <p className="text-[1.5vw] max-[1025px]:text-[2vw] max-[599px]:text-base leading-tight">
          of MundyExpress buyers plan on buying again
          </p>
        </div>
        <div className="btm py-6 flex flex-col gap-6">
          <p className="text-[1.5vw] max-[1025px]:text-[2vw] max-[599px]:text-base leading-tight">
          people switch to MundyExpress because of:
          </p>
          <div className="space-y-2 text-[#FF8100] text-[1.2vw] max-[1025px]:text-[1.8vw] max-[599px]:text-sm">
            {["Better Value", "Less Costly", "Easy of Storage"].map((reason, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="rounded-full w-6 h-6 flex items-center justify-center bg-[#FF8100] text-[#F9F5ED] leading-none text-sm">
                  {i + 1}
                </span>
                <p>{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

  );
};

export default WhyUs;

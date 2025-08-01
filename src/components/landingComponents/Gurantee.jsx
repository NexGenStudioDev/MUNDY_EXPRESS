import React from "react";

const Gurantee = () => {
  return (
    <section className="w-full h-[50vh] max-[1025px]:h-auto relative overflow-hidden bg-[#F9F5ED] text-[#59432D] py-10 px-24 max-[1025px]:px-12 max-[599px]:px-4 flex justify-center items-center">
      <div className="box max-[1025px]:p-2 w-full h-full max-[1025px]:h-auto bg-white rounded-4xl flex flex-col items-center justify-center overflow-hidden max-[599px]:gap-6">
        <div className="head flex flex-col gap-6 items-center justify-center text-center">
          <img
            src="//us.foursigmatic.com/cdn/shop/files/60-days.svg?v=1738336145&width=64"
            alt="60 day money-back guarantee"
            className="w-16 h-16 max-[599px]:w-12 max-[599px]:h-12"
          />
          <h1 className="text-[3vw] max-[1025px]:text-[2rem] max-[599px]:text-[1.5rem] leading-tight font-semibold">
            Your satisfaction is 100% guaranteed!
          </h1>
        </div>

        <div className="para w-1/2 max-[1025px]:w-3/4 max-[599px]:w-full text-[1.2vw] max-[1025px]:text-[1rem] max-[599px]:text-[0.9rem] leading-tight text-center flex items-center justify-center py-6">
          <p>
            As fellow seekers, we are proud to share this knowledge and feel it
            will be of immense value. However, if you are not completely
            satisfied, we offer a 60 Day Money-Back Guarantee.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gurantee;

import React from "react";


const Hero = () => {
  return (
    <section className="w-full h-screen text-[#F9F5ED] relative overflow-hidden">
    <div className="background w-full h-full">
      <video
        className="w-full h-full object-cover"
        loop
        muted
        autoPlay
        src="https://res.cloudinary.com/djzddppwb/video/upload/v1753532256/bg_yq57ud.mp4"
      ></video>
    </div>
  
    <div className="overlay absolute z-10 w-full h-full inset-0 backdrop-blur-sm flex flex-col items-center justify-center">
      <div className="top flex flex-col items-center px-4 pt-20 x-[599px]:pt-40 text-center">
        {/* Stars + Text */}
        <div className="flex items-center gap-2 text-[1vw] max-[1025px]:text-[2vw] max-[599px]:text-sm">
          <div className="stars flex items-center">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
          <p>100,000+ Five Star Rating</p>
        </div>
  
        {/* Main Heading */}
        <h1 className="text-[4vw] max-[1025px]:text-[6vw] max-[599px]:text-[8vw] w-[60%] max-[1025px]:w-[80%] max-[599px]:w-full mt-4 leading-tight capitalize">
        Get Your Daily Materials without any hassle 
        </h1>
  
        {/* Subheading */}
        <p className="text-[1.3vw] max-[1025px]:text-[2vw] max-[599px]:text-sm mt-2">
        Original Market Materials. Over 1 Million Bags Sold.
        </p>
  
        {/* Buttons */}
        <div className="btns flex flex-wrap items-center justify-center gap-4 mt-6">
          <a href="#">
            <button className="text-[1.3vw] max-[1025px]:text-[2vw] max-[599px]:text-sm border border-[#FF8100] bg-[#FF8100] hover:bg-white hover:text-[#FF8100] duration-300 rounded-full px-12 py-2 max-[599px]:px-6 max-[599px]:py-2">
            Try Package 
            </button>
          </a>
          <a href="#">
            <button className="text-[1.3vw] max-[1025px]:text-[2vw] max-[599px]:text-sm border border-white hover:bg-white hover:text-black duration-300 rounded-full px-12 py-2 max-[599px]:px-6 max-[599px]:py-2">
            Shop Product
            </button>
          </a>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default Hero;

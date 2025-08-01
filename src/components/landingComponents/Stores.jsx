import React from "react";

const images = [
  "https://cdn.shopify.com/s/files/1/0739/9341/files/Whole_Foods.svg?v=1740419627",
  "https://cdn.shopify.com/s/files/1/0739/9341/files/Sprouts_8ca3e1ff-d23b-4728-abd6-52cbc24278bc.svg?v=1740419628",
  "https://cdn.shopify.com/s/files/1/0739/9341/files/Vector_f09ad610-30e8-442a-90d6-0b4694fac9f0.svg?v=1740419627",
];

const Stores = () => {
  return (
    <section className="w-full h-[50vh] max-[1025px]:h-auto relative overflow-hidden bg-[#F9F5ED] text-[#59432D] py-10 px-24 max-[1025px]:px-12 max-[599px]:px-4 flex justify-center items-center">
  <div className="box w-full h-full bg-white rounded-[2rem] flex flex-col gap-6 items-center justify-center overflow-hidden py-8 max-[1025px]:py-6 max-[599px]:py-4">
    
    {/* Headings */}
    <div className="head text-center px-4">
      <h1 className="text-[2vw] max-[1025px]:text-[3vw] max-[599px]:text-[5vw] leading-tight">
        Find Four Sigmatic At Thousands of U.S. Stores
      </h1>
      <h3 className="text-[1.5vw] max-[1025px]:text-[2vw] max-[599px]:text-[4vw] mt-2">
        Hint: Check the coffee aisles ☕
      </h3>
    </div>

    {/* Store Logos */}
    <div className="images w-full flex flex-wrap items-center justify-center gap-6 md:gap-10 py-6 px-4">
      {images.map((image, idx) => (
        <img
          key={idx}
          src={image}
          alt={`Store logo ${idx + 1}`}
          className="h-[50px] max-[599px]:h-[40px] w-auto object-contain"
        />
      ))}
    </div>

    {/* Button */}
    <a href="#">
      <button className="text-[1.3vw] max-[1025px]:text-[1.8vw] max-[599px]:text-sm cursor-pointer border border-[#59432D] bg-white hover:bg-[#59432D] hover:text-[#F9F5ED] transition duration-300 rounded-full px-6 py-2 max-[599px]:px-4 max-[599px]:py-1">
        Find A Store Near You
      </button>
    </a>
  </div>
</section>

  );
};

export default Stores;

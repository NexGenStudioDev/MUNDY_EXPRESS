import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";

const testimonialsData = [
  {
    name: "Nilan Karan ",
    image:
      "https://res.cloudinary.com/djzddppwb/image/upload/v1753611196/3_ulnqxg.jpg",
    title: "Classis user of MundyExpress, Chef and Cook by heart.",
    quote: `"My Go to product for daily use and keep going"`,
  },
  // Add more testimonials here as needed
  {
    name: "Francis Kimin",
    image:
      "https://res.cloudinary.com/djzddppwb/image/upload/v1753611197/2_troars.jpg",
    title: "Classis user of MundyExpress, Traveler and Tech-Businessman.",
    quote: `"As i am always on the run i need to keep up with the ever growing energy usage and this product helps with that alot"`,
  },
  {
    name: "Allison Chome",
    image:
      "https://res.cloudinary.com/djzddppwb/image/upload/v1753611197/1_hsmcbt.jpg",
    title: "Premium user of MundyExpress, Track and Field.",
    quote: `My Mother used this product a lot and this is by far the best thing to get for anything related to food"`,
  },
];

const Testimonials = () => {
  const swiperRef = useRef(null);

  return (
    <section className="w-full relative bg-[#FAE9C6] px-24 py-10 max-[1025px]:px-12 max-[599px]:px-4">
  <img
    className="w-[40%] max-[1025px]:w-[50%] max-[599px]:w-[70%] rotate-[90deg] h-full object-contain absolute right-0 top-0 z-0"
    src="https://us.foursigmatic.com/cdn/shop/files/mushroom-legacy-icon-2.png?v=1737471691&width=1063"
    alt=""
  />

  {/* Heading */}
  <div className="heading relative z-10">
    <h1 className="text-[3vw] max-[1025px]:text-[4vw] max-[599px]:text-[6vw] leading-tight">
      Trusted by Experts and Performers
    </h1>
  </div>

  {/* Swiper Slider */}
  <Swiper
    spaceBetween={30}
    slidesPerView={2.1}
    breakpoints={{
      0: { slidesPerView: 1 },
      599: { slidesPerView: 2},
      1025: { slidesPerView: 2.1 }
    }}
    loop={true}
    grabCursor={true}
    modules={[Navigation]}
    onSwiper={(swiper) => {
      swiperRef.current = swiper;
    }}
    className="mySwiper w-full h-auto mt-10 relative z-10"
  >
    {testimonialsData.map((testimonial, idx) => (
      <SwiperSlide key={idx}>
        <div className="w-full flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-md">
          {/* Image */}
          <div className="w-full md:w-1/2 h-64 md:h-full overflow-hidden flex items-center justify-center">
            <img
              className="w-full h-64 object-cover"
              src={testimonial.image}
              alt={testimonial.name}
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 flex flex-col justify-between p-6">
            <div>
              <h3 className="text-[1.5vw] max-[1025px]:text-[2vw] max-[599px]:text-[4vw] text-[#59432D]">
                {testimonial.name}
              </h3>
              <p className="text-[1vw] max-[1025px]:text-[1.3vw] max-[599px]:text-sm text-[#B7A38E] mt-1">
                {testimonial.title}
              </p>
            </div>
            <div className="mt-6">
              <p className="text-[1.1vw] max-[1025px]:text-[1.4vw] max-[599px]:text-sm text-[#59432D]">
                {testimonial.quote}
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}

    {/* Navigation Buttons */}
    <div className="nav-btn w-full mt-20 relative z-10">
      <button
        className="blaze-prev !bg-transparent absolute bottom-0 -ml-14 left-[calc(50%-10px)] md:left-1/2 max-[599px]:-ml-10"
        type="button"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <span className="block w-8 h-8 md:w-10 md:h-10 cursor-pointer" aria-label="arrow">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
            <path
              d="M36.6667 19.9998H3.33332M3.33332 19.9998C3.33332 19.9998 8.66041 18.6508 11.4062 17.0236C14.1521 15.3965 17.3958 11.6665 17.3958 11.6665M3.33332 19.9998C3.33332 19.9998 8.66041 21.3489 11.4062 22.976C14.1521 24.6032 17.3958 28.3332 17.3958 28.3332"
              stroke="#59432D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <button
        className="blaze-next !bg-transparent absolute bottom-0 -mr-14 right-[calc(50%+10px)] md:right-1/2 max-[599px]:-mr-10 rotate-180"
        type="button"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <span className="block w-8 h-8 md:w-10 md:h-10 cursor-pointer" aria-label="arrow">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
            <path
              d="M36.6667 19.9998H3.33332M3.33332 19.9998C3.33332 19.9998 8.66041 18.6508 11.4062 17.0236C14.1521 15.3965 17.3958 11.6665 17.3958 11.6665M3.33332 19.9998C3.33332 19.9998 8.66041 21.3489 11.4062 22.976C14.1521 24.6032 17.3958 28.3332 17.3958 28.3332"
              stroke="#59432D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
    </div>
  </Swiper>

  {/* CTA Button */}
  <div className="btn flex items-center justify-center mt-10 relative z-10">
    <a href="#">
      <button className="text-[1.3vw] max-[1025px]:text-[1.8vw] max-[599px]:text-sm cursor-pointer border border-[#FF8100] bg-[#FF8100] text-white hover:bg-white hover:text-[#FF8100] transition duration-300 rounded-full px-6 py-2 max-[599px]:px-4 max-[599px]:py-1">
        Shop All Products
      </button>
    </a>
  </div>
</section>

  );
};

export default Testimonials;

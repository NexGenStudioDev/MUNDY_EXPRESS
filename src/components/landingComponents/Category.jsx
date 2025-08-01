import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const cardsData = [
  {
    label: "Best Seller",
    labelClass: "bg-[#59432D] text-[#F9F5ED]",
    showLabel: true,
    img: "https://res.cloudinary.com/djzddppwb/image/upload/v1753610304/Product_Mockup1_ocld9q.png",
    alt: "Test Product",
    title: "Test Product",
    link: "/product/6885ec06620f543197d12c7e",
  },
  {
    label: "",
    labelClass: "",
    showLabel: false,
    img: "https://res.cloudinary.com/djzddppwb/image/upload/v1753610303/Product_Mockup2_semiam.png",
    alt: "masala",
    title: "Masala",
    link: "/product/masala",
  },
  {
    label: "Recommended",
    labelClass: "bg-[#76C0F2] text-white",
    showLabel: true,
    img: "https://res.cloudinary.com/djzddppwb/image/upload/v1753610304/Product_Mockup3_ffjiwx.png",
    alt: "Dairy",
    title: "Dairy",
    link: "/product/dairy",
  },
  {
    label: "",
    labelClass: "bg-[#76C0F2] text-white",
    showLabel: true,
    img: "https://res.cloudinary.com/djzddppwb/image/upload/v1753610308/Product_Mockup4_fv4a42.png",
    alt: "Vegis",
    title: "Vegis",
    link: "/product/vegis",
  },
];

const Category = () => {
  return (
    <section className="w-full h-screen max-[599px]:h-auto bg-[#F9F5ED] text-[#59432D] flex flex-col items-center justify-center py-12 max-[599px]:py-10">
  {/* Title */}
  <div className="title text-center px-4">
    <p className="font-[second] text-[1.1vw] max-[1025px]:text-[2vw] max-[599px]:text-sm text-[#FF8100] font-semibold uppercase">
    Find Your Package of Best Product 
    </p>
    <h1 className="text-[3vw] max-[1025px]:text-[5vw] max-[599px]:text-[7vw] font-bold mt-2">
    #1 Quality Products For
    </h1>
  </div>

  {/* Cards Section */}
  <div className="cards w-full my-10 px-4 md:px-32 max-[599px]:my-6">
    <Swiper
      spaceBetween={window.innerWidth < 640 ? 30 : 0}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      loop={true}
      autoplay={true}
      className="!px-2 md:!px-0"
    >
      {cardsData.map((card, idx) => (
        <SwiperSlide key={idx}>
          <div className="card overflow-hidden flex flex-col justify-between relative group h-full rounded-2xl p-4 max-[599px]:p-0">
            {card.showLabel && (
              <span
                className={`absolute z-10 top-6 left-6 text-[1vw] max-[1025px]:text-[1.6vw] max-[599px]:text-xs font-[second] font-semibold px-3 py-1 rounded-full ${card.labelClass}`}
              >
                {card.label}
              </span>
            )}
            <div className="h-auto overflow-hidden rounded-2xl mb-4">
              <Link to={card.link}>
                <img
                  src={card.img}
                  alt={card.alt}
                  className="w-full h-full object-cover hover:scale-110 transition-all duration-300"
                />
              </Link>
            </div>
            <div className="flex flex-col flex-1 justify-end">
              <div className="flex items-center justify-between">
                <span className="text-[2vw] max-[1025px]:text-[2.6vw] max-[599px]:text-base font-semibold">
                  {card.title}
                </span>
                <Link
                  to={card.link}
                  className="text-[1.2vw] max-[1025px]:text-[1.8vw] max-[599px]:text-sm underline hover:no-underline transition-all duration-300"
                >
                  Explore more
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

  {/* Button */}
  <Link to="/products">
    <button className="text-[1.3vw] max-[1025px]:text-[2vw] max-[599px]:text-sm cursor-pointer border border-[#FF8100] bg-[#FF8100] text-white hover:bg-white hover:text-[#FF8100] transition duration-300 rounded-full px-6 py-2 max-[599px]:px-4 max-[599px]:py-1">
      Shop All Products
    </button>
  </Link>
</section>

  );
};

export default Category;

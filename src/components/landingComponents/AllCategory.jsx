import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Dummy data for category products
const categoryProducts = {
  "Dry Fruits": [
    {
      image: "https://res.cloudinary.com/djzddppwb/image/upload/v1753610304/Product_Mockup1_ocld9q.png",
      title: "Almonds",
      price: "$10.00",
      link: "/product/Almond",
      buttonText: "Buy Now",
    },
    {
      image: "https://res.cloudinary.com/djzddppwb/image/upload/v1753610304/Product_Mockup1_ocld9q.png",
      title: "Cashews",
      price: "$12.00",
      link: "/product/",
      buttonText: "Buy Now",
    },
  ],
  "Vegetables": [
    {
      image: "https://res.cloudinary.com/djzddppwb/image/upload/v1753610308/Product_Mockup4_fv4a42.png",
      title: "Carrots",
      price: "$2.00",
      link: "/product/",
      buttonText: "Shop Now",
    },
    {
      image: "https://res.cloudinary.com/djzddppwb/image/upload/v1753610308/Product_Mockup4_fv4a42.png",
      title: "Broccoli",
      price: "$3.00",
      link: "/product/",
      buttonText: "Shop Now",
    },
  ],
  "Dairy Items": [
    {
      image: "https://res.cloudinary.com/djzddppwb/image/upload/v1753610304/Product_Mockup3_ffjiwx.png",
      title: "Milk",
      price: "$1.50",
      link: "/product/",
      buttonText: "Order Now",
    },
    {
      image: "https://res.cloudinary.com/djzddppwb/image/upload/v1753610304/Product_Mockup3_ffjiwx.png",
      title: "Cheese",
      price: "$4.00",
      link: "/product/",
      buttonText: "Order Now",
    },
  ],
  "Masalas": [
    {
      image: "https://res.cloudinary.com/djzddppwb/image/upload/v1753610303/Product_Mockup2_semiam.png",
      title: "Garam Masala",
      price: "$5.00",
      link: "/product/",
      buttonText: "Add to Cart",
    },
    {
      image: "https://res.cloudinary.com/djzddppwb/image/upload/v1753610303/Product_Mockup2_semiam.png",
      title: "Turmeric",
      price: "$3.50",
      link: "/product/",
      buttonText: "Add to Cart",
    },
  ],
};

const AllCategory = () => {
  return (
    <section
      id="shop"
      className="w-full bg-[#F9F5ED] text-[#59432D] flex max-[599px]:flex-col px-24 py-20 max-[1025px]:px-12 max-[1025px]:py-16 max-[599px]:px-4 max-[599px]:py-12"
      style={{ background: "linear-gradient(to bottom, #F9F5ED, #FAE9C6)" }}
    >
      {/* Left Side */}
      <div className="left w-1/2 max-[1025px]:w-full relative mb-8 max-[1025px]:mb-12">
        <h1 className="text-[6vw] max-[1025px]:text-[8vw] max-[599px]:text-[10vw] w-1/2 max-[1025px]:w-full leading-tight relative z-10">
          All Category
        </h1>
        <img
          className="w-[60%] aspect-square object-contain absolute -left-32 top-20 z-0 max-[1025px]:w-[50%] max-[1025px]:top-10 max-[599px]:w-[70%] max-[599px]:left-0 max-[599px]:top-0"
          src="https://us.foursigmatic.com/cdn/shop/files/mushroom-legacy-icon-2.png?v=1737471691&width=1063"
          alt=""
        />
      </div>

      {/* Right Side — Category Cards */}
      <div className="right w-1/2 max-[1025px]:w-full flex flex-wrap gap-10 max-[599px]:gap-6">
        {["Dry Fruits", "Vegetables", "Dairy Items", "Masalas"].map((cat, idx) => (
          <div key={idx} className="category-card w-[45%] max-[1025px]:w-full">
            <p className="text-lg max-[599px]:text-2xl font-semibold mb-2 z-10 relative">{cat}</p>
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              loop
              grabCursor
              className="w-full h-full mt-4"
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 1 },
                1024: { slidesPerView: 1 },
              }}
            >
              {categoryProducts[cat]?.map((product, i) => (
                <SwiperSlide key={i}>
                  <div className="flex flex-col gap-4">
                    <div className="img h-auto w-full bg-[#F3E7CF] rounded-2xl overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src={product.image}
                        alt={product.title}
                      />
                    </div>
                    <div className="price flex flex-col gap-1">
                      <h4 className="text-[1.2vw] max-[1025px]:text-lg max-[599px]:text-base">
                        {product.title}
                      </h4>
                      <p className="text-[1.2vw] max-[1025px]:text-lg max-[599px]:text-base">{product.price}</p>
                    </div>
                    <a href={product.link || "#"}>
                      <button className="text-[1.3vw] max-[1025px]:text-[1.8vw] max-[599px]:text-base w-full cursor-pointer border border-[#FF8100] bg-[#FF8100] text-white hover:bg-white hover:text-[#FF8100] transition duration-300 rounded-full px-6 py-2 max-[599px]:py-3">
                        {product.buttonText || "Bid Now"}
                      </button>
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllCategory;

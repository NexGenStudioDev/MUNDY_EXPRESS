import React from "react";
import { FaInstagram, FaYoutube, FaTiktok, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#F9F5ED] text-[#4e3c2f] px-6 md:px-24 pb-10 max-[1025px]:px-12 max-[599px]:px-4">
      {/* Logo */}
      <div className="logo w-full flex items-center justify-center pb-6">
        <img
          className="w-[55%] h-auto object-contain max-[1025px]:w-3/5 max-[599px]:w-4/5"
          src="https://res.cloudinary.com/djzddppwb/image/upload/v1753534431/Asset_2_c1cfnt.svg"
          alt="Logo"
        />
      </div>

      {/* Main content */}
      <div className="w-full flex flex-col md:flex-row justify-between items-start gap-10 max-[599px]:gap-6">
        {/* Left Section */}
        <div className="md:w-1/3 flex flex-col gap-6 justify-start max-[1025px]:w-full max-[599px]:gap-4">
          <h4 className="text-[.9vw] max-[1025px]:text-base max-[599px]:text-sm font-semibold font-[second]">
            10% OFF YOUR FIRST ORDER
          </h4>

          <div className="flex border-b border-[#4e3c2f] items-center">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-transparent outline-none text-lg placeholder:text-[1.5vw] placeholder:text-[#4e3c2f] w-full max-[1025px]:placeholder:text-base max-[599px]:placeholder:text-sm"
            />
            <span
              className="block w-10 h-10 cursor-pointer rotate-180"
              aria-label="arrow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M36.6667 19.9998H3.33332M3.33332 19.9998C3.33332 19.9998 8.66041 18.6508 11.4062 17.0236C14.1521 15.3965 17.3958 11.6665 17.3958 11.6665M3.33332 19.9998C3.33332 19.9998 8.66041 21.3489 11.4062 22.976C14.1521 24.6032 17.3958 28.3332 17.3958 28.3332"
                  stroke="#59432D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-8 pt-4 text-[1.5vw] max-[1025px]:text-xl max-[599px]:text-lg">
            <FaInstagram />
            <FaYoutube />
            {/* <FaTiktok /> */}
            <FaLinkedinIn/>
            <FaFacebookF />
          </div>

          {/* Country Selector */}
          <div className="pt-6 text-sm flex items-center max-[599px]:text-xs">
            India{" "}
            <span className="ml-1 text-[1.5vw] max-[1025px]:text-xl max-[599px]:text-lg">
              <MdOutlineKeyboardArrowDown />
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="w-full md:w-[45%] grid grid-cols-2 md:grid-cols-4 gap-6 text-sm max-[1025px]:grid-cols-2 max-[1025px]:gap-4 max-[599px]:grid-cols-2 max-[599px]:gap-6">
          <div>
            <h5 className="font-bold mb-4 font-[second] text-base max-[599px]:text-lg">
              SHOP
            </h5>
            <ul className="space-y-4 max-[599px]:space-y-2 text-xs max-[599px]:text-sm">
              <li>Coffees & Creamers</li>
              <li>Proteins</li>
              <li>Supplements</li>
              <li>Shop All</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4 font-[second] text-base max-[599px]:text-lg">
              LEARN
            </h5>
            <ul className="space-y-4 max-[599px]:space-y-2 text-xs max-[599px]:text-sm">
              <li>Product Quality</li>
              <li>About Us</li>
              <li>Blog</li>
              <li>Press</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4 font-[second] text-base max-[599px]:text-lg">
              SUPPORT
            </h5>
            <ul className="space-y-4 max-[599px]:space-y-2 text-xs max-[599px]:text-sm">
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>Shipping & Returns</li>
              <li>Account</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4 font-[second] text-base max-[599px]:text-lg">
              INQUIRIES
            </h5>
            <ul className="space-y-4 max-[599px]:space-y-2 text-xs max-[599px]:text-sm">
              <li>Partners Zone</li>
              <li>Affiliate Program</li>
              <li>Wholesale</li>
              <li>Store Locator</li>
              <li>Refer A Friend</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-[1vw] text-[#4e3c2f] mt-10 max-[599px]:mt-4 w-full flex pt-6 max-[1025px]:flex-col max-[1025px]:text-sm max-[1025px]:gap-4 max-[599px]:text-xs max-[599px]:gap-2">
        <div className="w-[55%] max-[1025px]:w-full">
          <p>2025 MundyExpress.All rights reserved.</p>
          <p className="mt-1 max-[599px]:mt-2">
            Privacy Policy | Terms & Conditions | Accessibility Statement | Do
            Not Sell My Personal Information
          </p>
        </div>
        <p className="w-[45%] mt-4 leading-tight max-[1025px]:w-full max-[1025px]:mt-2 max-[599px]:mt-3 max-[599px]:leading-snug">
          The statements made on this website have not been evaluated by the
          Food Safety and Standards Authority of India (FSSAI). The products
          sold on this website are not intended to diagnose, treat, cure, or
          prevent any disease. The information provided on this website or by
          this company is for general informational purposes only and is not a
          substitute for professional medical advice, diagnosis, or treatment.
          Always consult a qualified healthcare practitioner before starting any
          new dietary supplement, product, or health program.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

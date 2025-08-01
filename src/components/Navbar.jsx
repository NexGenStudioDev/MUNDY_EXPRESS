import React, { useEffect, useRef, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline, IoLocationOutline, IoSearch } from "react-icons/io5";
import { gsap } from "gsap";
import Search from "./Search";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef(null);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scroll Down – Hide Navbar
        gsap.to(navRef.current, {
          y: "-100%",
          duration: 0.5,
          ease: "power2.out",
        });
      } else {
        // Scroll Up – Show Navbar
        gsap.to(navRef.current, {
          y: "0%",
          duration: 0.5,
          ease: "power2.out",
        });
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const login = localStorage.getItem("isLoggedIn");

  return (
    <>
      <header
        className="w-full overflow-hidden fixed top-0 left-0 z-[999]"
        ref={navRef}
      >
        <nav className="w-full flex flex-col">
          {/* Top banner */}
          <div className="top w-full flex items-center justify-center bg-[#59432D] text-[#F9F5ED] py-2 text-sm max-[599px]:text-xs">
            Welcome to Mundi Express
          </div>

          {/* Main Nav */}
          <div
            className="main-nav w-full flex items-center justify-between bg-[#F9F5ED] text-[#59432D] px-20 py-6 relative
      max-[1025px]:px-10  max-[599px]:items-center max-[599px]:gap-4 max-[599px]:py-4 max-[599px]:px-6"
          >
            {/* Left links */}
            <div className="links font-[second] font-black flex items-center gap-10 text-[1.3vw] max-[1025px]:text-[2vw] max-[599px]:text-base max-[599px]:gap-4">
              <a href="#shop">Shop</a>
              <a href="#about">About</a>
            </div>

            {/* Center Logo */}
            <Link
              to="/"
              className="logo flex items-center justify-center max-[599px]:self-center mr-16 max-[599px]:mr-10"
            >
              <img
                className="object-contain w-32 max-[1025px]:w-20 max-[599px]:w-20"
                src="https://res.cloudinary.com/djzddppwb/image/upload/v1753534431/Asset_2_c1cfnt.svg"
                alt="Logo"
              />
            </Link>

            {/* Right auth/icons */}
            <div className="auth flex items-center gap-6 max-[599px]:gap-4 text-[1.7vw] max-[1025px]:text-[2.2vw] max-[599px]:text-xl ">
              <IoSearch
                className="cursor-pointer"
                onClick={() => setShowSearch(true)}
              />
              {/* {showSearch && <Search />} */}
              <Link to={login ? "/seller/all-order" : "/login"}>
                <CgProfile className="cursor-pointer" />
              </Link>
            </div>
          </div>
        </nav>
      </header>
      {showSearch && (
        <Search showSearch={showSearch} onClose={() => setShowSearch(false)} />
      )}
    </>
  );
};

export default Navbar;

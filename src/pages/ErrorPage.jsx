import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, delay: 0.5, duration: 1 }
    );

    gsap.fromTo(
      buttonRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, delay: 1, duration: 1, ease: "back.out(1.7)" }
    );
  }, []);

  return (
    <div className="h-screen w-full bg-[#fdf9f2] font-[one] flex flex-col justify-center items-center text-center px-4">
      <div ref={textRef}>
        <h1 className="text-5xl md:text-6xl font-bold text-[#4e3c2f] mb-4">
          Oops! Page not found
        </h1>
        <p className="text-[#4e3c2f] text-lg mb-8">
          Looks like you took a wrong turn in the forest 🍄
        </p>
      </div>

      <Link to="/">
        <button
          ref={buttonRef}
          className="bg-[#f97316] cursor-pointer text-white font-semibold py-3 px-6 rounded-full hover:bg-[#ea630a] transition"
        >
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;

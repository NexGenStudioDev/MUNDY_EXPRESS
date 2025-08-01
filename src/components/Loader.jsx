
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "./CountUp";

const images = [
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1734688143752-9ce8984aacf9?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1605460380650-e739914e0e4f?q=80&w=1390&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Loader = () => {
  const loader = useRef(null);
  const line = useRef(null);
  const text = useRef([]);
  const anim = useRef(null);
  const img = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 500);

    const tl = gsap.timeline({
      defaults :{
        willChange : "transform"
      }
    });

    tl.to(anim.current,{
      width : "100%",
      duration : 5,
      ease : "none",
      repeat : -1
    })
    .to(line.current,{
      xPercent : 100,
      duration :.5
    },"b")
    .to(text.current,{
      y : -10,
      opacity : 0
    },"b")
    .to(img.current,{
      opacity : 0,
    },"b")
    .to(
      loader.current,
      {
        opacity: 0,
        duration: 0.5,
        willChange: "opacity",
        display: "none",
        ease: "none",
      },"a"
    )

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={loader}
      className="w-full h-screen bg-white text-black flex items-center justify-between flex-col fixed top-0 left-0 z-[99999]"
    >
      <div
        ref={line}
        className="w-[95%] mt-2 h-[.3%] bg-black/10 rounded-full relative overflow-hidden"
      >
        <span ref={anim} className="anim absolute top-0 left-0 w-0 h-full bg-black"></span>
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-full flex items-center justify-center ">
        <div className="flex w-[15%] h-[40%] flex-col items-center justify-center">
          <img
          ref={img}
            src={images[currentImage]}
            alt="Loader"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div
         ref={text}
        className="w-full flex items-center justify-between px-6 py-2 font-[bold] text-zinc-700"
      >
        <h1>Cristina</h1>
        <CountUp to={100} from={0} separator="," direction="up" duration={5} />
        <h1>Gómez</h1>
      </div>
    </section>
  );
};

export default Loader;

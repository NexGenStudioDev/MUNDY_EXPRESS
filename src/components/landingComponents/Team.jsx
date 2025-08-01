import React from "react";

const teamData = [
    {
      name: "Aditya",
      role: "Leader / Designer",
      responsibilities: [
        "Create UI/UX designs and prototypes",
        "Work on branding and visual identity",
        "Collaborate with frontend for seamless implementation",
      ],
      image: {
        src: "https://randomuser.me/api/portraits/men/45.jpg", // Replace with Aditya's actual image if available
        alt: "Designer",
      },
    },
  {
    name: "Sameer Khan",
    role: "Frontend Developer",
    responsibilities: [
      "Handle all frontend development tasks",
      "Build and maintain user interfaces",
      "Integrate APIs and ensure responsive design",
    ],
    image: {
      src: "https://randomuser.me/api/portraits/men/32.jpg", // Replace with your actual image if available
      alt: "Frontend Developer",
    },
  },
  {
    name: "Abhisekh Gupta",
    role: "Backend Developer",
    responsibilities: [
      "Develop and maintain backend services",
      "Design and manage databases",
      "Ensure API performance and security",
    ],
    image: {
      src: "https://randomuser.me/api/portraits/men/65.jpg", // Replace with Abhidekh's actual image if available
      alt: "Backend Developer",
    },
  },
];

const Team = () => {
  return (
    <section
    className="pt-40 max-[599px]:py-10 pb-20  px-6 max-[1025px]:px-12 max-[599px]:px-4"
    style={{
      background: "linear-gradient(to bottom, #FAE9C6, #F9F5ED)",
    }}
  >
    <h2 className="text-3xl md:text-5xl max-[599px]:text-2xl font-semibold text-center text-[#4e3c2f] mb-20 max-[599px]:mb-12">
    MundyExpress Legacy Beyond a Decade
    </h2>
  
    <div className="relative flex flex-col md:flex-row flex-wrap justify-center items-center gap-40 max-[1025px]:gap-20 max-[599px]:gap-12">
      {/* Optional Dotted Curve SVG (desktop only) */}
      {/* 
      <svg
        className="hidden md:block absolute -top-40 left-0 w-full h-44 z-0"
        viewBox="0 0 1200 140"
        preserveAspectRatio="none"
      >
        <path
          d="M0,100 Q300,0 600,100 T1200,100"
          stroke="#4e3c2f"
          strokeWidth="3"
          strokeDasharray="8 8"
          fill="none"
        />
      </svg>
      */}
  
      {/* Timeline Blocks */}
      {teamData.map((block, idx) => (
        <div
          key={idx}
          className="relative z-10 flex flex-col items-start max-[1025px]:items-center text-center md:text-left"
        >
          <div className="bg-[#f97316] text-white px-5 py-2 rounded-full font-semibold text-lg mb-4 shadow-md max-[599px]:text-base max-[599px]:px-4">
            {block.role}
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-[#4e3c2f] mb-2 max-[599px]:text-lg">
            {block.name}
          </h3>
          <ul className="list-disc list-inside text-[#4e3c2f] mt-2 space-y-1 text-base md:text-sm max-w-xs max-[599px]:text-sm max-[599px]:max-w-[90%]">
            {block.responsibilities.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
  
  );
};

export default Team;

import React from "react";
// import { X } from "lucide-react"; // Optional: replace with SVG or plain "×"

const Search = ({ showSearch, onClose }) => {
  const popularSearches = [
    "Mushroom Coffee",
    "Protein",
    "Supplements",
    "Tea",
    "Pods",
    "Lattes",
    "Creamer",
  ];

  if (!showSearch) return null;

  return (
    <div className="fixed inset-0 z-[99999999] backdrop-blur-sm bg-[#F4EFEA]/90 flex justify-end">
      <div className="w-full max-w-md h-full p-6 pt-8 relative shadow-xl bg-[#F8F4EC] rounded-l-2xl">
        <button
          className="absolute top-5 right-5 text-[#4B2E1B] hover:scale-110 transition"
          onClick={onClose}
          aria-label="Close search"
        >
          {/* <X size={24} /> */}
          x
        </button>

        <h2 className="text-xl font-semibold text-[#4B2E1B]">Search</h2>

        {/* Search Input */}
        <div className="flex items-center mt-4 border-b border-[#4B2E1B] pb-2">
          <svg
            className="text-[#4B2E1B] mr-2"
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 0 24 24"
            width="20"
            fill="currentColor"
          >
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none flex-1 text-[#4B2E1B] placeholder:text-[#998675]"
          />
        </div>

        {/* Popular Searches */}
        <div className="mt-6">
          <h3 className="text-md font-semibold text-[#4B2E1B] mb-3">
            Popular Searches
          </h3>
          <ul className="space-y-2">
            {popularSearches.map((item, index) => (
              <li
                key={index}
                className="text-[#4B2E1B] hover:underline cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Search;

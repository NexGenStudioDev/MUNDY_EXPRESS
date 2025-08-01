import React from "react";
import { Link } from "react-router-dom";

const SellerNav = () => {
  return (
    <>
      <header className="flex max-[599px]:flex-wrap justify-between items-center p-4 border-b border-[#e0d7c6] bg-[#F9F5ED] text-[#5c432d] font-[one]">
        {/* Title */}
        <div className="flex items-center gap-4 w-full max-[599px]:justify-center max-[1025px]:w-1/2">
          <span className="text-[1.5vw] font-semibold max-[1025px]:text-[2.2vw] max-[599px]:text-[4vw]">
            Seller Dashboard ⓘ
          </span>
        </div>

        {/* Logo */}
        <div className="w-full max-[1025px]:w-auto flex justify-center max-[599px]:my-2">
          <img
            src="https://res.cloudinary.com/djzddppwb/image/upload/v1753534431/Asset_2_c1cfnt.svg"
            alt="Mundy Express"
            className="h-12 md:h-16"
          />
        </div>

        {/* Search */}
        <div className="relative w-full max-w-xs max-[599px]:mt-4 max-[599px]:mx-auto">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-full border border-[#ccc] bg-[#f6f1e7] text-sm"
          />
          <span className="absolute right-4 top-2.5 text-[#666]">
            <svg
              className="text-[#4B2E1B]"
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 0 24 24"
              width="20"
              fill="currentColor"
            >
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </span>
        </div>
      </header>

      {/* Navigation */}
      <div className="flex flex-col gap-3 px-4 py-4 border-b border-[#e0d7c6] font-[one]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-2">
          <h2 className="text-[1.3vw] max-[1025px]:text-[2.5vw] max-[599px]:text-[4vw] font-bold text-orange-600 cursor-pointer">
            Manage Orders
          </h2>
          <div className="text-orange-600 font-semibold text-[1.2vw] max-[1025px]:text-[2vw] max-[599px]:text-[3.5vw] cursor-pointer">
            Dashboard ➝
          </div>
        </div>

        <nav className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-3">
          <div className="flex flex-wrap gap-4 text-sm mt-1">
            {[
              { to: "/seller/all-order", label: "All orders" },
              { to: "/seller/pending", label: "Pending" },
              { to: "/seller/canceled", label: "Canceled" },
              { to: "/seller/bid", label: "Bid" },
              { to: "/seller/shipped", label: "Shipped" },
              { to: "/", label: "Main Page" }, // Added Main Page link
            ].map(({ to, label }) => {
              const currentPath = window.location.pathname.replace(/\/$/, "");
              const linkPath = to.replace(/\/$/, "");
              const isActive = currentPath === linkPath;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`${
                    isActive
                      ? "border-b-2 border-black opacity-100"
                      : "opacity-50"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
          <Link
            to="/seller/add-item"
            className="cursor-pointer text-sm text-orange-600 font-medium"
          >
            Add Items <span className="rotate-90 inline-block">{">"}</span>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default SellerNav;

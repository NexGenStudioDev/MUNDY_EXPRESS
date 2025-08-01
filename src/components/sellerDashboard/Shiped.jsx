import React from "react";
import SellerNav from "../SellerNav";

const Shiped = () => {
  return (
    <>
      <SellerNav />
      {/* Main Content */}
      <main className="flex flex-col md:flex-row p-4 md:p-6 gap-4 md:gap-6 font-[one]">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 bg-[#fdf9f0] rounded-2xl p-4 border border-[#e0d7c6]">
          <h3 className="font-bold mb-2 text-[1.2vw] max-[1025px]:text-[1.8vw] max-[599px]:text-[4vw]">
            Refine by:
          </h3>
          <div className="mb-4">
            <p className="text-xs font-semibold mb-1">Ship by date</p>
            <div className="bg-[#ece5d9] h-16 rounded-md" />
          </div>
          <div className="mb-4">
            <p className="text-xs font-semibold mb-1">Sales</p>
            <div className="bg-[#ece5d9] h-16 rounded-md" />
          </div>
          <div>
            <p className="text-xs font-semibold mb-1">Shipping Service</p>
            <div className="bg-[#ece5d9] h-8 rounded-md" />
          </div>
        </aside>

        {/* Orders Table */}
        <section className="flex-1 bg-[#fdf9f0] rounded-2xl border border-[#e0d7c6] overflow-x-auto">
          <table className="w-full text-left min-w-[600px]">
            <thead>
              <tr className="bg-[#f6e7c5] text-[#3C2A1E] text-[1vw] max-[1025px]:text-[1.5vw] max-[599px]:text-[3vw]">
                <th className="px-4 py-3">Items</th>
                <th className="px-4 py-3">Name of Item</th>
                <th className="px-4 py-3">Bid</th>
                <th className="px-4 py-3">Quantity</th>
                <th className="px-4 py-3">Price</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((item, idx) => (
                <tr
                  key={idx}
                  className="border-t border-[#e0d7c6] text-[.9vw] max-[1025px]:text-[1.4vw] max-[599px]:text-[2.8vw]"
                >
                  <td className="px-4 py-3">
                    <div className="w-12 h-12 bg-[#fbeac6] rounded-md" />
                  </td>
                  <td className="px-4 py-3">Item Name</td>
                  <td className="px-4 py-3">₹--</td>
                  <td className="px-4 py-3">--</td>
                  <td className="px-4 py-3">₹--</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
};

export default Shiped;

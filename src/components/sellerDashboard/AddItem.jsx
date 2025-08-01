import React from 'react'
import SellerNav from '../SellerNav'

const AddItem = () => {
  return (
   <>
   <SellerNav/>
   <div className="w-full min-h-screen bg-[#FFF8EE] px-6 md:px-20 py-10 rounded-xl font-[one]">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[2vw] max-[599px]:text-[5vw] max-[1025px]:text-[3.5vw]">Item Name</h2>
        {/* <span className="text-[1.5vw] max-[599px]:text-[4vw] max-[1025px]:text-[2.5vw]">Navigation</span> */}
      </div>

      {/* First and Last Name */}
      <div className="flex gap-4 flex-wrap mb-6">
        <input
          type="text"
          placeholder="First Name"
          className="w-full md:w-1/2 rounded-full px-4 py-2 bg-[#FDE2B8] text-[1.2vw] max-[599px]:text-[4vw] max-[1025px]:text-[2.5vw]"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="w-full md:w-1/2 rounded-full px-4 py-2 bg-[#FDE2B8] text-[1.2vw] max-[599px]:text-[4vw] max-[1025px]:text-[2.5vw]"
        />
      </div>

      {/* Image Upload */}
      <div className="mb-6">
        <h3 className="text-[1.5vw] mb-3 max-[599px]:text-[4vw] max-[1025px]:text-[2.5vw]">Item Image</h3>
        <div className="flex gap-4 flex-wrap">
          <div className="w-[120px] h-[120px] bg-[#FDE2B8] flex items-center justify-center rounded-xl text-center text-[1vw] max-[599px]:text-[3.5vw] max-[1025px]:text-[2.5vw]">
            Click<br />or<br />Drop
          </div>
          <div className="w-[120px] h-[120px] bg-[#FDE2B8] flex items-center justify-center rounded-xl text-[1vw] max-[599px]:text-[3.5vw] max-[1025px]:text-[2.5vw]">
            Add More+
          </div>
        </div>
      </div>

      {/* Quantity */}
      <div className="mb-6">
        <label className="block mb-1 text-[1.2vw] max-[599px]:text-[3.5vw] max-[1025px]:text-[2.3vw]">Quantity</label>
        <div className="flex items-center">
          <input
            type="text"
            className="flex-grow rounded-full px-4 py-2 bg-[#FDE2B8] text-[1.2vw] max-[599px]:text-[4vw] max-[1025px]:text-[2.5vw]"
          />
          <span className="ml-2 text-[1.2vw] max-[599px]:text-[4vw] max-[1025px]:text-[2.5vw]">kg/units</span>
        </div>
      </div>

      {/* Base Price */}
      <div className="mb-6">
        <label className="block mb-1 text-[1.2vw] max-[599px]:text-[3.5vw] max-[1025px]:text-[2.3vw]">Base Price</label>
        <div className="flex items-center">
          <input
            type="text"
            className="flex-grow rounded-full px-4 py-2 bg-[#FDE2B8] text-[1.2vw] max-[599px]:text-[4vw] max-[1025px]:text-[2.5vw]"
          />
          <span className="ml-2 text-[1.2vw] max-[599px]:text-[4vw] max-[1025px]:text-[2.5vw]">₹ per kg</span>
        </div>
      </div>

      {/* Auction Time */}
      <div className="mb-6">
        <label className="block mb-1 text-[1.2vw] max-[599px]:text-[3.5vw] max-[1025px]:text-[2.3vw]">Auction Time</label>
        <div className="flex gap-4 flex-wrap">
          <input
            type="time"
            className="w-full md:w-[48%] rounded-full px-4 py-2 bg-[#FDE2B8] text-[1.2vw] max-[599px]:text-[4vw] max-[1025px]:text-[2.5vw]"
          />
          <input
            type="time"
            className="w-full md:w-[48%] rounded-full px-4 py-2 bg-[#FDE2B8] text-[1.2vw] max-[599px]:text-[4vw] max-[1025px]:text-[2.5vw]"
          />
        </div>
      </div>

      {/* Auto Pricing */}
      <div className="mb-6 flex items-center gap-4">
        <label className="text-[1.2vw] max-[599px]:text-[3.5vw] max-[1025px]:text-[2.3vw]">Enable Auto-Pricing</label>
        <input type="checkbox" className="toggle toggle-warning scale-75" />
        <span className="text-[1vw] max-[599px]:text-[3.5vw] max-[1025px]:text-[2.3vw]">ON</span>
      </div>

      {/* Description */}
      <div className="mb-6">
        <label className="block mb-1 text-[1.2vw] max-[599px]:text-[3.5vw] max-[1025px]:text-[2.3vw]">Description</label>
        <textarea
          rows="5"
          placeholder="About the Product/s"
          className="w-full rounded-xl px-4 py-3 bg-[#FDE2B8] text-[1.2vw] max-[599px]:text-[4vw] max-[1025px]:text-[2.5vw]"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="bg-[#F8981D] text-white px-6 py-2 rounded-full text-[1.2vw] max-[599px]:text-[4vw] max-[1025px]:text-[2.5vw]">Post Item</button>
        <button className="bg-transparent border border-[#59432D] text-[#59432D] px-6 py-2 rounded-full text-[1.2vw] max-[599px]:text-[4vw] max-[1025px]:text-[2.5vw]">Preview</button>
      </div>
    </div>
   </>
  )
}

export default AddItem
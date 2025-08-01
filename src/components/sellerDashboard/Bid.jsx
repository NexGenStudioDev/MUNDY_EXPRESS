import React, { useEffect, useState } from 'react';
import SellerNav from '../SellerNav';
import socket from '../../config/socket.mjs';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Bid = () => {
  const [auctionDetails, setAuctionDetails] = useState({
    itemName: "Tomato's",
    quantity: 50,
    unit: 'kg',
    status: 'Live',
    endsIn: 12, // in minutes
    bids: [],
  });

  useEffect(() => {
    // Ensure socket connection
    if (!socket.connected) {
      socket.connect();
    }

    // Join the auction room
    socket.emit('auction', {
      action: 'join',
      room: 'bidRoom',
    });

    // Listen for live bid updates
    socket.on('bidUpdate', (newBid) => {
      console.log('New bid received:', newBid);
      toast.success(`New bid: ${newBid.bidder} - ₹${newBid.amount}/${auctionDetails.unit}`);
      setAuctionDetails((prev) => ({
        ...prev,
        bids: [...prev.bids, newBid],
      }));
    });

    // Handle auction status updates
    socket.on('auctionStatus', (status) => {
      console.log('Auction status updated:', status);
      setAuctionDetails((prev) => ({
        ...prev,
        status,
      }));
    });

    // Cleanup on component unmount
    return () => {
      socket.emit('auction', {
        action: 'leave',
        room: 'bidRoom',
      });
      socket.off('bidUpdate');
      socket.off('auctionStatus');
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAuctionDetails((prev) => ({
      ...prev,
      [name]: name === 'quantity' || name === 'endsIn' ? parseInt(value, 10) : value,
    }));
  };

  const handleUpdateAuction = () => {
    // Emit updated auction details to the server
    socket.emit('auction', {
      action: 'updateAuction',
      room: 'bidRoom',
      auctionDetails,
    });

    toast.success('Auction details updated successfully.');
  };

  const handleEndAuctionEarly = () => {
    socket.emit('auction', {
      action: 'end',
      room: 'bidRoom',
    });
    toast.info('Auction ended early.');
    setAuctionDetails((prev) => ({
      ...prev,
      status: 'Ended',
    }));
  };

  const handleAcceptHighestBid = () => {
    if (auctionDetails.bids.length === 0) {
      toast.error('No bids available to accept.');
      return;
    }

    const highestBid = auctionDetails.bids.reduce((max, bid) =>
      bid.amount > max.amount ? bid : max,
    );

    socket.emit('auction', {
      action: 'accept',
      room: 'bidRoom',
      highestBid,
    });

    toast.success(`Accepted highest bid: ${highestBid.bidder} - ₹${highestBid.amount}/${auctionDetails.unit}`);
  };

  const handleDeleteBid = (index) => {
    const updatedBids = auctionDetails.bids.filter((_, idx) => idx !== index);
    setAuctionDetails((prev) => ({
      ...prev,
      bids: updatedBids,
    }));

    // Emit the updated bids to the server
    socket.emit('auction', {
      action: 'updateBids',
      room: 'bidRoom',
      bids: updatedBids,
    });

    toast.info('Bid deleted successfully.');
  };

  return (
    <>
      <SellerNav />
      <ToastContainer />
      <div className="w-full bg-[#FDF9F2] min-h-screen p-6 md:p-10 rounded-xl text-[#59432D]">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-[1.5vw] max-[1025px]:text-[2.5vw] max-[599px]:text-[4vw]">Auction</h2>
          <span className="text-[1.2vw] max-[1025px]:text-[2vw] max-[599px]:text-[3.5vw]">Home</span>
        </div>

        {/* Top Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[1.2vw] max-[1025px]:text-[2.2vw] max-[599px]:text-[3.5vw]">Item Name:</span>
            <input
              name="itemName"
              value={auctionDetails.itemName}
              onChange={handleInputChange}
              className="bg-[#E8DED1] px-4 py-1 rounded-full text-[1.2vw] max-[1025px]:text-[2vw] max-[599px]:text-[3.5vw]"
            />
            <input
              name="quantity"
              value={auctionDetails.quantity}
              onChange={handleInputChange}
              className="bg-[#E8DED1] px-4 py-1 rounded-full w-20 text-[1.2vw] max-[1025px]:text-[2vw] max-[599px]:text-[3.5vw]"
            />
            <input
              name="unit"
              value={auctionDetails.unit}
              onChange={handleInputChange}
              className="bg-[#E8DED1] px-4 py-1 rounded-full w-20 text-[1.2vw] max-[1025px]:text-[2vw] max-[599px]:text-[3.5vw]"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[1.2vw] max-[1025px]:text-[2.2vw] max-[599px]:text-[3.5vw]">Status:</span>
            <select
              name="status"
              value={auctionDetails.status}
              onChange={handleInputChange}
              className="bg-[#E8DED1] px-4 py-1 rounded-full text-[1.2vw] max-[1025px]:text-[2vw] max-[599px]:text-[3.5vw]"
            >
              <option value="Live">Live</option>
              <option value="Ended">Ended</option>
            </select>
            <span className="ml-4 text-[1.2vw] max-[1025px]:text-[2.2vw] max-[599px]:text-[3.5vw]">Ends In:</span>
            <input
              name="endsIn"
              value={auctionDetails.endsIn}
              onChange={handleInputChange}
              className="bg-[#E8DED1] px-4 py-1 rounded-full w-16 text-[1.2vw] max-[1025px]:text-[2vw] max-[599px]:text-[3.5vw]"
            />
            <span className="text-[1.2vw] max-[1025px]:text-[2vw] max-[599px]:text-[3.5vw]">min</span>
          </div>
        </div>

        {/* Update Button */}
        <div className="mb-6">
          <button
            onClick={handleUpdateAuction}
            className="bg-[#4CAF50] text-white px-6 py-2 rounded-full text-[1.1vw] max-[1025px]:text-[2vw] max-[599px]:text-[4vw]"
          >
            Update Auction Details
          </button>
        </div>

        {/* Table */}
        <div className="rounded-2xl overflow-hidden border">
          {/* Header Row */}
          <div className="grid grid-cols-5 bg-[#D5C6AF] p-4 text-[1.1vw] font-semibold max-[1025px]:text-[2vw] max-[599px]:text-[3.5vw]">
            <div>Bidder</div>
            <div>Bid Amount</div>
            <div>Time</div>
            <div>Action</div>
          </div>

          {/* Bids */}
          {auctionDetails.bids.map((bid, idx) => (
            <div
              key={idx}
              className="grid grid-cols-5 items-center p-4 bg-white text-[1.1vw] max-[1025px]:text-[2vw] max-[599px]:text-[3.5vw] border-t"
            >
              <div>{bid.bidder}</div>
              <div>₹{bid.amount}/{auctionDetails.unit}</div>
              <div>{new Date(bid.time).toLocaleTimeString()}</div>
              <div>
                <button
                  onClick={() => handleDeleteBid(idx)}
                  className="bg-red-500 text-white px-4 py-1 rounded-full text-[1vw] max-[1025px]:text-[1.5vw] max-[599px]:text-[2.5vw]"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-8 flex-wrap gap-4">
          <button
            onClick={handleEndAuctionEarly}
            className="bg-[#59432D] text-white px-6 py-2 rounded-full text-[1.1vw] max-[1025px]:text-[2vw] max-[599px]:text-[4vw]"
          >
            End Auction Early
          </button>
          <button
            onClick={handleAcceptHighestBid}
            className="bg-[#F8981D] text-white px-6 py-2 rounded-full text-[1.1vw] max-[1025px]:text-[2vw] max-[599px]:text-[4vw]"
          >
            Accept Highest Bid
          </button>
        </div>
      </div>
    </>
  );
};

export default Bid;
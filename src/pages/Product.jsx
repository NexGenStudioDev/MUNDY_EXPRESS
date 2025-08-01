import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../components/Loader';
import axios from 'axios';

const Product = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const [product, setProduct] = useState(null);
  const [packSize, setPackSize] = useState("2 Pack");

  // Static data for vendors who bid on the product
  const staticBiddingVendors = [
    {
      name: "Ram Vendors",
      price: 120,
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fget.pxhere.com%2Fphoto%2Fman-person-male-portrait-professional-profession-speaker-senior-citizen-elder-face-expression-adult-business-executive-ben-knapen-1068652.jpg&f=1&nofb=1&ipt=673de09a6f50ef38738bf1dbb6a40193deafdfa2cdc28f78a1f048c7763e4aa8",
    },
    {
      name: "Shyam Vendors",
      price: 150,
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fget.pxhere.com%2Fphoto%2Fperson-people-hair-photography-male-portrait-model-young-spring-studio-fresh-clean-blue-hairstyle-caucasian-attractive-photo-shoot-portrait-photography-1393146.jpg&f=1&nofb=1&ipt=9758909808b0d9fdc6b72ff45263cb3ca1e125f67e7d611049c1cc2dac719cfb",
    },
    {
      name: "Mohan Vendors",
      price: 100,
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.freepik.com%2Ffree-photo%2Fhandsome-cheerful-man-with-happy-smile_176420-18028.jpg&f=1&nofb=1&ipt=c12ddc0e881b92f0a641e24a83878ea03a15bf249ed2d6e318ca2f8ae1594158",
    },
  ];

  // Fetch product details
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/v1/product/${productId}`);
       
        console.log(response.data);
        const data =  response.data.data;
        console.log(data);
        setProduct(data);
      } catch (error) {
        toast.error(error.message || 'Failed to load product details.');
      }
    };

    fetchProduct();
  }, [productId]);

  const handleBuyNow = (vendor = null) => {
    if (!isAuthenticated) {
      toast.error('You need to log in to buy this product.');
      navigate('/login');
      return;
    }

    // Redirect to checkout with the selected vendor or default product
    const vendorId = vendor ? `?vendor=${vendor.name}&price=${vendor.price}` : '';
    toast.success('Redirecting to checkout...');
    navigate(`/checkout/${productId}${vendorId}`);
  };

  if (!product) {
    return (
      <>
        <Navbar />
        <ToastContainer />
        <Loader />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="bg-[#F8F4EC] text-[#4B2E1B] px-24 pt-40 pb-10 font-[one]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* LEFT SIDE - IMAGES */}
          <div className="w-full h-full rounded-2xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={product.images[0]}
              alt={product.title}
            />
          </div>

          {/* RIGHT SIDE - DETAILS */}
          <div>
            <h1 className="text-[3vw] mb-2">{product.title}</h1>
            <p className="text-[1vw] text-orange-600 mb-1">
              ★★★★★ <span className="text-[#59432D]">{product.star} stars</span>
            </p>
            <p className="text-[1vw] text-[#59432D] mb-4">{product.description}</p>

            <p className="font-[second] font-black mt-4 mb-1">BEST USED FOR:</p>
            <div className="text-[.9vw] font-[second] font-black flex gap-4 mb-4">
              {product.label.length > 0 ? (
                product.label.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-1">
                    <span className="w-4 h-4 rounded-full bg-[#59432D] text-[#F8F4EC] flex items-center justify-center">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))
              ) : (
                <span>No labels available</span>
              )}
            </div>

            {/* Pack Size */}
            <div className="mb-4">
              <p className="mb-2 font-black font-[second] text-[1vw]">
                Pack Size: <span className="text-orange-600 text-[.9vw] font-[one]">{packSize}</span>
              </p>
              <div className="flex gap-2">
                {["1 Pack", "2 Pack", "4 Pack"].map((size) => (
                  <button
                    key={size}
                    className={`border px-4 py-2 rounded-xl text-sm transition ${
                      packSize === size
                        ? "bg-[#4B2E1B] text-white"
                        : "bg-white text-[#4B2E1B] border-[#4B2E1B]"
                    }`}
                    onClick={() => setPackSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-4">
              <p className="text-[1.2vw] font-bold text-[#4B2E1B]">
                Price: <span className="text-orange-600">${product.price}</span>
              </p>
            </div>

            {/* Buy Now Button */}
            <button
              onClick={() => handleBuyNow()}
              className="w-full bg-[#FF6A00] text-white font-bold py-3 rounded-xl text-lg mt-4 hover:bg-[#e65c00] transition"
            >
              Buy Now
            </button>

            <div className="mt-4 text-sm text-[#6C5A4E] flex flex-wrap gap-4">
              <span>Quantity: {product.quantity}</span>
              <span>Status: {product.status}</span>
            </div>
          </div>
        </div>

        {/* Vendors Who Bid on This Product */}
        <div className="mt-10">
          <h2 className="text-[1.5vw] font-bold mb-4">Vendors Who Bid on This Product</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {staticBiddingVendors.map((vendor, idx) => (
              <div
                key={idx}
                className="border rounded-lg p-4 flex flex-col items-center text-center bg-[#FFF7E6] shadow-md hover:shadow-lg transition"
              >
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="w-20 h-20 rounded-full mb-4 object-cover"
                />
                <h3 className="font-bold text-lg text-[#4B2E1B]">{vendor.name}</h3>
                <p className="text-sm text-gray-600">Bid Price: <span className="text-orange-600">${vendor.price}</span></p>
                <button
                  onClick={() => handleBuyNow(vendor)}
                  className="mt-4 bg-[#FF6A00] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#e65c00] transition"
                >
                  Buy from {vendor.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
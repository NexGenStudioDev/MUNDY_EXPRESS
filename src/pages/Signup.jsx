import React, { useState } from 'react';
import axios from 'axios'; // For making API requests
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  let [isSignup, setIsSignup] = useState(false);
  let [BtnText, setBtnText] = useState('Send Otp');
  let [loading, setLoading] = useState(false); // Loading state

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'customer', // Default role
    otp: '', // For OTP verification
    profileImage: null, // For profile image upload
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profileImage: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      // Create a FormData object to handle file upload
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      if (!isSignup) {
        // Send data to the backend API for sign-up
        const response = await axios.post('/api/v1/auth/SignUp', data, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });

        if (response.data.success) {
          toast.success(response.data.message || 'Sign up successful!');
          setIsSignup(true);
          setBtnText('Verify Otp');
        }
      } else {
        // Send OTP for verification
        const otpResponse = await axios.post('/api/v1/auth/validate-otp', {
          email: formData.email,
          otp: formData.otp,
        });

        if (otpResponse.data.success) {
          toast.success(otpResponse.data.message || 'OTP verified successfully!');
          window.location.href = '/login';
        } else {
          toast.error(otpResponse.data.message || 'OTP verification failed.');
        }
      }
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || err.message || 'An error occurred during sign up.');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="h-screen flex items-center justify-center bg-[#f9f5ed]">
        <div className="w-full max-w-md px-8 pt-20 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-[#5c432d] text-center mb-8 font-serif">
            Sign Up Account
          </h1>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            {!isSignup ? (
              <>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-[#e5ded4] rounded-lg px-5 py-3 bg-transparent text-[#5c432d] placeholder-[#c2b6a6] focus:outline-none focus:ring-2 focus:ring-[#bfa88a] transition"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-[#e5ded4] rounded-lg px-5 py-3 bg-transparent text-[#5c432d] placeholder-[#c2b6a6] focus:outline-none focus:ring-2 focus:ring-[#bfa88a] transition"
                  required
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border border-[#e5ded4] rounded-lg px-5 py-3 bg-transparent text-[#5c432d] placeholder-[#c2b6a6] focus:outline-none focus:ring-2 focus:ring-[#bfa88a] transition"
                  required
                />
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="border border-[#e5ded4] rounded-lg px-5 py-3 bg-transparent text-[#5c432d] focus:outline-none focus:ring-2 focus:ring-[#bfa88a] transition"
                  required
                >
                  <option value="supplier">Supplier</option>
                  <option value="vendor">Vendor</option>
                </select>
                <input
                  type="file"
                  name="profileImage"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="border border-[#e5ded4] rounded-lg px-5 py-3 bg-transparent text-[#5c432d] focus:outline-none focus:ring-2 focus:ring-[#bfa88a] transition"
                />
              </>
            ) : (
              <input
                type="number"
                name="otp"
                placeholder="Enter Your Otp to Verify"
                value={formData.otp}
                onChange={handleChange}
                className="border border-[#e5ded4] rounded-lg px-5 py-3 bg-transparent text-[#5c432d] placeholder-[#c2b6a6] focus:outline-none focus:ring-2 focus:ring-[#bfa88a] transition"
                required
              />
            )}
            <button
              type="submit"
              className="mt-2 bg-[#5c432d] text-white font-semibold py-3 rounded-full text-lg hover:bg-[#47321c] transition"
              disabled={loading} // Disable button while loading
            >
              {loading ? 'Processing...' : BtnText}
            </button>
          </form>
          <div className="mt-7 flex flex-col items-center gap-2 text-[#5c432d] text-base">
            <span>
              Already have an account?{' '}
              <Link to="/login" className="underline hover:text-[#47321c]">
                Log in
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { setToken, setUser } from '../store/User.Slice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/v1/auth/generate-login-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to send OTP.');
      }

      const data = await response.json();
      if (data.success) {
        toast.success('OTP sent to your email.');
        setIsOtpSent(true);
      } else {
        toast.error(data.message || 'Failed to send OTP.');
      }
    } catch (err) {
      toast.error(err.message || 'An error occurred while sending OTP.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/v1/auth/validate-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      });

      if (!response.ok) {
        throw new Error('Failed to verify OTP.');
      }

      const data = await response.json();
      console.log(data);
      if (data.success) {
        toast.success('Login successful!');
        dispatch(setUser(data.data.user)); // Dispatch user data to Redux store
      
        localStorage.setItem('token', data.data.token); // Store token in localStorage
        localStorage.setItem('isLoggedIn', true); // Optional: Persist login state
        navigate('/seller/all-order'); // Redirect to dashboard
      } else {
        toast.error(data.message || 'Invalid OTP.');
      }
    } catch (err) {
      toast.error(err.message || 'An error occurred while verifying OTP.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="h-screen flex items-center justify-center bg-[#f9f5ed]">
        <div className="w-full max-w-md px-8 pt-20 max-[599px]:pt-10 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-[#5c432d] text-center mb-8 font-serif">
            {isOtpSent ? 'Verify OTP' : 'Account Login'}
          </h1>
          <form
            className="flex flex-col gap-5"
            onSubmit={isOtpSent ? handleVerifyOtp : handleSendOtp}
          >
            {!isOtpSent ? (
              <>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-[#e5ded4] rounded-lg px-5 py-3 bg-transparent text-[#5c432d] placeholder-[#c2b6a6] focus:outline-none focus:ring-2 focus:ring-[#bfa88a] transition"
                  required
                />
                <button
                  type="submit"
                  className="mt-2 bg-[#5c432d] text-white font-semibold py-3 rounded-full text-lg hover:bg-[#47321c] transition"
                  disabled={loading}
                >
                  {loading ? 'Sending OTP...' : 'Send OTP'}
                </button>
              </>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="border border-[#e5ded4] rounded-lg px-5 py-3 bg-transparent text-[#5c432d] placeholder-[#c2b6a6] focus:outline-none focus:ring-2 focus:ring-[#bfa88a] transition"
                  required
                />
                <button
                  type="submit"
                  className="mt-2 bg-[#5c432d] text-white font-semibold py-3 rounded-full text-lg hover:bg-[#47321c] transition"
                  disabled={loading}
                >
                  {loading ? 'Verifying OTP...' : 'Verify OTP'}
                </button>
              </>
            )}
          </form>
          <div className="mt-7 flex flex-col items-center gap-2 text-[#5c432d] text-base">
            <span>
              Don't have an account yet?{' '}
              <Link to="/signUp" className="underline hover:text-[#47321c]">
                Create account
              </Link>
            </span>
            <Link to="#" className="underline hover:text-[#47321c] mt-2">
              Forgot your password?
            </Link>
            <Link to="#" className="underline hover:text-[#47321c] mt-2">
              Need help accessing your subscriptions?
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
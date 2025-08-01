import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/landingComponents/Hero'
import Category from '../components/landingComponents/Category'
import WhyUs from '../components/landingComponents/WhyUs'
import Testimonials from '../components/landingComponents/Testimonials'
import Stores from '../components/landingComponents/Stores'
import About from '../components/landingComponents/About'
import Team from '../components/landingComponents/Team'
import Gurantee from '../components/landingComponents/Gurantee'
import Footer from '../components/Footer'
import AllCategory from '../components/landingComponents/AllCategory'
import Search from '../components/Search'
import socket from '../config/socket.mjs'

const App = () => {
  useEffect(() => {
    if(!socket.connect){
      socket.connect();
      console.log('Socket connection established');
    }
  }, []);

  return (
    <main className='w-full relative overflow-hidden font-[one]'>
      <Navbar/>
      <Hero/>
      {/* <Search /> */}
      <Category/>
      <About/>
      <WhyUs/>
      <Testimonials/>
      <Stores/>
      <AllCategory/>
      <Team/>
      <Gurantee/>
      <Footer/>
    </main>
  )
}

export default App
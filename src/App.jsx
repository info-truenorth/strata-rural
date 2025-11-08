import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SeeTheBigPicture from './components/SeeTheBigPicture';
import Testimonial from './components/Testimonial';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import LargeImage from './components/LargeImage';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <SeeTheBigPicture />
      <Testimonial />
      <WhyChooseUs />
      <Process />
      <LargeImage />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;

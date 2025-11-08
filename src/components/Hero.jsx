import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="pt-32 pb-32 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-semibold text-black text-center mb-20 leading-tight">
          Digital presence built for rural NZ reality
        </h1>

        {/* Hero Image with Frame - Multi-layer effect with olive shades and parallax */}
        <div className="mb-32 flex justify-center px-4">
          <div className="w-full max-w-5xl relative" style={{perspective: '1000px'}}>
            {/* Layer 3: Lightest olive (parallax slowest) */}
            <div className="absolute inset-0 bg-sage-light rounded-3xl transition-transform duration-100" style={{transform: `translate(${48 + scrollY * 0.05}px, ${48 + scrollY * 0.05}px)`, zIndex: 1}}></div>

            {/* Layer 2: Medium olive (parallax medium) */}
            <div className="absolute inset-0 bg-olive-medium rounded-3xl transition-transform duration-100" style={{transform: `translate(${32 + scrollY * 0.04}px, ${32 + scrollY * 0.04}px)`, zIndex: 2}}></div>

            {/* Layer 1: Dark olive (parallax fastest) */}
            <div className="absolute inset-0 bg-olive-dark rounded-3xl transition-transform duration-100" style={{transform: `translate(${16 + scrollY * 0.03}px, ${16 + scrollY * 0.03}px)`, zIndex: 3}}></div>

            {/* Black border tablet frame (foreground - no parallax) */}
            <div className="relative bg-black p-4 md:p-6 rounded-3xl shadow-xl group cursor-pointer" style={{zIndex: 4}}>
              <img
                src="/hero-nz-bush.jpg"
                alt="New Zealand bush landscape"
                className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Below Image Content */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-medium text-black mb-8">
            digital presence that actually works in rural nz
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            80% of your customers are searching on mobile. We build fast, mobile-first websites that actually work on rural connections.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

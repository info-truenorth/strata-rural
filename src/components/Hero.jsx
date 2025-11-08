import React from 'react';

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url(/hero-nz-bush.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-4xl px-6 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-semibold text-white mb-8 leading-tight">
          Digital presence built for rural NZ reality
        </h1>
        <p className="text-lg md:text-xl text-white leading-relaxed">
          80% of your customers are searching on mobile. We build fast, mobile-first websites that actually work on rural connections.
        </p>
      </div>
    </section>
  );
};

export default Hero;

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

  const features = [
    {
      title: 'Mobile-First Web Design',
      description: 'Websites are designed for mobile devices and rural connections. No bloat, no delays.',
    },
    {
      title: 'Local SEO & Google Business',
      description: 'Dominate local search results. Optimize your Google Business Profile so you\'re found when customers search.',
    },
    {
      title: 'Content & Social Media',
      description: 'Consistent, engaging content across platforms. Regular blogs and social posts that keep your business visible and build trust.',
    },
    {
      title: 'Ongoing Management',
      description: 'Continuous optimization, updating content, improving SEO, and ensuring everything runs smoothly.',
    },
  ];

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
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-medium text-black mb-8">
            fast websites designed for rural connections
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Your website is the foundation. We build lightning-fast, mobile-first sites that load instantly on rural internet, so customers can find you and convert, not abandon.
          </p>
        </div>

        {/* 4-Column Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-left feature-card">
              <h3 className="font-playfair text-lg font-medium text-black mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

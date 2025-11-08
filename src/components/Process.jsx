import React from 'react';

const Process = () => {
  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description: 'We analyze your business, competitors, and local market. Then we map out your complete digital presence strategy—website, SEO, content, and social media.',
    },
    {
      number: '02',
      title: 'Build & Launch',
      description: 'We create your lightning-fast, mobile-first website optimized for rural connections. Set up Google Business, initial SEO, and content foundations.',
    },
    {
      number: '03',
      title: 'Optimize & Grow',
      description: 'Continuous optimization through regular content, SEO improvements, social media management, and performance monitoring. Your digital presence evolves with your business.',
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-medium text-black text-center mb-20 leading-tight">
          how we build your digital presence
        </h2>

        {/* 3-Column Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              {/* Large Number */}
              <div className="text-7xl md:text-8xl lg:text-9xl font-light text-gray-200 mb-4">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-playfair font-medium text-black mb-4">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-base text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button - Left-aligned */}
        <div className="max-w-7xl">
          <button className="bg-sage-light text-black px-10 py-4 rounded-full font-medium hover:bg-opacity-90 transition">
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;

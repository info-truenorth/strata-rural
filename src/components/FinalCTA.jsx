import React from 'react';

const FinalCTA = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-medium text-black mb-8 leading-tight">
          ready to dominate local search
        </h2>

        {/* Body Text */}
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto">
          Let's build your complete digital presence—fast websites, strong SEO, and content that keeps customers coming.
        </p>

        {/* CTA Button - Large and Prominent */}
        <button className="bg-olive-dark text-white px-12 py-5 rounded-full font-medium text-lg hover:bg-opacity-90 transition shadow-lg">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default FinalCTA;

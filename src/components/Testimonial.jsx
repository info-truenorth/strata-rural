import React from 'react';

const Testimonial = () => {
  const stats = [
    { number: '< 2s', label: 'Average Load Time' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '100%', label: 'Mobile Optimized' },
    { number: '0%', label: 'Performance Bloat' },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-olive-dark mb-2 font-playfair">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <div>
            <div className="aspect-square rounded-2xl shadow-lg overflow-hidden group cursor-pointer">
              <img
                src="/nz-farmland.jpg"
                alt="New Zealand farmland landscape"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Right Column - Quote */}
          <div className="lg:pl-8">
            <blockquote className="text-xl md:text-2xl text-black italic leading-relaxed mb-8">
              "Strata Digital understood our rural business needs from day one. Our website now loads fast even with patchy reception, and we've seen a 40% increase in online bookings."
            </blockquote>
            <div className="text-sm text-gray-600">
              <p className="font-medium text-black">Sarah Thompson</p>
              <p>Thompson Family Orchard, Central Otago</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

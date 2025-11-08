import React from 'react';

const Testimonial = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <div>
            <div className="aspect-square bg-gradient-to-br from-slate-200 via-blue-100 to-purple-100 rounded-2xl shadow-lg">
              {/* Placeholder for geometric/abstract composition with spheres */}
            </div>
          </div>

          {/* Right Column - Quote */}
          <div className="lg:pl-8">
            <blockquote className="text-xl md:text-2xl text-black italic leading-relaxed mb-8">
              "Before this, customers couldn't even find us on Google. Now we're the first result when locals search, our website loads instantly on mobile, and we're getting calls every day. Completely transformed our business."
            </blockquote>
            <div className="text-sm text-gray-600">
              <p className="font-medium text-black">John Smith</p>
              <p>Head of Sales</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

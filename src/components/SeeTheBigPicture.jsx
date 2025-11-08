import React from 'react';

const SeeTheBigPicture = () => {
  const points = [
    {
      number: '01',
      title: 'Mobile-First, Always',
      description: 'Every site we build is designed for mobile devices first, optimized for slower rural connections, and lightning-fast to load.',
    },
    {
      number: '02',
      title: 'Get Found on Google',
      description: 'Local SEO and Google Business optimization ensure you show up first when customers search in your area.',
    },
    {
      number: '03',
      title: 'Continuous Content & Socials',
      description: 'Regular blogs, social media posts, and updates keep your business visible and build trust with your community.',
    },
    {
      number: '04',
      title: 'Ongoing Optimization',
      description: 'We continuously monitor, update, and improve your digital presence so it grows alongside your business.',
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div className="border-l-4 border-olive-dark pl-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-medium text-black mb-8 leading-tight">
              see the big picture
            </h2>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">
              Most businesses focus only on having a website. We build your complete digital ecosystem—your site, Google listing, social presence, and content all work together to attract and convert local customers.
            </p>

            {/* Numbered Points */}
            <div className="space-y-8 mb-12">
              {points.map((point, index) => (
                <div key={index} className="flex gap-4">
                  <span className="text-3xl font-light text-gray-300 flex-shrink-0">
                    {point.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-playfair font-medium text-black mb-2">
                      {point.title}
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="bg-sage-light text-black px-10 py-4 rounded-full font-medium hover:bg-opacity-90 transition">
              Discover More
            </button>
          </div>

          {/* Right Column - Image */}
          <div>
            <div className="aspect-square rounded-2xl shadow-lg overflow-hidden">
              <img
                src="/farmland-nz.jpg"
                alt="Farmland landscape in New Zealand"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeeTheBigPicture;

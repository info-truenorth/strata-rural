import React from 'react';

const LargeImage = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 group cursor-pointer">
          <img
            src="/aerial-bush-shot.jpg"
            alt="Aerial view of New Zealand bush landscape"
            className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default LargeImage;

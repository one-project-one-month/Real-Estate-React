import React from 'react';
import { SearchBar } from './SearchBar';

export const Hero = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-[350px] md:min-h-[420px] bg-cover bg-center"
      style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex flex-col items-center w-full px-4">
        <h1 className="mt-10 mb-8 text-2xl font-bold text-center text-white md:text-4xl drop-shadow-lg">
          Myanmar's Smarter Property Search
        </h1>
        <SearchBar />
      </div>
    </section>
  );
};

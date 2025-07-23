import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// ပုံတစ်ပုံချင်းစီအတွက် data structure ကို interface နဲ့ သတ်မှတ်
interface ImageData {
  src: string;
  alt: string;
}

// Gallery အတွက် image data တွေ
const images: ImageData[] = [
  {
    src: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2874&auto=format&fit=crop',
    alt: 'Villa view 1',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop',
    alt: 'Villa view 2',
  },
  {
    src: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop',
    alt: 'Villa view 3',
  },
  {
    src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2940&auto=format&fit=crop',
    alt: 'Villa view 4',
  },
  {
    src: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2940&auto=format&fit=crop',
    alt: 'Villa view 5',
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2940&auto=format&fit=crop',
    alt: 'Villa view 6',
  },
  {
    src: 'https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=2940&auto=format&fit=crop',
    alt: 'Villa view 7',
  },
  {
    src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop',
    alt: 'Villa view 8',
  },
];

const ImageGallery: React.FC = () => {
  // လက်ရှိပြသနေတဲ့ ပုံရဲ့ index ကို state မှာသိမ်းထားမယ်
  const [currentIndex, setCurrentIndex] = useState(0);

  // နောက်ပုံကိုသွားမယ့် function
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // အရှေ့ပုံကိုသွားမယ့် function
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 font-sans">
      {/* Thumbnail Images */}
      <div className="p-2 bg-blue-500/10 rounded-xl mb-4">
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="flex-shrink-0 rounded-lg overflow-hidden focus:outline-none"
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-28 h-20 object-cover transition-all duration-300 ease-in-out
                  ${currentIndex === index ? 'border-4 border-blue-500 scale-105' : 'border-4 border-transparent opacity-70 hover:opacity-100'}`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Main Image Display */}
      <div className="relative w-full h-[30vh] sm:h-[40vh] md:h-[55vh] mb-4">
        {/* ပုံหลายๆပုံကို တင်ထားပြီး opacity နဲ့ အဖွင့်အပိတ်လုပ်เพื่อ fade effect ရစေရန် */}
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl transition-opacity duration-500 ease-in-out
              ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-center items-center gap-4">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-transform hover:scale-110"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Pagination Dots */}
        <div className="flex items-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ease-in-out focus:outline-none
                ${currentIndex === index ? 'bg-blue-600 w-6' : 'bg-gray-300 w-2 hover:bg-gray-400'}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-transform hover:scale-110"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;

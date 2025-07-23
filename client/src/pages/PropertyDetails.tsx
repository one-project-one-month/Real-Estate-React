import React, { useState } from 'react';
import {
  BedDouble,
  Bath,
  Square,
  MapPin,
  Zap,
  Phone,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
} from 'lucide-react';


interface ImageData {
  src: string;
  alt: string;
}


interface FeatureItemProps {
  children: React.ReactNode;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ children }) => (
  <li className="flex h-20 ps-10 items-center gap-3 p-3 text-white bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg shadow-sm">
    <Zap size={20} />
    <span className="flex-1">{children}</span>
  </li>
);

const PropertyDetails: React.FC = () => {
  
  const galleryImages: ImageData[] = [
    {
      src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2940&auto=format&fit=crop',
      alt: 'Modern villa exterior',
    },
    {
      src: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2874&auto=format&fit=crop',
      alt: 'Villa at night',
    },
    {
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop',
      alt: 'Modern living room',
    },
    {
      src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop',
      alt: 'Villa with swimming pool',
    },
    {
      src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2940&auto=format&fit=crop',
      alt: 'Cozy bedroom',
    },
    {
      src: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2874&auto=format&fit=crop',
      alt: 'Villa at night',
    },
    {
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop',
      alt: 'Modern living room',
    },
    {
      src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop',
      alt: 'Villa with swimming pool',
    },
    {
      src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2940&auto=format&fit=crop',
      alt: 'Cozy bedroom',
    },
    {
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop',
      alt: 'Modern living room',
    },
    {
      src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop',
      alt: 'Villa with swimming pool',
    },
   
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () =>
    setCurrentIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  const handlePrev = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );

  return (
    <div className="bg-white min-h-screen font-sans">
      <div className="container mx-auto p-4 md:p-8">
        {/* Header Section */}
        <nav className="text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex flex-wrap space-x-2 items-center">
            <li>
              <a href="#" className="text-blue-600 hover:underline">
                Home
              </a>
            </li>
            <li>{'>'}</li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">
                Property for Sale
              </a>
            </li>
            <li className="hidden sm:inline">{'>'}</li>
            <li>
              <a
                href="#"
                className="text-blue-600 hover:underline mt-1 sm:mt-0"
              >
                Residential properties for Sale
              </a>
            </li>
            <li className="hidden sm:inline">{'>'}</li>
            <li className="w-full sm:w-auto">
              <span className="text-gray-700 mt-1 sm:mt-0">
                Seaside Serenity Villa
              </span>
            </li>
          </ol>
        </nav>
        <header className="flex  md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Seaside Serenity Villa
            </h1>
            <div className="flex items-center gap-2 mt-2 text-gray-600 border border-gray-300 rounded-md px-3 py-1 w-fit">
              <MapPin size={16} />
              <span>Malibu, California</span>
            </div>
          </div>
          <div className="mt-4 md:mt-0 text-right">
            <p className="text-gray-500">Price</p>
            <p className="text-3xl font-bold text-blue-600">$1,250,000</p>
          </div>
        </header>

        {/* Image Gallery Section */}
        <div className="mb-8 p-4 bg-gray-100 rounded-2xl shadow-inner">
          <div className="relative w-full h-[40vh] md:h-[60vh] mb-4">
            <img
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>
          <div className="relative">
            <div className="flex items-center justify-center space-x-3 overflow-x-auto pb-2 scrollbar-hide">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`flex-shrink-0 w-28 h-20 rounded-lg overflow-hidden transition-all duration-300 ${currentIndex === index ? 'border-4 border-blue-500 ring-2 ring-blue-500' : 'border-4 border-transparent opacity-60 hover:opacity-100'}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 mt-4">
            <button
              onClick={handlePrev}
              className="p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex items-center gap-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-blue-600 w-6' : 'bg-gray-300 w-2 hover:bg-gray-400'}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Description
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Discover your own piece of paradise with the Seaside Serenity
                Villa. With an open floor plan, breathtaking ocean views from
                every room, and direct access to a pristine sandy beach, this
                property is the epitome of coastal living.
              </p>
              <div className="grid grid-cols-3 divide-x divide-gray-200 text-center pt-4 border-t">
                <div className="p-2">
                  <BedDouble className="mx-auto text-blue-500 mb-2" size={35} />
                  <p className="text-xl font-bold text-gray-800">04</p>
                  <p className="text-sm text-gray-500">Bedrooms</p>
                </div>
                <div className="p-2">
                  <Bath className="mx-auto text-blue-500 mb-2" size={35} />
                  <p className="text-xl font-bold text-gray-800">03</p>
                  <p className="text-sm text-gray-500">Bathrooms</p>
                </div>
                <div className="p-2">
                  <Square className="mx-auto text-blue-500 mb-2" size={35} />
                  <p className="text-xl font-bold text-gray-800">2,500</p>
                  <p className="text-sm text-gray-500">Square Feet</p>
                </div>
              </div>
            </div>

            {/* --- Agent Info Card  --- */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 flex flex-col sm:flex-row items-center gap-6">
              <img
                src="https://i.pravatar.cc/150?u=johndoe2"
                alt="John Doe"
                className="w-24 h-24 rounded-full object-cover border-4 border-gray-100 flex-shrink-0"
              />
              <div className="flex-1 flex flex-col space-y-2 text-center sm:text-left w-full">
                <div className="flex flex-col sm:flex-row sm:justify-between items-center sm:items-baseline">
                  <h3 className="text-xl font-bold text-gray-900">John Doe</h3>
                  <p className="text-sm font-semibold text-red-500 ">
                    REGID: 00123456
                  </p>
                </div>

                <p className="text-gray-500">Royal Star Real Estate Co.,Ltd</p>

                <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center pt-3 mt-2 border-t gap-2">
                  <p className="text-lg font-semibold text-blue-600">
                    +959777333444
                  </p>
                  <button className="px-5 py-1.5 text-sm border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors w-full sm:w-auto">
                    Details
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <button className="w-full py-2.5 text-sm font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                    <Phone size={16} /> Call
                  </button>
                  <button className="w-full py-2.5 text-sm font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                    <MessageCircle size={16} /> Message
                  </button>
                </div>
              </div>
            </div>
            {/* --- End of Agent Info Card --- */}
          </div>

          {/* Right Column */}
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Key Features and Amenities
            </h2>
            <ul className="space-y-3">
              <FeatureItem>
                Expansive oceanfront terrace for outdoor entertaining
              </FeatureItem>
              <FeatureItem>
                Gourmet kitchen with top-of-the-line appliances
              </FeatureItem>
              <FeatureItem>
                Private beach access for morning strolls and sunset views
              </FeatureItem>
              <FeatureItem>
                Master suite with a spa-inspired bathroom and ocean-facing
                balcony
              </FeatureItem>
              <FeatureItem>Private garage and ample storage space</FeatureItem>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;

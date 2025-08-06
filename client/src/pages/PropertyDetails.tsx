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
import { Button } from '@ui';
import { BreadcrumbNavigator } from '../components';
import { useNavigate, useParams } from 'react-router-dom';
import { PostType } from '@types';
import { useTranslation } from 'react-i18next';
import { properties } from '../../../mocks/properties';

interface ImageData {
  src: string;
  alt: string;
}

interface FeatureItemProps {
  children: React.ReactNode;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ children }) => (
  <li className="flex items-center h-20 gap-3 p-3 text-white rounded-lg shadow-sm ps-10 bg-gradient-to-r from-primary to-cyan-400">
    <Zap size={20} />
    <span className="flex-1">{children}</span>
  </li>
);

export const PropertyDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const property = properties.find((p) => String(p.id) === id);
  const ownerId = property?.ownerId || '';
  const navigate = useNavigate();
  const { t } = useTranslation();
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
    <section className="flex flex-col w-full gap-10 px-4 py-6 mx-auto sm:max-w-3xl md:max-w-4xl lg:max-w-7xl lg:px-0">
      <BreadcrumbNavigator
        paths={[
          { label: t('home'), href: '/' },
          {
            label: t('properties'),
            href: `/properties`,
          },
          { label: property.township, isCurrent: true },
        ]}
      />{' '}
      <header className="flex items-start justify-between mb-6 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold md:text-4xl">
            {property.buildingNumber}
          </h1>
          <div className="flex items-center gap-2 px-3 py-1 mt-2 text-gray-600 border border-gray-300 rounded-md w-fit">
            <MapPin size={16} />
            <span>{property.region}, {property.township}, {property.street}</span>
          </div>
        </div>
        <div className="mt-4 text-right md:mt-0">
          <p className="text-gray-500">{t('price')}</p>
          <p className="text-3xl font-semibold text-secondary-foreground">
            $ {property.price.toLocaleString()}
          </p>
        </div>
      </header>
      {/* Image Gallery Section */}
      <div className="p-4 mb-8 bg-gray-100 shadow-inner rounded-2xl">
        <div className="relative w-full h-[40vh] md:h-[60vh] mb-4">
          <img
            src={galleryImages[currentIndex].src}
            alt={galleryImages[currentIndex].alt}
            className="object-cover w-full h-full shadow-lg rounded-xl"
          />
        </div>
        <div className="relative">
          <div className="flex items-center justify-center pb-2 space-x-3 overflow-x-auto scrollbar-hide">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 w-28 h-20 rounded-lg overflow-hidden transition-all duration-300 ${currentIndex === index ? 'border-4 border-primary ring-2 ring-primary' : 'border-4 border-transparent opacity-60 hover:opacity-100'}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 mt-4">
          <button
            onClick={handlePrev}
            className="p-3 text-white transition-transform rounded-full shadow-lg bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="flex items-center gap-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-primary w-6' : 'bg-gray-300 w-2 hover:bg-gray-400'}`}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="p-3 text-white transition-transform rounded-full shadow-lg bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="flex flex-col border border-gray-200 bg-background md:p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold ">Description</h2>
            <p className="py-3 text-sm leading-relaxed text-gray-500">
              Discover your own piece of paradise with the Seaside Serenity
              Villa. With an open floor plan, breathtaking ocean views from
              every room, and direct access to a pristine sandy beach, this
              property is the epitome of coastal living.
            </p>
            <div className="grid grid-cols-3 pt-4 text-center border-t divide-x divide-gray-200">
              <div className="p-2">
                <BedDouble
                  className="mx-auto mb-2 text-secondary-foreground"
                  size={35}
                />
                <p className="text-2xl font-semibold text-gray-800">{property.bedRoom}</p>
                <p className="text-sm text-gray-500">{t('bedroom')}</p>
              </div>
              <div className="p-2">
                <Bath
                  className="mx-auto mb-2 text-secondary-foreground"
                  size={35}
                />
                <p className="text-xl font-bold text-gray-800">{property.bathRoom}</p>
                <p className="text-sm text-gray-500">{t('bathroom')}</p>
              </div>
              <div className="p-2">
                <Square className="mx-auto mb-2 text-primary" size={35} />
                <p className="text-xl font-bold text-gray-800">{property.length}</p>
                <p className="text-sm text-gray-500">{t('square_feet')}</p>
              </div>
            </div>
          </div>

          {/* --- Agent Info Card  --- */}
          <div className="flex flex-col items-center gap-6 p-6 bg-white border border-gray-200 rounded-2xl sm:flex-row">
            <img
              src="https://i.pravatar.cc/150?u=johndoe2"
              alt="John Doe"
              className="flex-shrink-0 object-cover w-24 h-24 border-4 border-gray-100 rounded-full"
            />
            <div className="flex flex-col flex-1 w-full space-y-2 text-center sm:text-left">
              <div className="flex flex-col items-center sm:flex-row sm:justify-between sm:items-baseline">
                <h3 className="text-2xl font-semibold">John Doe</h3>
                <p className="text-sm font-semibold text-destructive ">
                  REGID: 00123456
                </p>
              </div>

              <p className="text-gray-500">Royal Star Real Estate Co.,Ltd</p>

              <div className="flex flex-col items-center justify-center gap-2 pt-3 mt-2 border-t sm:flex-row sm:justify-between">
                <p className="text-lg font-semibold text-secondary-foreground">
                  +959777333444
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  className="border border-secondary-foreground"
                  onClick={() => navigate(`/agents/${1}`)}
                >
                  {t('detail')}
                </Button>
              </div>

              <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
                <Button size="lg">
                  <Phone size={16} /> {t('call')}
                </Button>
                <Button size="lg">
                  <MessageCircle size={16} /> {t('message')}
                </Button>
              </div>
            </div>
          </div>
          {/* --- End of Agent Info Card --- */}
        </div>

        {/* Right Column */}
        <div className="p-6 bg-white border border-gray-200 md:p-8 rounded-2xl">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">
            {t('key_features.heading')}{' '}
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
              Master suite with a spa-inspired bathroom and ocean-facing balcony
            </FeatureItem>
            <FeatureItem>Private garage and ample storage space</FeatureItem>
          </ul>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import mockData from '@mocks';
import { Property } from 'src/types/model.type';
import { useEffect, useState } from 'react';
import { PropertyCard } from '../components/PropertyCard';
import { PostStatus, PostType } from '../../../types/model.type';
import { useParams } from 'react-router-dom';
import { BedDouble, Bath, Square, Phone, MessageCircle, MapPin, PhoneCall } from 'lucide-react';
import { Button } from '@ui';

const PropertyCardGroup = ({ properties }: { properties: Property[] }) => {
  if (!properties || properties.length === 0) {
    return (
      <div className="py-10 text-center text-gray-500"><p>No properties found.</p></div>
    )
  }
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-3">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  )
}

const AgentDetail = () => {
  const { id } = useParams<{ id: string }>();

  const saleProperties = mockData.properties.slice(0, 6).filter((property) => {
    const post = mockData.posts.find((post) => post.propertyId === property.id);
    return (post && post.type === PostType.Sale)
  });

  const soldProperties = mockData.properties.filter((property) => {
    const post = mockData.posts.find((post) => post.propertyId === property.id);
    return (post && post.status === PostStatus.Sold || post.status === PostStatus.Rented)
  });

  return <section className="w-full px-4 py-6 mx-auto sm:max-w-3xl md:max-w-4xl lg:max-w-7xl lg:px-0">
    <nav className="flex text-gray-700 text-sm" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <a href="/" className="inline-flex items-center text-gray-700 hover:text-blue-600">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 3.293l6 6V17a1 1 0 01-1 1h-3v-4H8v4H5a1 1 0 01-1-1V9.293l6-6z" />
            </svg>
            Home
          </a>
        </li>
        <li>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-gray-400 mx-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M7.05 4.05a.5.5 0 01.7 0L13 9.293l-5.25 5.25a.5.5 0 01-.7-.7L11.793 9.5 7.05 4.757a.5.5 0 010-.707z" />
            </svg>
            <a href="/agents" className="ml-1 text-gray-700 hover:text-blue-600">Agents</a>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-gray-400 mx-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M7.05 4.05a.5.5 0 01.7 0L13 9.293l-5.25 5.25a.5.5 0 01-.7-.7L11.793 9.5 7.05 4.757a.5.5 0 010-.707z" />
            </svg>
            <span className="ml-1 text-gray-400">{id}</span>
          </div>
        </li>
      </ol>
    </nav>

    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mt-8">
      <div className="space-y-2 lg:col-span-2">
        <div className="flex flex-col items-center gap-6 p-6 bg-white sm:flex-row">
          <img
            src="https://i.pravatar.cc/150?u=johndoe2"
            alt="John Doe"
            className="flex-shrink-0 object-cover w-1/4 h-1/4 border-4 border-gray-100 "
          />
          <div className="flex flex-col flex-1 w-full space-y-2 text-center sm:text-left">
            <div className="flex flex-col items-center sm:flex-row sm:justify-between sm:items-baseline">
              <h3 className="text-xl font-bold font-semibold text-secondary-foreground">John Doe</h3>
            </div>

            <p className="text-gray-500">Senior Property Consultant</p>
            <p className="text-gray-500">Active Listing <b className="text-red-400">10</b></p>

            <div className="flex items-start justify-center gap-2 mt-2 text-sm text-gray-500 sm:justify-start">
              <MapPin size={14} className="mt-0.5 flex-shrink-0" />
              <span>No.1, Thiri Myitta Street, Hlaing Township, Yangon</span>
            </div>

            <div className="flex items-start justify-center gap-2 mt-2 text-sm text-gray-500 sm:justify-start">
              <PhoneCall size={14} className="mt-0.5 flex-shrink-0" />
              <span>+95 98887774422</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 lg:gap-1 md:flex-nowrap">
          <div className="flex px-2">
            <MapPin size={14} className="mt-0.5 mx-2 flex-shrink-0" />
            <span>1 Apartment</span>
          </div>

          <div className="flex px-2">
            <MapPin size={14} className="mt-0.5 mx-2 flex-shrink-0" />
            <span>1 Condo</span>
          </div>

          <div className="flex px-2">
            <MapPin size={14} className="mt-0.5 mx-2 flex-shrink-0" />
            <span>1 Homes</span>
          </div>

          <div className="flex px-2">
            <MapPin size={14} className="mt-0.5 mx-2 flex-shrink-0" />
            <span>1 Office</span>
          </div>

          <div className="flex px-2">
            <MapPin size={14} className="mt-0.5 mx-2 flex-shrink-0" />
            <span>1 Villas</span>
          </div>

        </div>

        <div className="p-4 bg-white">
          <h4 className="mb-4 text-2xl text-gray-800">
            About
          </h4>
          <p className="mb-6 leading-relaxed text-gray-500">
            With a deep understanding of the Yangon property market, Olivia Carter is known for her strategic insights and commitment to delivering tailored solutions. Whether you're buying, selling, or investing, Olivia ensures a smooth process through proactive communication and in-depth market knowledge. She has successfully helped over 300 clients make confident property decisions.
          </p>
          <h4 className="mb-4 font-bold text-gray-500">
            Agent Licence <span className='font-semibold text-secondary-foreground'>{id}</span>
          </h4>
          <h4 className="mb-4 font-bold text-gray-500">
            Service Area : <span className="text-gray-800 text-sm leading-relaxed">Hlaing Township, Yangon</span>
          </h4>
        </div>
      </div>

      <div className="p-6 border border-blue-400 md:p-8 rounded-2xl lg:col-span-1 lg:max-w-md mx-auto">
        <form className="max-w-xl mx-auto p-4 space-y-4">
          <h4 className="text-1xl text-gray-800">Contact Agency for More Information</h4>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" required
              className="h-8 mt-1 block w-full rounded-md border border-gray-400 border-solid shadow-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" required
              className="h-8 mt-1 block w-full rounded-md border border-gray-400 border-solid shadow-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Contact Number</label>
            <input type="tel" id="phone" name="phone"
              className="h-8 mt-1 block w-full rounded-md border border-gray-400 border-solid shadow-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea id="description" name="description" rows={5}
              className="caret-blue-600 mt-1 block w-full rounded-md border border-gray-400 border-solid shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
          </div>

          <div>
            <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
              <Button size="lg">
                <Phone size={16} /> Call
              </Button>
              <Button size="lg">
                <MessageCircle size={16} /> Message
              </Button>
            </div>
          </div>
        </form>

      </div>
    </div>

    <h2 className="py-5 text-xl font-semibold md:text-2xl">
      Properties Available
    </h2>

    <div className="py-5 inline-flex rounded-md shadow-sm" role="group">
      <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700">
        Sale
      </button>
      <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-lg hover:bg-gray-100 hover:text-blue-700">
        Rent
      </button>
    </div>

    <PropertyCardGroup properties={saleProperties} />

    <h2 className="mt-8 mb-2 py-5 text-xl font-semibold md:text-2xl">
      Properties Sold / Rented
    </h2>

    <div className="py-5 inline-flex rounded-md shadow-sm" role="group">
      <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700">
        Sale
      </button>
      <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-lg hover:bg-gray-100 hover:text-blue-700">
        Rent
      </button>
    </div>

    <PropertyCardGroup properties={soldProperties} />
  </section>;
};

export default AgentDetail;

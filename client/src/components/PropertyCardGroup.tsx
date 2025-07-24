import { Property } from 'src/types/model.type';
import { PropertyCard } from './PropertyCard';

export const PropertyCardGroup = ({
  properties,
  title,
}: {
  properties: Property[];
  title: string;
}) => {
  if (!properties || properties.length === 0) {
    return (
      <div className="py-10 text-center text-gray-500">
        <p>No properties found.</p>
      </div>
    );
  }
  return (
    <section className="flex flex-col">
      <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl">{title}</h2>
      <SaleRentFilter />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-3">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
};

const SaleRentFilter = () => {
  return (
    <div className="inline-flex py-5 rounded-md shadow-sm" role="group">
      <button
        type="button"
        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700"
      >
        Sale
      </button>
      <button
        type="button"
        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-lg hover:bg-gray-100 hover:text-blue-700"
      >
        Rent
      </button>
    </div>
  );
};

import { Property } from '@types';
import { PropertyCard } from './PropertyCard';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const PropertyCardGroup = ({
  properties,
  title,
  onChange,
  filterType,
}: {
  properties: Property[];
  title: string;
  onChange: (change) => void;
  filterType: 'postType' | 'postStatus';
}) => {
  if (!properties || properties.length === 0) {
    const {t} = useTranslation();
    return (
      <div className="py-10 text-center text-gray-500">
        <p>{t('not_found_property')}</p>
      </div>
    );
  }
  return (
    <section className="flex flex-col">
      <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl">{title}</h2>
      <SaleRentFilter onChange={onChange} filterType={filterType} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-3">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
};

const SaleRentFilter = ({
  onChange,
  filterType,
}: {
  onChange: (change) => void;
  filterType: 'postType' | 'postStatus';
}) => {
  const [activeOne, setActiveOne] = useState<'Sale' | 'Rent'>('Sale');
    const {t} = useTranslation();

  return (
    <div className="inline-flex py-5 rounded-md shadow-sm" role="group">
      <button
        onClick={() => {
          setActiveOne('Sale');
          onChange(filterType === 'postType' ? 'Sale' : 'Sold');
        }}
        type="button"
        className={` ${activeOne === 'Sale' && 'border-secondary-foreground text-secondary-foreground'} px-4 py-2 text-sm font-medium bg-background border border-border rounded-l-lg hover:bg-gray-100 hover:text-secondary-foreground text-gray-500`}
      >
        {t('sale')}
      </button>
      <button
        onClick={() => {
          setActiveOne('Rent');
          onChange(filterType === 'postType' ? 'Rent' : 'Rented');
        }}
        type="button"
        className={` ${activeOne === 'Rent' && 'border-secondary-foreground text-secondary-foreground'} px-4 py-2 text-sm font-medium bg-background border border-border rounded-r-lg hover:bg-gray-100 hover:text-secondary-foreground text-gray-500`}
      >
           {t('rent')}
      </button>
    </div>
  );
};

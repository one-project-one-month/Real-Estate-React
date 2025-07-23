import { Button } from '@ui';
import mockData from '@mocks';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Property } from '../../../types/model.type';

import { useEffect, useState } from 'react';
import { PropertyCard } from './PropertyCard';

const FeatureHeader = ({
  selectedType,
  setSelectedType,
}: {
  selectedType: number;
  setSelectedType: (typeId: number) => void;
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-5">
      <h5 className="text-sm text-secondary-foreground md:text-base">
        Featured Properties
      </h5>
      <h2 className="mb-2 text-xl font-semibold md:text-2xl">
        Recommended for you
      </h2>

      {/* type card */}
      <div className="flex flex-wrap items-center justify-center max-w-2xl gap-3">
        {mockData.propertyTypes?.map(({ name, id }) => (
          <Button
            key={id}
            onClick={() => setSelectedType(id)}
            variant={selectedType === id ? 'default' : 'info'}
            className="text-xs rounded-xl"
            size="sm"
          >
            {name}
          </Button>
        ))}
      </div>
    </div>
  );
};

const PropertyCardGroup = ({ selectedTypeId }: { selectedTypeId: number }) => {
  const [filteredList, setFilteredList] = useState<Property[]>(
    mockData.properties
  );

  // filter by type
  useEffect(() => {
    if (selectedTypeId !== 0) {
      const newFilteredList = mockData.properties.filter(
        (prop) => prop.propertyTypeId === selectedTypeId
      );
      console.log(newFilteredList);
      setFilteredList(newFilteredList);
    } else {
      setFilteredList(mockData.properties);
    }
  }, [selectedTypeId]);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-3">
      {filteredList.slice(0, 3).map((prop) => (
        <PropertyCard key={prop.id} property={prop} />
      ))}
    </div>
  );
};

// pagination buttons (not working)
const Pagination = () => {
  return (
    <div className="flex items-center justify-end gap-2 my-5">
      <Button
        variant="info_outline"
        className="w-10 h-10 rounded-full "
        size="sm"
      >
        <ArrowLeft className="size-4 " />
      </Button>
      <Button
        variant="info_outline"
        className="w-10 h-10 rounded-full"
        size="sm"
      >
        <ArrowRight className="size-4 " />
      </Button>
    </div>
  );
};

export const FeaturedProperties = () => {
  const [selectedType, setSelectedType] = useState<number>(0);

  return (
    <section className="w-full px-4 py-6 mx-auto sm:max-w-3xl md:max-4xl lg:max-w-7xl lg:px-0">
      <FeatureHeader
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      <PropertyCardGroup selectedTypeId={selectedType} />
      <Pagination />
    </section>
  );
};

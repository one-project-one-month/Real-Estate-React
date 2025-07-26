import { Button } from '@ui';
import mockData from '@mocks';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Post } from '@types';
import { useEffect, useState } from 'react';
import { PropertyCard } from './PropertyCard';
import { useTranslation } from 'react-i18next';

const per_page = 3;

const FeatureHeader = ({
  selectedType,
  setSelectedType,
}: {
  selectedType: number;
  setSelectedType: (typeId: number) => void;
}) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center gap-3 pb-5">
      <h5 className="text-sm text-secondary-foreground md:text-base">
        {t('featured_properties')}
      </h5>
      <h2 className="mb-2 font-semibold md:text-3xl">{t('recommended')}</h2>

      <div className="flex flex-wrap items-center justify-center max-w-2xl gap-3">
        {mockData.propertyTypes?.map(({ name, id }) => (
          <Button
            key={id}
            onClick={() => setSelectedType(id)}
            variant={selectedType === id ? 'default' : 'info'}
            className="text-xs rounded-xl"
            size="sm"
          >
            {t(`property_types.${name.toLowerCase().replace(/\s+/g, '_')}`)}
          </Button>
        ))}
      </div>
    </div>
  );
};

const PropertyCardGroup = ({
  selectedTypeId,
  currentPage,
}: {
  selectedTypeId: number;
  currentPage: number;
}) => {
  const [filteredList, setFilteredList] = useState<Post[]>(mockData.posts);

  useEffect(() => {
    if (selectedTypeId !== 0) {
      const newFilteredList = mockData.posts.filter(
        (prop) => prop.propertyId === selectedTypeId
      );
      setFilteredList(newFilteredList);
    } else {
      setFilteredList(mockData.posts);
    }
  }, [selectedTypeId]);

  const startIdx = (currentPage - 1) * per_page;
  const currentPageItems = filteredList.slice(startIdx, startIdx + per_page);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-3">
      {currentPageItems.map((post) => {
        const property = mockData.properties.find(
          (p) => p.id === post.propertyId
        );
        return (
          property && (
            <PropertyCard key={post.id} property={property} variant="square" />
          )
        );
      })}
    </div>
  );
};

const Pagination = ({
  currentPage,
  totalPages,
  setCurrentPage,
}: {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}) => {
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="flex items-center justify-between mx-1  mt-3">
      <span className="text-sm font-medium ">
        {currentPage} of {totalPages}
      </span>

      <div className="space-x-3">
        <Button
          onClick={handlePrev}
          variant="info_outline"
          className="w-10 h-10 rounded-full"
          size="sm"
          disabled={currentPage === 1}
        >
          <ArrowLeft className="size-4" />
        </Button>

        <Button
          onClick={handleNext}
          variant="info_outline"
          className="w-10 h-10 rounded-full"
          size="sm"
          disabled={currentPage === totalPages}
        >
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </div>
  );
};

export const FeaturedProperties = () => {
  const [selectedType, setSelectedType] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filteredList, setFilteredList] = useState<Post[]>(mockData.posts);

  useEffect(() => {
    const newFilteredList =
      selectedType === 0
        ? mockData.posts
        : mockData.posts.filter((post) => post.propertyId === selectedType);
    setFilteredList(newFilteredList);
    setCurrentPage(1);
  }, [selectedType]);

  const totalPages = Math.ceil(filteredList.length / per_page);

  return (
    <section className="w-full px-4 mx-auto sm:max-w-3xl md:max-4xl lg:max-w-7xl lg:px-0">
      <FeatureHeader
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      <PropertyCardGroup
        selectedTypeId={selectedType}
        currentPage={currentPage}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
};

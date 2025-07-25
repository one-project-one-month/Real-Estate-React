import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card } from '@ui';
import { Input } from './Input';
import { PostQueryParams } from '../../../client/src/types/post.type';
import { formatPath } from '@utils';
import { FilterDropdown } from './PostSearchBar'; // adjust if needed
import mockData from '@mocks';
import { PostType } from '@types';

export const PostFilterCard = ({ postType }: { postType: PostType }) => {
  const [queryParams, setQueryParams] = useState<PostQueryParams>({
    region: '',
    postType: postType,
    township: '',
    street: '',
    propertyType: '',
    minPrice: undefined,
    maxPrice: undefined,
  });

  const navigate = useNavigate();

  const handleChange = (
    key: keyof PostQueryParams,
    value: string | number | undefined
  ) => {
    setQueryParams((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const applyFilters = () => {
    const path = formatPath('/properties', queryParams);
    navigate(path);
  };

  const regions = Array.from(new Set(mockData.properties.map((p) => p.region)));
  const townships = Array.from(
    new Set(mockData.properties.map((p) => p.township))
  );
  const streets = Array.from(new Set(mockData.properties.map((p) => p.street)));
  const propertyTypes = mockData.propertyTypes.map((pt) => pt.name);

  return (
    <Card className="w-full max-w-md p-6 space-y-5 transition-none border shadow-sm hover:translate-y-0 rounded-2xl border-border bg-background">
      <h2 className="text-gray-500 text-md">Filter Properties</h2>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        <FilterDropdown
          label="Region"
          options={regions}
          value={queryParams.region || ''}
          onChange={(val) => handleChange('region', val)}
        />

        <FilterDropdown
          label="Township"
          options={townships}
          value={queryParams.township || ''}
          onChange={(val) => handleChange('township', val)}
        />

        <FilterDropdown
          label="Street"
          options={streets}
          value={queryParams.street || ''}
          onChange={(val) => handleChange('street', val)}
        />

        <FilterDropdown
          label="Property Type"
          options={propertyTypes}
          value={queryParams.propertyType || ''}
          onChange={(val) => handleChange('propertyType', val)}
        />

        <FilterDropdown
          className="md:col-span-2"
          label="Sale"
          options={[PostType.Sale, PostType.Rent, PostType.Lease]}
          value={queryParams.postType || PostType.Sale}
          onChange={(val) => handleChange('postType', val)}
        />

        <Input
          type="number"
          placeholder="Min Price"
          value={queryParams.minPrice ?? ''}
          onChange={(e) =>
            handleChange(
              'minPrice',
              e.target.value ? Number(e.target.value) : undefined
            )
          }
          className="text-black"
        />
        <Input
          type="number"
          placeholder="Max Price"
          value={queryParams.maxPrice ?? ''}
          onChange={(e) =>
            handleChange(
              'maxPrice',
              e.target.value ? Number(e.target.value) : undefined
            )
          }
          className="text-black"
        />
      </div>

      <Button onClick={applyFilters} size="lg" className="w-full">
        Apply Filters
      </Button>
    </Card>
  );
};

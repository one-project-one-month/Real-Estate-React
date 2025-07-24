import React, { useState } from 'react';
import { Input } from './Input';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@ui';
import { ChevronDown } from 'lucide-react';
import { PostType, PropertyType } from '../types/model.type';
import { PostQueryParams } from '../types/post.type';
import { initialize, getStates } from '@tm11/mmgeo';
import { propertyTypes } from '../../../mocks/propertyTypes';
import { parsePriceRange } from '@utils';
import { useMutation } from '@tanstack/react-query';
import { searchPostsAsync } from '../services/post.service';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

initialize({ language: 'eng' });

const priceRangeOptions = [
  'Below 50 million MMK',
  '50–100 million MMK',
  '100–200 million MMK',
  '200–300 million MMK',
  '300–500 million MMK',
  '500–1,000 million MMK',
  '1,000–2,000 million MMK',
  '2,000–3,000 million MMK',
  '3,000–5,000 million MMK',
  '5,000–10,000 million MMK',
  'Above 10,000 million MMK',
];

interface FilterDropdownProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const FilterDropdown = ({
  label,
  options,
  value,
  onChange,
}: FilterDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button
          variant="secondary"
          className="flex items-center w-full h-10 gap-2 px-4 border rounded-md border-border"
        >
          {value || label}
          <ChevronDown size={16} className="ml-auto" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-full">
        <div className="overflow-y-auto max-h-48">
          {options.map((option) => (
            <DropdownMenuItem
              key={option}
              onClick={() => onChange(option)}
              className="cursor-pointer hover:bg-primary/10"
            >
              {option}
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

interface PostSearchBarProps {
  filterIncluded: boolean;
  onSearch: (query: PostQueryParams) => void;
}

export const PostSearchBar: React.FC<PostSearchBarProps> = ({
  filterIncluded,
  onSearch,
}) => {
  const [searchQueryParams, setSearchQueryParams] = useState<PostQueryParams>({
    postType: PostType.Sale,
    region: '',
    township: '',
  });
  const [selectedPriceRange, setSelectedPriceRange] = useState('');

  const states = getStates().map((state) => state.getName());

  return (
    <div className="w-full max-w-5xl p-4 bg-white border-t-4 shadow-md border-primary md:p-6 rounded-xl">
      {/* Top row: PostType, Input, Search Button */}
      <div className="flex flex-col gap-3 md:flex-row md:gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button
              variant="secondary"
              className="flex items-center w-full h-10 gap-2 px-4 border rounded-md border-border md:w-auto"
            >
              {searchQueryParams.postType.toUpperCase()}
              <ChevronDown size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {[PostType.Sale, PostType.Rent, PostType.Lease].map((option) => (
              <DropdownMenuItem
                key={option}
                onClick={() =>
                  setSearchQueryParams({
                    ...searchQueryParams,
                    postType: option,
                  })
                }
                className="cursor-pointer hover:bg-primary/50"
              >
                {option.toUpperCase()}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <Input
          placeholder="Search by keywords"
          className="w-full h-10 border-border"
          value={searchQueryParams.search || ''}
          onChange={(e) =>
            setSearchQueryParams((prev) => ({
              ...prev,
              search: e.target.value,
            }))
          }
        />

        <Button
          className="w-full h-10 px-6 border border-l-0 rounded-md md:w-auto"
          onClick={() => onSearch(searchQueryParams)}
        >
          Search
        </Button>
      </div>

      {filterIncluded && (
        <div className="grid grid-cols-1 gap-3 mt-4 sm:grid-cols-2 md:grid-cols-3">
          <FilterDropdown
            label="Select Region"
            options={states}
            value={searchQueryParams.region || ''}
            onChange={(value) =>
              setSearchQueryParams((prev) => ({
                ...prev,
                region: value.toLowerCase(),
              }))
            }
          />
          <FilterDropdown
            label="Select Property Type"
            options={propertyTypes.map((type) => type.name)}
            value={searchQueryParams.propertyType || ''}
            onChange={(value) =>
              setSearchQueryParams((prev) => ({
                ...prev,
                propertyType: value.toLowerCase(),
              }))
            }
          />
          <FilterDropdown
            label="Select Price Range"
            options={priceRangeOptions}
            value={selectedPriceRange}
            onChange={(value) => {
              setSelectedPriceRange(value);
              const { minPrice, maxPrice } = parsePriceRange(value);
              setSearchQueryParams((prev) => ({
                ...prev,
                minPrice,
                maxPrice,
              }));
            }}
          />
        </div>
      )}
    </div>
  );
};

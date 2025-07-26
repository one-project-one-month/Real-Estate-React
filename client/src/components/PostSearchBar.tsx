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
import { PostType } from '@types';
import { PostQueryParams } from '../types/post.type';
import { initialize, getStates } from '@tm11/mmgeo';
import { propertyTypes } from '../../../mocks/propertyTypes';
import { parsePriceRange } from '@utils';
import { useTranslation } from 'react-i18next';

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
  className?: string;
  type?: string;
}

export const FilterDropdown = ({
  label,
  options,
  value,
  onChange,
  className,
  type = 'region',
}: FilterDropdownProps) => {
  const { t } = useTranslation();

  const getTranslationKey = (val: string) => {
    const formatted = val.toLowerCase().replace(/\s+/g, '_');
    switch (type) {
      case 'region':
        return `regions_and_states.${formatted}`;
      case 'property':
        return `property_types.${formatted}`;
      case 'township':
        return `cities.${formatted}`;
          case 'postType':
        return `${formatted}`;
      default:
        return val;
    }
  };

  const renderLabel = (val?: string) => {
    if (!val) return label;
    const key = getTranslationKey(val);
    return key === val ? val : t(key);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={`${className} focus:outline-none `}>
        <Button
          variant="secondary"
          className="flex items-center w-full h-10 gap-2 px-4 border rounded-md border-border"
        >
          {renderLabel(value)}

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
              {renderLabel(option)}
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
  const { t } = useTranslation();

  const states = getStates().map((state) => state.getName());

  return (
    <div className="w-full max-w-5xl p-4 bg-white border-t-4 shadow-md border-primary md:p-6 rounded-xl">
      <div className="flex flex-col gap-3 md:flex-row md:gap-3">
        {filterIncluded && (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button
                variant="secondary"
                className="flex items-center w-full h-10 gap-2 px-4 border rounded-md border-border md:w-auto"
              >
                {t(`${searchQueryParams.postType.toLowerCase()}`)}

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
                  {t(option.toLowerCase())}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}

        <Input
          placeholder={t('search')}
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
          {t('search')}
        </Button>
      </div>

      {filterIncluded && (
        <div className="grid grid-cols-1 gap-3 mt-4 sm:grid-cols-2 md:grid-cols-3">
          <FilterDropdown
            label={t('select_region')}
            options={states}
            value={searchQueryParams.region || ''}
            onChange={(value) =>
              setSearchQueryParams((prev) => ({
                ...prev,
                region: value,
              }))
            }
            type="region"
          />
          <FilterDropdown
            label={t('select_property_type')}
            options={propertyTypes.map((type) => type.name)}
            value={searchQueryParams.propertyType || ''}
            onChange={(value) =>
              setSearchQueryParams((prev) => ({
                ...prev,
                propertyType: value,
              }))
            }
            type="property"
          />
          <FilterDropdown
            label={t('select_price')}
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
            type="price"
          />
        </div>
      )}
    </div>
  );
};

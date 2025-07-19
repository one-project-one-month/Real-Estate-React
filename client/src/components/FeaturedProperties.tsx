import { Button, Card, CardImage, CardContent, CardFooter } from '@ui';
import mockData from '@mocks';
const { propertyTypes, properties } = mockData;
import { ArrowLeft, ArrowRight, Bed, Bath, Home } from 'lucide-react';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FeatureHeader = () => {
  const [selectType, setSelectedType] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center space-y-3 py-5">
      <h5 className="text-primary text-lg md:text-xl">Featured Properties</h5>
      <h2 className="text-2xl font-semibold md:text-3xl pb-3">
        Recommended for you
      </h2>

      {/* type card */}
      <div className="flex flex-wrap items-center justify-center  gap-3">
        {propertyTypes?.slice(0, 6)?.map(({ name, id }) => (
          <Button
            key={id}
            onClick={() => setSelectedType(id)}
            variant={selectType === id ? 'default' : 'info'}
            className="rounded-xl"
            size="lg"
          >
            {name}
          </Button>
        ))}
      </div>
    </div>
  );
};

const PropertyCard = ({
  propertyId,
  image,
  title,
  bedrooms,
  bathrooms,
  type,
  price,
  currency,
  agent,
}: {
  propertyId: number;
  image: string;
  title: string;
  bedrooms: number;
  bathrooms: number;
  type: number | string;
  price: number | string;
  currency: string;
  agent: number | string;
}) => {
  const nav = useNavigate();
  return (
    <Card variant="default" size="default" >
      <CardImage src={image} alt={title} />
      <CardContent>
        <h3 className="font-semibold text-black text-lg">{title}</h3>
        <div className="flex items-center gap-2 lg:gap-1 flex-wrap md:flex-nowrap  ">
          {bathrooms > 0 && (
            <Button
              variant="info"
              className="rounded-xl    flex items-center gap-1"
              size="md"
            >
              <Bath className="size-4 " /> {bathrooms}-Bathroom
            </Button>
          )}

          {bedrooms > 0 && (
            <Button
              variant="info"
              className="rounded-xl flex items-center gap-1"
              size="md"
            >
              <Bed className="size-4" /> {bedrooms}-Bedroom
            </Button>
          )}

          <Button
            variant="info"
            className="rounded-xl flex items-center gap-1"
            size="md"
          >
            <Home className="size-4" /> Villa
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <div className="text-sm flex items-start gap-4">
          <div className="flex flex-col items-center">
            <img
              className="rounded-full object-cover w-10 h-10  overflow-hidden "
              src="/agent/agent.png"
              alt={'agent'}
            />
            <p className="text-xs text-black font-semibold ">Agent</p>
          </div>
          <div className="flex flex-col font-semibold gap-1 items-start">
            <p className="text-black">Price</p>
            <span className="mt-auto text-primary">
              {price && currency} {price && price?.toLocaleString()}
            </span>
          </div>
        </div>
        <Button
        onClick={() => nav(`/property/${propertyId}`)}
          size="sm"
          variant="default"
          className="font-normal py-5 text-xs"
        >
          View Property Details
        </Button>
      </CardFooter>
    </Card>
  );
};

const PropertyCardGroup = () => (
  <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-3">
    {properties?.map(
      ({
        id,
        street,
        bedRoom,
        bathRoom,
        propertyTypeId,
        currency,
        price,
        ownerId,
      }) => (
        <PropertyCard
          key={id}
          propertyId={id}
          image={'property-test.png'}
          title={street}
          bedrooms={bedRoom}
          bathrooms={bathRoom}
          type={propertyTypeId}
          currency={currency}
          price={price}
          agent={ownerId}
        />
      )
    )}
  </div>
);

const Pagination = () => {
  return (
    <div className="flex items-center gap-2 justify-end my-5">
      <Button
        variant="info_outline"
        className="rounded-full h-10 w-10 "
        size="sm"
      >
        <ArrowLeft className="size-4 " />
      </Button>
      <Button
        variant="info_outline"
        className="rounded-full h-10 w-10"
        size="sm"
      >
        <ArrowRight className="size-4 " />
      </Button>
    </div>
  );
};

const FeaturedProperties = () => {
  return (
    <section className="w-full sm:max-w-3xl md:max-4xl lg:max-w-7xl mx-auto  px-4 lg:px-0 py-6">
      <FeatureHeader />
      <PropertyCardGroup />
      <Pagination />
    </section>
  );
};

export default FeaturedProperties;

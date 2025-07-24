import { Button, Card, CardImage, CardFooter, CardContent } from '@ui';
import { Bath, Home, Bed } from 'lucide-react';
import { Property } from '../../../types/model.type';
import { useNavigate } from 'react-router-dom';
import { formatCurrency } from '@utils';
import mockData from '@mocks';

export const PropertyCard = ({ property }: { property: Property }) => {
  const nav = useNavigate();

  const propertyType = mockData.propertyTypes.find(
    (type) => type.id === property.propertyTypeId
  );

  return (
    <Card
      variant="default"
      size="default"
      className="flex flex-col justify-between border border-border"
    >
      <CardImage
        src="/property-test.png"
        alt=""
        className="object-cover w-full h-48"
      />

      <CardContent className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-black line-clamp-1">
          {`${property.township}, ${property.street}, ${property.floor}`}
        </h3>

        <div className="flex flex-wrap gap-2">
          {property.bathRoom > 0 && (
            <Button
              variant="info"
              className="flex items-center gap-1 text-xs rounded-xl"
              size="sm"
            >
              <Bath className="size-4" /> {property.bathRoom}-Bathroom
            </Button>
          )}
          {property.bedRoom > 0 && (
            <Button
              variant="info"
              className="flex items-center gap-1 text-xs rounded-xl"
              size="sm"
            >
              <Bed className="size-4" /> {property.bedRoom}-Bedroom
            </Button>
          )}
          <Button
            variant="info"
            className="flex items-center gap-1 text-xs rounded-xl"
            size="sm"
          >
            <Home className="size-4" />
            {propertyType?.name}
          </Button>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <img
            className="object-cover w-10 h-10 rounded-full"
            src="/agent/agent.png"
            alt="agent"
          />
          <span className="text-sm font-semibold text-secondary-foreground">
            {property.price &&
              formatCurrency(property.price, property.currency)}
          </span>
        </div>

        <Button
          onClick={() => nav(`/property/${property.id}`)}
          variant="default"
          size="sm"
          className="w-full sm:w-auto"
        >
          View Property Details
        </Button>
      </CardFooter>
    </Card>
  );
};

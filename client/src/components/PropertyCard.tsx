import { Button, Card, CardImage, CardFooter, CardContent } from '@ui';
import { Bath, Home, Bed } from 'lucide-react';
import { Property } from '../../../types/model.type';
import { useNavigate } from 'react-router-dom';
import { formatCurrency } from '@utils';
import mockData from '@mocks';

const PropertyCard = ({ property }: { property: Property }) => {
  const nav = useNavigate();
  return (
    <Card variant="default" size="default" className="border border-border">
      <CardImage src="/property-test.png" alt="" />
      <CardContent>
        <h3 className="text-lg font-semibold text-black line-clamp-1">{`${property.township}, ${property.street}, ${property.floor}`}</h3>
        <div className="flex flex-wrap items-center gap-2 lg:gap-1 md:flex-nowrap ">
          {property.bathRoom > 0 && (
            <Button
              variant="info"
              className="flex items-center gap-1 text-xs rounded-xl"
              size="sm"
            >
              <Bath className="size-4 " /> {property.bathRoom}-Bathroom
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
            {
              mockData.propertyTypes.find(
                (type) => type.id === property.propertyTypeId
              ).name
            }
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex items-center justify-center gap-4 text-sm">
          <div className="flex flex-col items-center">
            <img
              className="object-cover w-10 h-10 overflow-hidden rounded-full "
              src="/agent/agent.png"
              alt={'agent'}
            />
          </div>
          <span className="font-semibold text-secondary-foreground">
            {property.price &&
              formatCurrency(property.price, property.currency)}
          </span>
        </div>
        <Button
          onClick={() => nav(`/property/${property.id}`)}
          variant="default"
        >
          View Property Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;

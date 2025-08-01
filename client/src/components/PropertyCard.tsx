import { Button, Card, CardImage, CardFooter, CardContent } from '@ui';
import { Bath, Home, Bed } from 'lucide-react';
import { Property } from '@types';
import { useNavigate } from 'react-router-dom';
import { formatCurrency } from '@utils';
import mockData from '@mocks';
import { useTranslation } from 'react-i18next';

type PropertyCardProps = {
  property: Property | null;
  variant?: 'square' | 'horizontal';
};

export const PropertyCard = ({
  property,
  variant = 'square',
}: PropertyCardProps) => {
  const nav = useNavigate();
  const { t } = useTranslation();

  // Early return if property is null or undefined
  if (!property) {
    return null;
  }

  const propertyType = mockData.propertyTypes.find(
    (type) => type.id === property.propertyTypeId
  );

  const translatedTownship = t(
    `cities.${property?.township?.toLowerCase().replace(/\s+/g, '_')}`
  );
  const street = property?.street || '';
  const floor = property?.floor || '';

  const propertyInfo = (
    <>
      <h3 className="text-lg font-semibold text-black line-clamp-1">
        {`${translatedTownship}, ${street}, ${floor}`}
      </h3>

      <div className="flex flex-wrap gap-2">
        {property.bathRoom > 0 && (
          <Button
            variant="info"
            className="flex items-center gap-1 text-xs rounded-xl"
            size="sm"
          >
            <Bath className="size-4" />
            {property.bathRoom}-{t('bathroom').toLowerCase()}
          </Button>
        )}
        {property.bedRoom > 0 && (
          <Button
            variant="info"
            className="flex items-center gap-1 text-xs rounded-xl"
            size="sm"
          >
            <Bed className="size-4" /> {property.bedRoom}-
            {t('bedroom').toLowerCase()}
          </Button>
        )}
        <Button
          variant="info"
          className="flex items-center gap-1 text-xs rounded-xl"
          size="sm"
        >
          <Home className="size-4" />
          {t(
            `property_types.${propertyType?.name.toLowerCase().replace(/\s+/g, '_')}`
          )}
        </Button>
      </div>
    </>
  );

  if (variant === 'horizontal') {
    return (
      <Card className="flex flex-col overflow-hidden border sm:flex-row border-border">
        <CardImage
          src="/property-test.png"
          alt=""
          className="w-full sm:w-[300px] h-48 sm:h-auto object-cover"
        />
        <div className="flex flex-col justify-between w-full gap-4 p-4">
          <CardContent className="flex flex-col gap-2">
            {propertyInfo}
          </CardContent>
          <CardFooter className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <img
                className="object-cover w-10 h-10 rounded-full"
                src="/agent/agent.png"
                alt="agent"
              />
              <span className="text-sm font-semibold text-secondary-foreground">
                {property.price && formatCurrency(property.price, 'MMK')}
              </span>
            </div>
            <Button
              onClick={() => nav(`/properties/${property.id}`)}
              variant="default"
              size="lg"
              className="w-full sm:w-auto"
            >
              {t('view_detail')}
            </Button>
          </CardFooter>
        </div>
      </Card>
    );
  }

  return (
    <Card className="flex flex-col justify-between border border-border">
      <CardImage
        src="/property-test.png"
        alt=""
        className="object-cover w-full h-48"
      />
      <CardContent className="flex flex-col gap-3">{propertyInfo}</CardContent>
      <CardFooter className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <img
            className="object-cover w-10 h-10 rounded-full"
            src="/agent/agent.png"
            alt="agent"
          />
          <span className="text-sm font-semibold text-secondary-foreground">
            {property.price && formatCurrency(property.price, 'MMK')}
          </span>
        </div>
        <Button
          onClick={() => nav(`/properties/${property.id}`)}
          variant="default"
          size="lg"
          className="w-full sm:w-auto"
        >
          {t('view_detail')}
        </Button>
      </CardFooter>
    </Card>
  );
};

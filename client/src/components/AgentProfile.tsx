import { MapPin, PhoneCall } from 'lucide-react';

interface AgentProfileProps {
  name: string;
  title: string;
  location: string;
  phone: string;
  imageUrl: string;
  activeListings: number;
}

export const AgentProfile = ({
  name,
  title,
  location,
  phone,
  imageUrl,
  activeListings,
}: AgentProfileProps) => (
  <div className="flex flex-col items-center gap-6 p-6 bg-background sm:flex-row">
    <img
      src={imageUrl}
      alt={name}
      className="object-cover w-1/4 border-4 border-gray-100 h-1/4 rounded-xl"
    />
    <div className="flex-1 w-full space-y-2 text-center sm:text-left">
      <div className="flex flex-col items-center sm:flex-row sm:justify-between">
        <h3 className="text-3xl font-bold text-secondary-foreground">{name}</h3>
      </div>
      <p className="text-gray-500">{title}</p>
      <p className="text-gray-500">
        Active Listing <b className="text-destructive">{activeListings}</b>
      </p>
      <div className="flex items-start justify-center gap-2 mt-2 text-sm text-gray-500 sm:justify-start">
        <MapPin
          size={14}
          className="mt-0.5 flex-shrink-0 text-secondary-foreground"
        />
        <span>{location}</span>
      </div>
      <div className="flex items-start justify-center gap-2 mt-2 text-sm text-gray-500 sm:justify-start">
        <PhoneCall
          size={14}
          className="mt-0.5 flex-shrink-0 text-secondary-foreground"
        />
        <span>{phone}</span>
      </div>
    </div>
  </div>
);

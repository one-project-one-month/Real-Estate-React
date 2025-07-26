import { useParams } from 'react-router-dom';
import mockData from '@mocks';
import { PostStatus, PostType } from '@types';
import { BreadcrumbNavigator } from '../components';
import {
  AgentProfile,
  AgentContactForm,
  PropertyCardGroup,
} from '../components';
import { MapPin } from 'lucide-react';
import { useState } from 'react';

interface PropertyTypeStatsProps {
  stats: string[];
}

const PropertyTypeStats = ({ stats }: PropertyTypeStatsProps) => (
  <div className="flex flex-wrap items-center gap-2 lg:gap-1 md:flex-nowrap">
    {stats.map((item, idx) => (
      <div key={idx} className="flex px-2">
        <MapPin
          size={16}
          className="mt-0.5 mx-2 flex-shrink-0 text-secondary-foreground"
        />
        <span>{item}</span>
      </div>
    ))}
  </div>
);

interface AgentAboutProps {
  id: string;
  bio: string;
  area: string;
}

export const AgentAbout = ({ id, bio, area }: AgentAboutProps) => (
  <div className="flex flex-col gap-4 p-4 bg-white">
    <h4 className="text-2xl font-semibold text-gray-800">About</h4>
    <p className="text-sm leading-relaxed text-gray-500 sm:max-w-lg md:max-w-3xl">
      {bio}
    </p>
    <h4 className="font-bold text-gray-800">
      Agent Licence{' '}
      <span className="text-sm font-normal text-gray-500">{id}</span>
    </h4>
    <h4 className="font-bold text-gray-800">
      Service Area:{' '}
      <span className="text-sm font-normal text-gray-500">{area}</span>
    </h4>
  </div>
);

export const AgentDetails = () => {
  const { id } = useParams<{ id: string }>();
  const agent = mockData.agentProfiles.find((agentProfile) => String(agentProfile.id) === id);
  const user = mockData.users.find((user) => user.id === agent.userId);
  const owner = mockData.ownerProfiles.find((owner) => owner.userId == user.id)
  const activity = mockData.allActivities.find((activity) => activity.userId = user.id)
  const [selectedPostType, setSelectedPostType] = useState<
    'Sale' | 'Rent' | null
  >('Sale');
  const [selectedPostStatus, setSelectedPostStatus] = useState<
    'Sold' | 'Rented' | null
  >('Sold');

  const saleProperties = mockData.properties.slice(0, 6).filter((property) => {
    const post = mockData.posts.find((post) => post.propertyId === property.id);
    if (!post) return false;
    if (selectedPostType === 'Sale') {
      return post.type === PostType.Sale;
    } else {
      return post.type === PostType.Rent;
    }
  });

  const soldProperties = mockData.properties.filter((property) => {
    const post = mockData.posts.find((post) => post.propertyId === property.id);
    if (!post) return false;
    if (selectedPostStatus === 'Sold') {
      return post.status === PostStatus.Sold;
    } else if (selectedPostStatus === 'Rented') {
      return post.status === PostStatus.Rented;
    }
    // return (post.status === PostStatus.Sold || post.status === PostStatus.Rented)
  });

  return (
    <section className="flex flex-col w-full gap-10 px-4 py-6 mx-auto sm:max-w-3xl md:max-w-4xl lg:max-w-7xl lg:px-0">
      <BreadcrumbNavigator
        paths={[
          { label: 'Home', href: '/' },
          { label: 'Agents', href: '/agents' },
          { label: id, isCurrent: true },
        ]}
      />

      <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <AgentProfile
            name={user?.username}
            title={user?.title}
            imageUrl="https://i.pravatar.cc/150?u=johndoe2"
            location={owner.address}
            phone={owner.phone}
            activeListings={activity.action}
          />

          <PropertyTypeStats
            stats={[
              '1 Apartment',
              '1 Condo',
              '1 Homes',
              '1 Office',
              '1 Villas',
            ]}
          />

          <AgentAbout
            id={id!}
            area="Hlaing Township, Yangon"
            bio="With a deep understanding of the Yangon property market, Olivia Carter is known for her strategic insights and commitment to delivering tailored solutions. Whether you're buying, selling, or investing, Olivia ensures a smooth process through proactive communication and in-depth market knowledge. She has successfully helped over 300 clients make confident property decisions."
          />
        </div>

        <div className="flex items-center justify-center col-span-1">
          <AgentContactForm />
        </div>
      </div>

      <PropertyCardGroup
        onChange={setSelectedPostType}
        properties={saleProperties}
        title="Properties Available"
        filterType={'postType'}
      />

      <PropertyCardGroup
        onChange={setSelectedPostStatus}
        properties={soldProperties}
        title="Properties Sold / Rented"
        filterType={'postStatus'}
      />
    </section>
  );
};

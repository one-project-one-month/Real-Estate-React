import React from 'react';
import { PropertyCard } from './PropertyCard';
import mockData from '@mocks';
import { Post, PostType } from '@types';
import { ArrowRight } from 'lucide-react';
import { PostQueryParams } from '../types/post.type';
import { useNavigate } from 'react-router-dom';

interface PostListingProps {
  posts: Post[];
}

export const PostListing: React.FC<PostListingProps> = ({ posts }) => {
  const navigate = useNavigate();

  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center col-span-2 gap-5">
        <span className="text-4xl font-bold text-secondary-foreground/30">
          No Matching Posts
        </span>
        <span
          onClick={() => navigate(`/properties?postType=${PostType.Sale}`)}
          className="flex items-center justify-center gap-3 text-sm font-medium cursor-pointer text-secondary-foreground/30 hover:underline"
        >
          See All
          <ArrowRight size={12} />
        </span>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col col-span-2 gap-3">
        {posts.map((post) => {
          const prop = mockData.properties.find(
            (prop) => prop.id === post.propertyId
          );
          return <PropertyCard property={prop} variant="horizontal" />;
        })}
      </div>
    );
  }
};

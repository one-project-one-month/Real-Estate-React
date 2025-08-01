import React from 'react';
import { PropertyCard } from '../PropertyCard';
import { PostResponse } from '../../types/post.type';
import { convertPostToProperty } from '../../utils/propertyConverter';

interface PostListingGridProps {
  posts: PostResponse[];
}

export const PostListingGrid: React.FC<PostListingGridProps> = ({ posts }) => {
  return (
    <div className="flex flex-col gap-3">
      {posts.map((post, index) => {
        const property = convertPostToProperty(post);

        return (
          <PropertyCard
            key={post.id || index}
            property={property}
            variant="horizontal"
          />
        );
      })}
    </div>
  );
};

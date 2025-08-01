import React from 'react';
import { PostType } from '@types';
import { usePostData } from '../../hooks/usePostData';
import { usePagination } from '../../hooks/usePagination';
import { PostListingError } from './PostListingError';
import { PostListingGrid } from './PostListingGrid';
import { PostListingPagination } from './PostListingPagination';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface PostListingErrorBannerProps {
  error: string;
}

export const PostListingErrorBanner: React.FC<PostListingErrorBannerProps> = ({
  error,
}) => {
  return (
    <div className="p-3 text-sm text-yellow-800 border border-yellow-200 rounded-md bg-yellow-50">
      Warning: {error}.
    </div>
  );
};

interface PostListingResultsInfoProps {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
}

export const PostListingResultsInfo: React.FC<PostListingResultsInfoProps> = ({
  currentPage,
  itemsPerPage,
  totalItems,
}) => {
  if (totalItems === 0) {
    return null;
  }

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="mt-2 text-sm text-center text-secondary-foreground/60">
      Showing {startItem} to {endItem} of {totalItems} results
    </div>
  );
};

export const PostListingEmpty: React.FC = () => {
  const navigate = useNavigate();

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
};

interface PostListingProps {
  itemsPerPage?: number;
  showPagination?: boolean;
}

const PostListingInternal: React.FC<PostListingProps> = ({
  itemsPerPage = 10,
  showPagination = true,
}) => {
  const { currentPage } = usePagination({
    totalItems: 0,
    itemsPerPage,
    showPagination,
  });

  const { posts, count, loading, error, refetch } = usePostData({
    itemsPerPage,
    currentPage,
  });

  const updatedPagination = usePagination({
    totalItems: count,
    itemsPerPage,
    showPagination,
  });

  if (loading) {
    return <div className="flex items-center justify-center">Loading...</div>;
  }

  if (error && posts.length === 0) {
    return <PostListingError error={error} onRetry={refetch} />;
  }

  if (posts.length === 0) {
    return <PostListingEmpty />;
  }

  return (
    <div className="flex flex-col col-span-2 gap-3">
      {error && posts.length > 0 && <PostListingErrorBanner error={error} />}

      <PostListingGrid posts={posts} />

      {showPagination && (
        <PostListingPagination
          currentPage={updatedPagination.currentPage}
          totalPages={updatedPagination.totalPages}
          onPageChange={updatedPagination.handlePageChange}
        />
      )}

      {showPagination && posts.length > 0 && (
        <PostListingResultsInfo
          currentPage={updatedPagination.currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={posts.length}
        />
      )}
    </div>
  );
};

// main post listing component
export const PostListing: React.FC<PostListingProps> = (props) => {
  return <PostListingInternal {...props} />;
};

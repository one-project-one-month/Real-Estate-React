import React from 'react';

interface PostListingErrorProps {
  error: string;
  onRetry: () => void;
}

export const PostListingError: React.FC<PostListingErrorProps> = ({
  error,
  onRetry,
}) => {
  return (
    <div className="flex flex-col items-center justify-center col-span-2 gap-5">
      <span className="text-xl font-medium text-destructive">
        Error: {error}
      </span>
      <button
        onClick={onRetry}
        className="px-4 py-2 text-sm rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
      >
        Retry
      </button>
    </div>
  );
};

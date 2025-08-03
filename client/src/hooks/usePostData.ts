import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getPostsAsync } from '../services/post.service';
import {
  PaginatedResponse,
  PostQueryParams,
  PostResponse,
} from '../types/post.type';

interface UsePostDataProps {
  itemsPerPage: number;
  currentPage: number;
}

interface UsePostDataReturn {
  count: number;
  posts: PostResponse[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const usePostData = ({
  itemsPerPage,
  currentPage,
}: UsePostDataProps): UsePostDataReturn => {
  const location = useLocation();
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState<PostResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getQueryFromUrl = (): PostQueryParams => {
    const params = new URLSearchParams(location.search);
    return {
      region: params.get('region') || undefined,
      township: params.get('township') || undefined,
      street: params.get('street') || undefined,
      propertyType: params.get('propertyType') || undefined,
      postType: params.get('postType') || undefined,
      minPrice: params.get('minPrice')
        ? Number(params.get('minPrice'))
        : undefined,
      maxPrice: params.get('maxPrice')
        ? Number(params.get('maxPrice'))
        : undefined,
      search: params.get('search') || undefined,
      take: itemsPerPage || 10,
      cursor:
        currentPage > 1 ? String((currentPage - 1) * itemsPerPage) : undefined,
    };
  };

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const query = getQueryFromUrl();
      const response = await getPostsAsync(query);

      if (!Array.isArray(response.data)) {
        throw new Error('Invalid response format: expected array');
      }

      setPosts(response.data);
      setCount(response.totalCount);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Failed to fetch posts';
      setError(errorMessage);
      console.error('Error fetching posts:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [location.search, currentPage]);

  return {
    count,
    posts,
    loading,
    error,
    refetch: fetchPosts,
  };
};

import { appAxios } from '../api/appAxios';
import { Post } from '@types';
import {
  PaginatedResponse,
  PostQueryParams,
  PostResponse,
} from '../types/post.type';

export const searchPostsAsync = async (
  query: PostQueryParams
): Promise<Post[]> => {
  try {
    const response = await appAxios.get<Post[]>('/posts/lists', {
      params: query,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(`Failed to search posts: ${error.message}`);
  }
};

export const getPostsAsync = async (
  query: PostQueryParams
): Promise<PaginatedResponse<PostResponse>> => {
  try {
    const response = await appAxios.get<PaginatedResponse<PostResponse>>(
      '/posts',
      {
        params: query,
      }
    );
    return response.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch posts: ${error.message}`);
  }
};

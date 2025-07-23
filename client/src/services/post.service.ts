import { appAxios } from '../api/appAxios';
import { Post } from 'src/types/model.type';
import { PostQueryParams } from 'src/types/post.type';

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

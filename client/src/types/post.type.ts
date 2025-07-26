import { PostType, PropertyType } from '@types';

export interface PostQueryParams {
  cursor?: string;
  take?: number;
  region?: string;
  township?: string;
  street?: string;
  propertyType?: string;
  postType?: string;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
}

export interface PostResponse {}

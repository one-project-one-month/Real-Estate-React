import { PostType, PropertyType } from './model.type';

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

import { PostType, PropertyType } from './model.type';

export interface PostQueryParams {
  cursor?: string;
  take?: number;
  region?: string;
  township?: string;
  street?: string;
  propertyType?: string;
  postType?: PostType;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
}

export interface PostResponse {}

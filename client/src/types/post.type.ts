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

export interface PostResponse {
  id: number;
  description: string;
  phone: string;
  status: string;
  userId: number;
  adminId: number | null;
  type: string;
  socialLink: string;
  createdAt: string;
  updatedAt: string;
  property: PropertyResponse[];
}

export interface PropertyResponse {
  id: number;
  ownerId: number;
  propertyTypeId: number;
  bedRoom: number;
  bathRoom: number;
  latitude: string;
  longitude: string;
  buildingNumber: string;
  street: string;
  floor: number;
  township: string;
  region: string;
  length: number;
  width: number;
  currency: number;
  createdAt: string;
  postId: number;
  updatedAt: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

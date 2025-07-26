import { Post } from '../../../types';
import { PostQueryParams } from '../../../client/src/types/post.type';
import mockData from '@mocks';

export const formatPath = (
  base: string,
  query: Record<string, any>
): string => {
  const searchParams = new URLSearchParams();

  for (const key in query) {
    const value = query[key];
    if (value !== undefined && value !== null && value !== '') {
      searchParams.set(key, String(value));
    }
  }

  const queryString = searchParams.toString();
  return queryString ? `${base}?${queryString}` : base;
};

export const filterPostsByQuery = (query: PostQueryParams): Post[] => {
  const posts: Post[] = mockData.posts;

  return posts.filter((post) => {
    const property = mockData.properties.find((p) => p.id === post.propertyId);
    if (!property) return false;

    // Region match
    if (query.region && property.region !== query.region) return false;

    // Township match
    if (
      query.township &&
      property.township.toLowerCase() !== query.township.toLowerCase()
    )
      return false;

    // Street match
    if (
      query.street &&
      property.street.toLowerCase() !== query.street.toLowerCase()
    )
      return false;

    // Property type match
    if (
      query.propertyType &&
      mockData.propertyTypes
        .find((type) => type.id === property.propertyTypeId)
        .name.toLowerCase() !== query.propertyType.toLowerCase()
    )
      return false;

    // Post type match
    if (query.postType && post.type !== query.postType) return false;

    // Price range
    if (query.minPrice && property.price < query.minPrice) return false;
    if (query.maxPrice && property.price > query.maxPrice) return false;

    // Keyword search
    if (
      query.search &&
      ![
        property.township,
        property.street,
        property.floor.toString(),
        property.region,
        (property.length * property.width).toString(),
        mockData.propertyTypes
          .find((type) => type.id === property.propertyTypeId)
          .name.toLowerCase(),
      ].some((field) =>
        field?.toLowerCase().includes(query.search!.toLowerCase())
      )
    ) {
      return false;
    }

    return true;
  });
};

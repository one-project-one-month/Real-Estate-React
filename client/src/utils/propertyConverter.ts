import { Property } from '@types';
import { PostResponse } from '../types/post.type';

export const convertPostToProperty = (post: PostResponse): Property | null => {
  if (!post) {
    console.warn('convertPostToProperty: post is null or undefined');
    return null;
  }

  if (
    !post.property ||
    !Array.isArray(post.property) ||
    post.property.length === 0
  ) {
    console.warn(`convertPostToProperty: Post ${post.id} has no property data`);
    return null;
  }

  const apiProperty = post.property[0];

  if (!apiProperty || typeof apiProperty.id !== 'number') {
    console.warn(
      `convertPostToProperty: Post ${post.id} has invalid property data`
    );
    return null;
  }

  try {
    return {
      id: apiProperty.id,
      ownerId: apiProperty.ownerId || 0,
      propertyTypeId: apiProperty.propertyTypeId || 1,
      bedRoom: apiProperty.bedRoom || 0,
      bathRoom: apiProperty.bathRoom || 0,
      latitude: apiProperty.latitude || '',
      longitude: apiProperty.longitude || '',
      buildingNumber: apiProperty.buildingNumber || '',
      street: apiProperty.street || '',
      floor: apiProperty.floor || 0,
      township: apiProperty.township || '',
      region: apiProperty.region || '',
      length: apiProperty.length || 0,
      width: apiProperty.width || 0,
      currency: 'MMK', // always 'MMK' for now
      price: apiProperty.currency || 0,
      postId: apiProperty.postId || post.id,
    };
  } catch (error) {
    console.error(
      `convertPostToProperty: Error converting post ${post.id}:`,
      error
    );
    return null;
  }
};

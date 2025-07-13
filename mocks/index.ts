import users from './users.json';
import roles from './roles.json';
import agentProfiles from './agent-profiles.json';
import ownerProfiles from './owner-profiles.json';
import propertyTypes from './property-types.json';
import properties from './properties.json';
import posts from './posts.json';
import propertyPhotos from './property-photos.json';
import userPhotos from './user-photos.json';
import ratings from './ratings.json';

export const mockData = {
  users: users.users,
  roles: roles.roles,
  agentProfiles: agentProfiles.agent_profiles,
  ownerProfiles: ownerProfiles.owner_profiles,
  propertyTypes: propertyTypes.property_types,
  properties: properties.properties,
  posts: posts.posts,
  propertyPhotos: propertyPhotos.property_photos,
  userPhotos: userPhotos.user_photos,
  ratings: ratings.ratings,
};

export default mockData;

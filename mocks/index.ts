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
import allActivities from './all-activities.json';
import passwordResetTokens from './password-reset-tokens.json';
import permissions from './permissions.json';
import rolePermissions from './role-permissions.json';

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
  allActivities: allActivities.all_activities,
  passwordResetTokens: passwordResetTokens.password_reset_tokens,
  permissions: permissions.permissions,
  rolePermissions: rolePermissions.role_permissions,
};

export default mockData;

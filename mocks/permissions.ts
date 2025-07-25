import { Permission } from '../types/model.type';

export const permissions: Permission[] = [
  { id: 1, roleId: 1, action: 'manage', resource: 'all' },
  { id: 2, roleId: 1, action: 'delete', resource: 'user' },
  { id: 3, roleId: 2, action: 'view', resource: 'property' },
  { id: 4, roleId: 2, action: 'edit', resource: 'profile' },
  { id: 5, roleId: 3, action: 'create', resource: 'post' },
  { id: 6, roleId: 3, action: 'update', resource: 'property' },
  { id: 7, roleId: 1, action: 'approve', resource: 'agent' },
  { id: 8, roleId: 2, action: 'rate', resource: 'agent' },
  { id: 9, roleId: 3, action: 'upload', resource: 'photo' },
  { id: 10, roleId: 1, action: 'ban', resource: 'user' },
  { id: 11, roleId: 2, action: 'comment', resource: 'post' },
  { id: 12, roleId: 3, action: 'favorite', resource: 'property' },
];

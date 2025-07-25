// model.type.ts

export interface Property {
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
  width?: number;
  currency: string;
  price: number;
  postId?: number;
  owner?: User;
  post?: Post;
  propertyType?: PropertyType;
  photos?: PropertyPhoto[];
}

export interface User {
  id: number;
  username: string;
  email: string;
  photo?: string;
  password?: string;
  roleId: number;
  createdAt: string;
  updatedAt: string;
  approvedAgents?: AgentProfile[];
  agentProfile?: AgentProfile;
  activities?: AllActivity[];
  ownerProfile?: OwnerProfile;
  password_reset_token?: PasswordResetToken;
  approvedPosts?: Post[];
  posts?: Post[];
  properties?: Property[];
  ratings?: Rating[];
  refreshTokens?: RefreshToken[];
  role?: Role;
  photos?: UserPhoto[];
}

export interface AgentProfile {
  id: number;
  userId: number;
  cnaNumber: string;
  licenseNumber: number;
  status: AgentProfileStatus;
  approvedById?: number | null;
  approvedAt?: string | null;
  approvedBy?: User;
  user?: User;
  ratings?: Rating[];
}

export interface Post {
  id: number;
  propertyId?: number;
  userId?: number;
  adminId?: number | null;
  phone?: string;
  socialLink?: string;
  createdAt: string;
  type?: PostType;
  status?: PostStatus;
  activities?: AllActivity[];
  admin?: User;
  user?: User;
  property?: Property;
  description?: string;
}

export interface Role {
  id: number;
  name: string;
  value: string;
  rolePermissions?: RolePermission[];
  permissions?: Permission[];
  users?: User[];
}

export interface RolePermission {
  roleId: number;
  permissionId: number;
  permission?: Permission;
  role?: Role;
}

export interface Permission {
  id: number;
  roleId: number;
  action: string;
  resource: string;
  rolePermissions?: RolePermission[];
  role?: Role;
}

export interface PropertyType {
  id: number;
  name: string;
  properties?: Property[];
}

export interface PropertyPhoto {
  id: number;
  path: string;
  propertyId: number;
  property?: Property;
  url?: string;
}

export interface AllActivity {
  id: number;
  userId: number;
  postId: number;
  action: string;
  createdAt: string;
  post?: Post;
  user?: User;
}

export interface OwnerProfile {
  id: number;
  userId: number;
  nrcNo: string;
  address: string;
  user?: User;
}

export interface UserPhoto {
  id: number;
  path: string;
  userId: number;
  user?: User;
}

export interface Rating {
  id: number;
  point: number;
  userId: number;
  agentId: number;
  createdAt?: string;
  agent?: AgentProfile;
  user?: User;
}

export interface RefreshToken {
  id: number;
  token: string;
  userId: number;
  user?: User;
}

export interface PasswordResetToken {
  id: number;
  token: string;
  expiresAt: string;
  userId: number;
  createdAt: string;
  user?: User;
}

export enum AgentProfileStatus {
  Pending = 'Pending',
  Approved = 'Approved',
  Rejected = 'Rejected',
}

export enum RoleName {
  Admin = 'Admin',
  User = 'User',
  Agent = 'Agent',
}

export enum PostStatus {
  Active = 'Active',
  Pending = 'Pending',
  Sold = 'Sold',
  Rented = 'Rented',
}

export enum PostType {
  Sale = 'Sale',
  Rent = 'Rent',
  Lease = 'Lease',
}

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  refreshToken: string;
  accessToken: string;
};

export type RegisterRequest = {
  username: string;
  email: string;
  password: string;
  roleId: number;
  photo: string;
};

export type RegisterResponse = {
  id: number;
  username: string;
  email: string;
  roleId: number;
  createdAt: string;
  updatedAt: string;
};

export type UserResponse = {
  id: number;
  username: string;
  email: string;
  password: string;
  roleId: number;
  createdAt: string;
  updatedAt: string;
};

export type RoleResponse = {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};
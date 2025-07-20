import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from '../types/auth.type';
import { appAxios } from '../api/appAxios';

export const loginAsync = async (
  data: LoginRequest
): Promise<LoginResponse> => {
  try {
    const response = await appAxios.post('/auth/login', data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const registerAsync = async (
  data: RegisterRequest
): Promise<RegisterResponse> => {
  try {
    data.roleId = 2;
    data.photo = null;
    const response = await appAxios.post('/auth/register', data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

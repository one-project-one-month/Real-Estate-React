import { LoginRequest, LoginResponse } from '../types/auth.type';
import { appAxios } from '../api/appAxios';

export const loginAsync = async (
  data: LoginRequest
): Promise<LoginResponse> => {
  try {
    console.log('Axios base URL is:', import.meta.env.VITE_EXPRESS_URL);

    const response = await appAxios.post('/auth/login', data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

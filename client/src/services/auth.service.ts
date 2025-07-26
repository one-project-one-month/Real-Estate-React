import {
  LoginRequest,
  LoginResponse,
  UserResponse,
  RegisterRequest,
  RegisterResponse,
} from '../types/auth.type';
import { appAxios } from '../api/appAxios';
import { toast } from 'sonner';

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

export const refreshAccessTokenAsync = async (
  refreshToken: string | null
): Promise<string> => {
  if (!refreshToken) throw new Error('No refresh token found');

  try {
    const res = await appAxios.post('/auth/refresh', {
      refreshToken: refreshToken,
    });
    const newAccessToken = res.data.accessToken;
    localStorage.setItem('access_token', newAccessToken);
    return newAccessToken;
  } catch (err: any) {
    throw new Error('Refresh token expired or invalid');
  }
};

export const getCurrentUserAsync = async (
  accessToken: string
): Promise<UserResponse> => {
  try {
    const res = await appAxios.get('/auth/get-user', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data;
  } catch (err: any) {
    if (err.response?.status === 401) {
      try {
        const refreshToken = localStorage.getItem('refresh_token');
        const newAccessToken = await refreshAccessTokenAsync(refreshToken);

        const retryRes = await appAxios.get('/auth/get-user', {
          headers: {
            Authorization: `Bearer ${newAccessToken}`,
          },
        });

        return retryRes.data;
      } catch (refreshError) {
        throw new Error('Session expired');
      }
    }

    throw new Error(err.message || 'Failed to fetch user');
  }
};

export const logOutAsync = async (id: number, accessToken: string) => {
  try {
    await appAxios.post(
      '/auth/logout',
      {
        id: id,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  } catch (err: any) {
    toast.error(err.message);
    throw new Error(err.message);
  }
};

import { toast } from "sonner";
import { appAxios } from "../api/appAxios";
import { LoginRequest, LoginResponse, UserResponse } from "src/types/auth.type";

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

export const refreshAccessTokenAsync = async (
  refreshToken: string | null
): Promise<string> => {
  if (!refreshToken) throw new Error('No refresh token found');

  try {
    const res = await appAxios.post('/admin/refresh', {
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
  accessToken: string): Promise<UserResponse> => {
  try {
    const res = await appAxios.get('/auth/get-user', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data;
  } catch (err: any) {
    if (err.response && err.response.status === 401) {
      try {
        const refreshToken = localStorage.getItem('refresh_token');
        const newAccessToken = await refreshAccessTokenAsync(refreshToken);

        const retryRes = await appAxios.get('/admin/get-user', {
          headers: {
            Authorization: `Bearer ${newAccessToken}`,
          },
        });
        return retryRes.data;
      } catch (refreshErr: any) {
        throw new Error('Sesson expired');
      }
    }
    throw new Error(err.message || 'Failed to fetch user');
  }
}

export const logOutAsync = async (id: number, access_token: string) => {
  try {
    await appAxios.post(
      '/auth/logout',
      {
        id: id,
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

  } catch (err: any) {
    toast.error(err.message);
    throw new Error(err.message);

  }
}
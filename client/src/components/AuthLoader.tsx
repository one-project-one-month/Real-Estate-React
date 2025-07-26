import React, { ReactNode, useEffect } from 'react';
import { useUserStore } from '../stores/userStore';
import {
  getCurrentUserAsync,
  refreshAccessTokenAsync,
} from '../services/auth.service';
import { UserResponse } from '../types/auth.type';

interface AuthLoaderProps {
  children: ReactNode;
}

export const AuthLoader: React.FC<AuthLoaderProps> = ({ children }) => {
  const setUser = useUserStore((state) => state.setUser);
  const clearUser = useUserStore((state) => state.clearUser);

  useEffect(() => {
    const fetchUser = async () => {
      const accessToken = localStorage.getItem('access_token');
      const refreshToken = localStorage.getItem('refresh_token');

      try {
        const user: UserResponse = await getCurrentUserAsync(accessToken);
        setUser(user);
      } catch (err: any) {
        if (
          err.message.includes('401') ||
          err.message.toLowerCase().includes('unauthorized')
        ) {
          try {
            const newAccessToken = await refreshAccessTokenAsync(refreshToken);
            const user: UserResponse =
              await getCurrentUserAsync(newAccessToken);
            setUser(user);
          } catch (refreshErr) {
            clearUser();
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            console.log('Session expired, logged out.');
          }
        } else {
          console.error(err);
        }
      }
    };

    fetchUser();
  }, [setUser, clearUser]);

  return <>{children}</>;
};

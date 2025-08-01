import React, { ReactNode, useEffect } from 'react';
import { useAdminStore } from '../stores/adminStore';
import {
  getCurrentUserAsync,
  refreshAccessTokenAsync,
} from '../services/auth.service';
import { UserResponse } from 'src/types/auth.type';
import { useMutation } from '@tanstack/react-query';

interface AuthLoaderProps {
  children: ReactNode;
}

export const AuthLoader: React.FC<AuthLoaderProps> = ({ children }) => {
  const setUser = useAdminStore((state) => state.setUser);
  const clearUser = useAdminStore((state) => state.clearUser);
  const getMeMutation = useMutation({ mutationFn: getCurrentUserAsync });
  const refreshMutation = useMutation({ mutationFn: refreshAccessTokenAsync });

  useEffect(() => {
    const fetchUser = async () => {
      const accessToken = localStorage.getItem('access_token');
      const refreshToken = localStorage.getItem('refresh_token');

      try {
        const admin: UserResponse =
          await getMeMutation.mutateAsync(accessToken);
        setUser(admin);
      } catch (err: any) {
        if (
          err.message.includes('401') ||
          err.message.toLowerCase().includes('unauthorized')
        ) {
          try {
            const newAccessToken =
              await refreshMutation.mutateAsync(refreshToken);
            localStorage.setItem('access_token', newAccessToken);
            const admin: UserResponse =
              await getMeMutation.mutateAsync(newAccessToken);
            setUser(admin);
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

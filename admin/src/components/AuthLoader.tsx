import React, { ReactNode, useEffect } from "react";
import { useAdminStore } from '../stores/adminStore';
import { getCurrentUserAsync, refreshAccessTokenAsync } from "../services/auth.service";
import { UserResponse } from "src/types/auth.type";

interface AuthLoaderProps {
  children: ReactNode;
}

export const AuthLoader: React.FC<AuthLoaderProps> = ({ children }) => {
  const setUser = useAdminStore((state) => state.setUser);
  const clearUser = useAdminStore((state) => state.clearUser);

  useEffect(() => {
    const fetchUser = async () => {
      const accessToken = localStorage.getItem('access_token');
      const refreshToken = localStorage.getItem('refresh_token');

      try {
        const admin: UserResponse = await getCurrentUserAsync(accessToken);
        setUser(admin);
      } catch (err: any) {
        if (
          err.message.includes('401') ||
          err.message.toLowerCase().includes('unauthorized')
        ) {
          try {
            const newAccessToken = await refreshAccessTokenAsync(refreshToken);
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
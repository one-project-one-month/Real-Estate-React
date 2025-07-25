import React from 'react';
import { BreadcrumbNavigator } from '../components';
import { useUserStore } from '../stores/userStore';
import { Card, CardContent } from '@ui';

export const MyProfile = () => {
  const currentUser = useUserStore((state) => state.user);

  return (
    <section className="flex flex-col w-full gap-10 px-4 py-6 mx-auto sm:max-w-3xl md:max-w-4xl lg:max-w-7xl lg:px-0">
      <BreadcrumbNavigator
        paths={[
          { label: 'Home', href: '/' },
          {
            label: 'My Profile',
            isCurrent: true,
          },
        ]}
      />
      <Card className="border border-border">
        {currentUser !== null ? (
          <CardContent className="text-black">
            <ul>
              <li>Username: {currentUser.username}</li>
              <li>Email: {currentUser.email}</li>
              <li>Started at: {currentUser.createdAt}</li>
            </ul>
          </CardContent>
        ) : (
          <CardContent className="text-black">
            You are not logged in
          </CardContent>
        )}
      </Card>
    </section>
  );
};

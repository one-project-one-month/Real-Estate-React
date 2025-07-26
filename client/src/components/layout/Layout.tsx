import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { AuthLoader } from '../AuthLoader';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <AuthLoader>
      <section className="flex flex-col min-h-screen bg-background">
        <Header />
        <main className="pb-16">{children}</main>
        <Footer />
      </section>
    </AuthLoader>
  );
};

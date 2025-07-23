import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <section className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="pb-10">{children}</main>
      <Footer />
    </section>
  );
};

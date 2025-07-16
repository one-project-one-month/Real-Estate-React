import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <section className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="min-h-[1000px]">{children}</main>
      <Footer />
    </section>
  );
};

export default Layout;

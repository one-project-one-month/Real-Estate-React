import React from "react";
import { Header } from "./Header";
import { AuthLoader } from "../AuthLoader";

interface UserLayoutProps {
  children: React.ReactNode;
}

export const UserLayout = ({ children }: UserLayoutProps) => {
  return (
    <AuthLoader>
      <section className="flex flex-col min-h-screen bg-background">
        <Header />
        <main className="pb-16">{children}</main>
      </section>
    </AuthLoader>
  );
};
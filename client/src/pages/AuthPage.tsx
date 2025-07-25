import { Facebook, Linkedin, Twitter, Youtube } from 'lucide-react';
import React from 'react';
import { SocialBubble } from '../components';

interface AuthPageProps {
  children: React.ReactNode;
}

export const AuthPage = ({ children }: AuthPageProps) => {
  return (
    <section className="relative flex flex-col min-h-screen overflow-hidden">
      {/* Background image
      <div
        className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: 'url(/auth-bg.jpg)' }}
      /> */}

      {/* Overlay gradient */}
      {/* <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-gray-950 via-transparent to-transparent" /> */}

      <div className="relative z-20 flex items-center justify-center flex-1 w-full">
        {children}
      </div>

      <footer className="relative z-20 flex items-center justify-between w-full px-5 py-4 mt-auto text-secondary-foreground">
        <div className="flex flex-wrap gap-3 text-xs text-center md:text-left">
          <p className="cursor-pointer hover:underline">
            ©2025 Pwel-Sar. All Rights Reserved.
          </p>
          <p className="cursor-pointer hover:underline">Terms & Conditions</p>
        </div>
        <div className="flex gap-2">
          <SocialBubble icon={Facebook} variant="primary" />
          <SocialBubble icon={Twitter} variant="primary" />
          <SocialBubble icon={Linkedin} variant="primary" />
          <SocialBubble icon={Youtube} variant="primary" />
        </div>
      </footer>
    </section>
  );
};

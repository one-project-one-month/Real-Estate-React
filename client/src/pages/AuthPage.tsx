import { Facebook, Linkedin, Twitter, Youtube } from 'lucide-react';
import React from 'react';
import { SocialBubble } from '../components';

interface AuthPageProps {
  children: React.ReactNode;
}

export const AuthPage = ({ children }: AuthPageProps) => {
  return (
    <section className="flex flex-col min-h-screen bg-background">
      <div className="flex items-center justify-center flex-1 w-full">
        {children}
      </div>
      <footer className="flex items-center justify-between w-full px-5 py-4 mt-auto text-secondary-foreground">
        <div className="flex flex-wrap gap-3 text-xs text-center md:text-left">
          <p className="cursor-pointer hover:underline">
            ©2025 Pwel-Sar. All Rights Reserved.
          </p>
          <p className="cursor-pointer hover:underline">Terms & Conditions</p>
        </div>
        <div className="flex gap-2">
          <SocialBubble icon={Facebook} variant="outline" />
          <SocialBubble icon={Twitter} variant="outline" />
          <SocialBubble icon={Linkedin} variant="outline" />
          <SocialBubble icon={Youtube} variant="outline" />
        </div>
      </footer>
    </section>
  );
};

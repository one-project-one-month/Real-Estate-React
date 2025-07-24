import React, { useState } from 'react';
import logoSVG from '../../../assets/logo/logo.svg';
import { useNavigate } from 'react-router-dom';
import { Button } from '@ui';
import { FolderUp, Menu, X } from 'lucide-react';

interface HeaderTabProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const HeaderTab: React.FC<HeaderTabProps> = ({
  children,
  onClick,
  className,
}) => {
  return (
    <li
      className={`px-4 py-2 text-sm font-medium rounded-md cursor-pointer hover:text-secondary-foreground ${className}`}
      onClick={onClick}
    >
      {children}
    </li>
  );
};

export const Header = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const mainNav = (
    <>
      <HeaderTab
        onClick={() => {
          navigate('/properties?postType=sale');
          closeMenu();
        }}
      >
        Buy
      </HeaderTab>
      <HeaderTab
        onClick={() => {
          navigate('/properties?postType=rent');
          closeMenu();
        }}
      >
        Rent
      </HeaderTab>
      <HeaderTab
        onClick={() => {
          navigate('/agents');
          closeMenu();
        }}
      >
        Agents
      </HeaderTab>
      <HeaderTab
        onClick={() => {
          navigate('/wishlist');
          closeMenu();
        }}
      >
        Your Wishlist
      </HeaderTab>
    </>
  );

  const authNav = (
    <>
      <HeaderTab
        onClick={() => {
          navigate('/registration');
          closeMenu();
        }}
      >
        Register
      </HeaderTab>
      <HeaderTab
        onClick={() => {
          navigate('/login');
          closeMenu();
        }}
      >
        Log in
      </HeaderTab>
    </>
  );

  return (
    <nav className="relative flex items-center justify-between w-full px-5 py-4 border-b border-border bg-gradient-to-r from-background via-background to-primary">
      <div
        className="flex items-center gap-4 cursor-pointer"
        onClick={() => {
          navigate('/');
          closeMenu();
        }}
      >
        <img src={logoSVG} alt="pwel sar logo" className="h-[3rem]" />
      </div>

      <div className="items-center justify-end flex-1 hidden gap-5 md:flex">
        <ul className="flex items-center gap-2 px-5">{mainNav}</ul>
        <span className="text-2xl font-thin pointer-events-none">|</span>
        <ul className="flex items-center gap-2">{authNav}</ul>
        <Button
          size="lg"
          variant="secondary"
          onClick={() => navigate('/upload')}
        >
          <FolderUp size={20} />
          Upload
        </Button>
      </div>

      {/* Mobile Hamburger */}
      <div className="block md:hidden">
        <button onClick={toggleMenu}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute left-0 z-50 w-full px-5 py-4 border-t top-full bg-background border-border md:hidden">
          <ul className="flex flex-col items-center gap-3 mb-4">{mainNav}</ul>
          <ul className="flex flex-col items-center gap-3 pt-3 mb-4 border-t border-border">
            {authNav}
          </ul>
          <Button
            size="lg"
            className="w-full"
            onClick={() => {
              navigate('/upload');
              closeMenu();
            }}
          >
            <FolderUp size={20} />
            Upload
          </Button>
        </div>
      )}
    </nav>
  );
};

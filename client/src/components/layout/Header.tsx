import React, { useState } from 'react';
import logoSVG from '../../../assets/logo/logo.svg';
import { useNavigate } from 'react-router-dom';
import { Button } from '@ui';
import { FolderUp, Globe, Menu, X } from 'lucide-react';
import { PostType } from '@types';
import { useUserStore } from '../../stores/userStore';
import { logOutAsync } from '../../services/auth.service';
import { useTranslation } from 'react-i18next';

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
  const currentUser = useUserStore((state) => state.user);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'my' : 'en';
    i18n.changeLanguage(nextLang);
  };

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const mainNav = (
    <>
      <HeaderTab
        onClick={() => {
          // navigate(`/properties?postType=${PostType.Sale}`);
          navigate('/properties');
          closeMenu();
        }}
      >
        {t('properties')}
      </HeaderTab>
      <HeaderTab
        onClick={() => {
          navigate('/agents');
          closeMenu();
        }}
      >
        {t('agents')}
      </HeaderTab>
      <HeaderTab
        onClick={() => {
          navigate('/wishlist');
          closeMenu();
        }}
      >
        {t('wishlist')}
      </HeaderTab>
    </>
  );

  const withAccAuthNav = currentUser ? (
    <>
      <HeaderTab onClick={() => navigate('/me')}>
        {!isMobileMenuOpen ? (
          <div className="flex items-center justify-center gap-3">
            <span>{currentUser.username}</span>
            <div className="w-8 h-8 overflow-hidden bg-gray-200 border border-gray-300 rounded-full shadow-sm cursor-pointer">
              <img
                src="/no-pf.webp"
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        ) : (
          t('account')
        )}
      </HeaderTab>
    </>
  ) : null;

  const noAccAuthNav = (
    <>
      <HeaderTab
        onClick={() => {
          navigate('/registration');
          closeMenu();
        }}
      >
        {t('register')}
      </HeaderTab>
      <HeaderTab
        onClick={() => {
          navigate('/login');
          closeMenu();
        }}
      >
        {t('login')}
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
        <ul className="flex items-center gap-2">
          {currentUser === null ? noAccAuthNav : withAccAuthNav}
        </ul>
        <Button
          onClick={toggleLanguage}
          size="lg"
          variant="secondary"
          className="flex items-center"
        >
          <Globe />
          {i18n.language === 'en' ? 'မြန်မာ' : 'English'}
        </Button>
        <Button
          size="lg"
          variant="secondary"
          onClick={() => navigate('/upload')}
        >
          <FolderUp size={20} />
          {t('upload')}
        </Button>
      </div>

      {/* Mobile Hamburger */}
      <div className="block md:hidden ">
        <button onClick={toggleMenu}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute left-0 z-50 w-full px-5 py-4 shadow-md border-y top-full bg-background md:hidden border-border">
          <ul className="flex flex-col items-center gap-3 mb-4">{mainNav}</ul>
          <ul className="flex flex-col items-center gap-3 pt-3 mb-4 border-t border-border">
            {currentUser === null ? noAccAuthNav : withAccAuthNav}
          </ul>
          <div className="flex flex-col gap-3">
            <Button className="w-full" onClick={toggleLanguage} size="lg">
              <Globe />
              {i18n.language === 'en' ? 'မြန်မာ' : 'English'}
            </Button>
            <Button
              size="lg"
              className="w-full"
              onClick={() => {
                navigate('/upload');
                closeMenu();
              }}
            >
              <FolderUp size={20} />
              {t('upload')}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

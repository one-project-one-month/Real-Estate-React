import React from 'react';
import logoSVG from '../../../assets/logo/logo.svg';

interface HeaderTabProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

const HeaderTab: React.FC<HeaderTabProps> = ({
  children,
  onClick,
  variant,
}) => {
  const baseClasses = 'px-4 py-2 rounded-md bg-transparent text-sm font-medium';
  const variantClasses =
    variant === 'secondary' ? 'text-secondary-foreground' : '';

  return (
    <li className={`${baseClasses} ${variantClasses}`} onClick={onClick}>
      {children}
    </li>
  );
};

const Header = () => {
  return (
    <div className="flex items-center justify-between w-full px-5 py-4 bg-gradient-to-r from-background via-background to-primary">
      <img src={logoSVG} alt="pwel sar logo" className="h-[2.5rem]" />
      <ul className="flex items-center justify-center flex-1 gap-2">
        <HeaderTab variant="secondary">Home</HeaderTab>
        <HeaderTab variant="secondary">Properties</HeaderTab>
        <HeaderTab variant="secondary">About Us</HeaderTab>
        <HeaderTab variant="secondary">Contact Us</HeaderTab>
      </ul>
      <ul className="flex items-center justify-around gap-3">
        <HeaderTab>Sign Up</HeaderTab>
        <HeaderTab>Login</HeaderTab>
      </ul>
    </div>
  );
};

export default Header;

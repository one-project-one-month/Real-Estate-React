import React, { ReactNode } from "react";

interface AuthLoaderProps {
  children: ReactNode;
}

const AuthLoader: React.FC<AuthLoaderProps> = ({ children }) => {
  // authenticate the user using token stored in localStorage or Http-only cookies
  // route to /login if failed
  // return children if successful

  return <>{children}</>;
};

export default AuthLoader;

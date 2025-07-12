import { ReactNode } from 'react';

type AuthLoaderProps = {
  children: ReactNode;
};

const AuthLoader = ({ children }: AuthLoaderProps) => {
  return <div>{children}</div>;
};

export default AuthLoader;

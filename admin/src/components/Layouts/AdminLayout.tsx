import React from "react";
import { Navbar } from "../Navbar";
import { Sidebar } from "../Sidebar";
import { AuthLoader } from "../AuthLoader";

export const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AuthLoader>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Navbar />
          <main className="flex-1 p-4 bg-muted/20">
            {children}
          </main>
        </div>
      </div>
    </AuthLoader>
  );
};
import React from "react";
import { useNavigate } from "react-router-dom";
import { logOutAsync } from "../services/auth.service";
import { useAdminStore } from "../stores/adminStore";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@ui";
import { toast } from "sonner";

export const Navbar = () => {
  const currentUser = useAdminStore((state) => state.user);
  const clearUser = useAdminStore((state) => state.clearUser);
  const navigate = useNavigate();

  const handleLogout = async () => {
    if (!currentUser) return;

    try {
      clearUser();
      await logOutAsync(currentUser.id, localStorage.getItem('access_token'));
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      toast.success("Logged out successfully.");
      navigate('/'); // Redirect to admin login after Logout
    } catch (error: any) {
      toast.error(error.message || "Logout failed.");
      console.error(error);
    }
  };

  return (
    <nav className="w-full h-14 border-b bg-background flex justify-between items-center px-4">
      <h1 className="text-lg font-bold"></h1>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-2">
            {currentUser ? currentUser.email : "Loading..."}
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {/* {currentUser && (
            <DropdownMenuItem onSelect={handleLogout}>Logout</DropdownMenuItem>
          )} */}
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};
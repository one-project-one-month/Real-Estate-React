import React from "react";
import { useNavigate } from "react-router-dom";
import { logOutAsync } from "../services/auth.service";
import { useAdminStore } from "../stores/adminStore";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, Button } from "@ui";
import { toast } from "sonner";
import { Bell } from "lucide-react";

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
    <nav className="bg-white border-b border-gray-200 shadow-sm px-6 py-3 flex items-center justify-between">
      <div className="hidden md:flex flex-1 justify-center max-w-md">
        {/* <input
          type="text"
          placeholder="Search..."
          className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
        /> */}
      </div>


      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Bell />
        </Button>

        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-3 py-1 rounded-lg transition">
          <img
            src="https://i.pravatar.cc/40"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
          <span className="hidden sm:inline text-sm font-medium text-gray-700">
            {currentUser ? currentUser.email : "Guest"}
          </span>
        </div>
      </div>
    </nav>
  );
};
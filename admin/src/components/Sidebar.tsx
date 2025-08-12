import { Button } from "@ui";
import { Home, User, Settings, LogOut } from "lucide-react";
import { logOutAsync } from "../services/auth.service";
import { useAdminStore } from "../stores/adminStore";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const currentUser = useAdminStore((state) => state.user);
  const clearUser = useAdminStore((state) => state.clearUser);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOutAsync(currentUser.id, localStorage.getItem('access_token'));
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      clearUser();
      navigate('/'); // Redirect to login page after logout
      console.log("User logged out");
    }
    catch (error) {
      console.error("Logout failed", error);
    }
  };
  const menuItems = [
    { label: "Dashboard", icon: <Home size={18} />, onClick: () => navigate('/dashboard') },
    { label: "AgentList", icon: <User size={18} />, onClick: () => navigate('/agentlist') },
    { label: "OwnerList", icon: <User size={18} />, onClick: () => navigate('/ownerlist') },
    { label: "Logout", icon: <LogOut size={18} />, onClick: handleLogout }
  ]
  return (
    <div className="w-64 h-screen border-r bg-muted p-4 flex flex-col">
      <h1 className="flex gap-2 text-xl font-bold mb-6"><img src="../../assets/logo.svg" alt="logo" className="h-[1.8rem]" />Pwel-Sar</h1>
      <div className="space-y-2">
        {menuItems.map((item, index) => (
          <Button
            key={item.label}
            variant="default"
            className="w-full justify-start"
            {...(item.onClick ? { onClick: item.onClick } : {})}
          >
            {item.icon}
            <span className="ml-2">{item.label}</span>
          </Button>
        ))}
      </div>
    </div >
  );
}; 
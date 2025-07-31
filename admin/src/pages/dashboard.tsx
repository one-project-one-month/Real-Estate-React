import { Button, Card } from "@ui";
import { logOutAsync } from "../services/auth.service";
import { useAdminStore } from "../stores/adminStore";
import { useNavigate } from "react-router-dom";



export const Dashboard = () => {
  const currentUser = useAdminStore((state) => state.user);
  const clearUser = useAdminStore((state) => state.clearUser);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const LogoutButton = ({ userId, accessToken }) => {
    const navigate = useNavigate();
    const handleLogout = async () => {
      clearUser();
      await logOutAsync(userId, accessToken);
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      navigate('/'); // Redirect to admin login after Logout
    }
    return (
      <Button onClick={handleLogout} className="mt-4">
        Logout
      </Button>
    )
  };

  return (
    <section className="flex flex-col w-full gap-10 px-4 py-6 mx-auto sm:max-w-3xl md:max-w-4xl lg:max-w-7xl lg:px-0">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <p className="text-gray-600">Welcome to the admin dashboard. Here you can manage your application settings, users, and more.</p>
      <Card className="border border-border p-6">
        {
          currentUser !== null ? (
            <div className="text-black">
              <ul>
                <li>Username: {currentUser.username}</li>
                <li>Email: {currentUser.email}</li>
                <li>Started at: {formatDate(currentUser.createdAt)}</li>
              </ul>
              <LogoutButton userId={currentUser.id} accessToken={localStorage.getItem('access_token')} />
            </div>
          ) : (
            <div className="text-black">You are not logged in</div>
          )
        }
      </Card>
    </section>
  );
}
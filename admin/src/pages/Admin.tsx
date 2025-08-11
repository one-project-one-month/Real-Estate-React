import { Button, Card } from '@ui';
import { logOutAsync } from '../services/auth.service';
import { useAdminStore } from '../stores/adminStore';
import { useNavigate } from 'react-router-dom';
import { AdminLoginForm } from '../components';

export const Admin = () => {
  const currentUser = useAdminStore((state) => state.user);
  const clearUser = useAdminStore((state) => state.clearUser);
  const navigate = useNavigate();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const LogoutButton = ({ userId, accessToken }) => {
    const handleLogout = async () => {
      clearUser();
      await logOutAsync(userId, accessToken);
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      navigate('/'); // Redirect to admin login after Logout
    };
    return (
      <Button onClick={handleLogout} className="mt-4">
        <span>Logut</span>
      </Button>
    );
  };

  return (
    <section className="relative flex flex-col min-h-screen overflow-hidden">
      {currentUser !== null ? (
        <div className="text-black">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <p className="text-gray-600">
            Welcome to the admin dashboard. Here you can manage your application
            settings, users, and more.
          </p>
          <ul>
            <li>ID: {currentUser.id}</li>
            <li>Username: {currentUser.username}</li>
            <li>Email: {currentUser.email}</li>
            <li>Started at: {formatDate(currentUser.createdAt)}</li>
          </ul>
          <LogoutButton
            userId={currentUser.id}
            accessToken={localStorage.getItem('access_token')}
          />
        </div>
      ) : (
        <div className="relative z-20 flex items-center justify-center flex-1 w-full">
          <AdminLoginForm />
        </div>
      )}
    </section>
  );
};

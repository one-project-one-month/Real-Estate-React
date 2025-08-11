import { Button } from '@ui';
import { toast } from 'sonner';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AdminLoginForm } from './components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Admin, AgentList, Dashboard, OwnerList } from './pages';
import { AuthLoader } from './components/AuthLoader';
import { AdminLayout } from './components/Layouts/AdminLayout';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route
            path="/login"
            element={
              <div className="flex items-center justify-center h-screen">
                <AdminLoginForm />
              </div>
            }
          />
          <Route
            path="/"
            element={
              <AuthLoader>
                <Admin />
              </AuthLoader>
            }
          />
          <Route
            path="/dashboard"
            element={
              <AdminLayout>
                <Dashboard />
              </AdminLayout>
            }
          />
          <Route
            path="/agentlist"
            element={
              <AdminLayout>
                <AgentList />
              </AdminLayout>
            }
          />
          <Route
            path="/ownerlist"
            element={
              <AdminLayout>
                <OwnerList />
              </AdminLayout>
            }
          />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;

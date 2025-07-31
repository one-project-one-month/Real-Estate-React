import { Button } from '@ui';
import { toast } from 'sonner';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AdminLoginForm } from './components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Dashboard } from './pages';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Button variant="default" onClick={() => toast.success('Hello!')}>
                Click me
              </Button>
            }
          />
          <Route
            path="/admin/login"
            element={
              <div className="flex items-center justify-center h-screen">
                <AdminLoginForm />
              </div>
            }
          />
          <Route
            path="/admin/dashboard"
            element={
              <Dashboard />
            }
          />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;

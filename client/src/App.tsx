import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';
import Properties from './pages/Properties';

import PropertyDetails from './pages/PropertyDetails';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import AuthPage from './pages/AuthPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AgentsPage from './pages/AgentsPage';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/properties"
            element={
              <Layout>
                <Properties />
              </Layout>
            }
          />
          <Route
            path="/login"
            element={
              <AuthPage>
                <LoginForm />
              </AuthPage>
            }
          />
          <Route
            path="/registration"
            element={
              <AuthPage>
                <RegisterForm />
              </AuthPage>
            }
          />
          <Route
            path="/property/:id"
            element={
              <Layout>
                <PropertyDetails />
              </Layout>
            }
          />
          <Route
            path="/agents"
            element={
              <Layout>
                <AgentsPage />
              </Layout>
            }
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;

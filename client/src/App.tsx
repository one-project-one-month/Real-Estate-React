import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Home,
  Properties,
  PropertyDetails,
  NotFound,
  AuthPage,
  AgentsPage,
  AgentDetails,
  UploadPost,
  Wishlist,
  MyProfile,
} from './pages';
import { Layout, RegisterForm, LoginForm } from './components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          {/* Non-auth pages wrapped in AuthLoader */}
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
            path="/properties/:id"
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
          <Route
            path="/agents/:id"
            element={
              <Layout>
                <AgentDetails />
              </Layout>
            }
          />
          <Route
            path="/upload"
            element={
              <Layout>
                <UploadPost />
              </Layout>
            }
          />
          <Route
            path="/wishlist"
            element={
              <Layout>
                <Wishlist />
              </Layout>
            }
          />
          <Route
            path="/me"
            element={
              <Layout>
                <MyProfile />
              </Layout>
            }
          />

          {/* Auth pages NOT wrapped in AuthLoader */}
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

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;

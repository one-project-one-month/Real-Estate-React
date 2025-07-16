import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';
import Properties from './pages/Properties';
import Login from './pages/Login';
import Registration from './pages/Registration';
import PropertyDetails from './pages/PropertyDetails';
import AuthLayout from './components/layout/AuthLayout';

const App = () => {
  return (
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
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />
        <Route
          path="/registration"
          element={
            <AuthLayout>
              <Registration />
            </AuthLayout>
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
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;

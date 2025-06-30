import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AuthLoader from "./components/auth/auth-loader";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <section className="flex items-center justify-center w-screen h-screen">
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route
            path="/"
            element={
              <AuthLoader>
                <Home />
              </AuthLoader>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </section>
    </Router>
  );
};

export default App;

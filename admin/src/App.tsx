import { Button } from '@ui';
import { toast } from 'sonner';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <section>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Button onClick={() => toast.success('Hello!')}>Click me</Button>
            }
          />
        </Routes>
      </Router>
    </section>
  );
};

export default App;

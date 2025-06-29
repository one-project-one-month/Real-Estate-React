import { toast } from "sonner";

const App = () => {
  return <button onClick={() => toast("toasted!")}>Toast</button>;
};

export default App;

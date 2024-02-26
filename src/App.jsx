import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Wizard from "./components/Wizard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Wizard />} />
      </Routes>
    </Router>
  );
}

export default App;

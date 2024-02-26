import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Onboarding from "./pages/Onboarding.jsx";
import DataIntegration from "./pages/DataIntegration.jsx";
import ModelSelection from "./pages/ModelSelection.jsx";
import TrainingEvaluation from "./pages/TrainingEvaluation.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/data-integration" element={<DataIntegration />} />
        <Route path="/model-selection" element={<ModelSelection />} />
        <Route path="/training-evaluation" element={<TrainingEvaluation />} />
      </Routes>
    </Router>
  );
}

export default App;

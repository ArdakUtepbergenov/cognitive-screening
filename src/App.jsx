import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Questionnaire from "./pages/Questionnaire";
import Game from "./pages/Game";
import Result from "./pages/Result";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/questionnaire" element={<Questionnaire />} />
      <Route path="/game" element={<Game />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}
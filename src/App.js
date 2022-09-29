import { Routes, Route } from "react-router-dom";
import "./App.css";
import DotRing from "./Components/dotcursor/DotRing";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <DotRing />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;

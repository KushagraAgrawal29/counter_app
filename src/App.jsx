import { Route, Routes } from "react-router-dom";
import "./App.css";
import Counter from "./components/Counter";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div className="bg-gray-200 text-black p-4">
      <div className="flex justify-center gap-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

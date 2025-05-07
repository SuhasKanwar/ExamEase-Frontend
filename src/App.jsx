import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import About from "./components/About";
import Featured from "./components/Featured";
import Dashboard from "./pages/Dashboard";
import McqPage from "./pages/McqPage";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Featured />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mcq" element={<McqPage/>} />
        <Route path="/result" element={<ResultPage/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
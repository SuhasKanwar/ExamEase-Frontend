import {BrowserRouter, Route, Routes,Router,} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Router>
    </BrowserRouter>
  );
}

export default App;

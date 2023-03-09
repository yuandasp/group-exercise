import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Users from "./pages/Users";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;

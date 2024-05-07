import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";
import { useSelector } from "react-redux";
import { selectUser } from "./store/slices/authSlice";

function App() {
  const loggedInUser = useSelector(selectUser);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import "./App.css";
import { useSelector } from "react-redux";
import { selectUser } from "./store/slices/authSlice";
import Login from "./pages/Login";

function App() {
  const loggedInUser = useSelector(selectUser);

  return (
    <Router>
      <div className="App">{loggedInUser ? <AppRoutes /> : <Login />}</div>
    </Router>
  );
}

export default App;

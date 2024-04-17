import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import jwtDecode from "jwt-decode";
import { logInWithToken, selectUser } from "./store/slices/authSlice";

function App() {
  const dispatch = useDispatch();
  const loggedInUser = useSelector(selectUser);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && !loggedInUser) {
      const decodedToken = jwtDecode(localStorage.getItem("token"));
      const isExpired = () => {
        const dateNow = Date.now() / 1000;
        return dateNow > decodedToken.exp;
      };
      if (!isExpired()) {
        const fetchUserWithToken = async () => {
          try {
            const data = {
              /* Your fetched user data */
            };
            dispatch(logInWithToken(data));
          } catch (error) {
            console.error("Error fetching user with token:", error);
          }
        };

        fetchUserWithToken();
      }
    }
  }, [dispatch, loggedInUser]);

  return (
    <Router>
      <div className="App">
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;

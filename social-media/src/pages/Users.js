
  import { useLocation } from "react-router";
  import React, { useEffect, useState } from "react";
  import classes from "./styles/Login.module.css";
  import { getUsers } from "../api/users/users";

  const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getUsers();
            setUsers(data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
      }, []); 

      console.log("users", users)
    
  
    return (
      <div className={classes.container}>
      <h1>Ari</h1>
      </div>
    );
  };
  
  export default Users;
  
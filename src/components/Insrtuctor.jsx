import React from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Insrtuctor = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    axios.post("http://localhost:8080/logout", {})
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
      <div>
          <div>
              <h1>Insrtuctor page</h1>
          </div>
          <div>
            <button onClick={handleLogout}>Log Out</button>
          </div>
    </div>
  )
}

import React, { useState } from "react";
import axios from "axios";

export const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const login = async (username, password) => {
    return await axios.post("http://localhost:8080/login", {
      username: username,
      password: password,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const handleSubmit = () => {
    const uname = username;
    const pword = password;
    login(uname, pword).then((response) => {
      if (response.status === 200) {
        alert("success");
      } else {
        alert("error");
      }
    });
  };

  return (
    <div>
      <div>
        <h1>Login</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => {
              setusername(e.target.value);
            }}
            value={username}
          ></input>

          <br />

          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          ></input>

          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

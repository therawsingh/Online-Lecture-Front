import React, { useState } from "react";
import axios from "axios";

export const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const login = ( username, password ) =>
  {
    alert( "inside login method" );
    return axios.post( "http://localhost:8080/login", {
      username: username,
      password: password,
    },
      {
        auth: {
          username: username,
          password: password,
        },
      } );
  }

  const handleSubmit = () => {
    const uname = username;
    const pword = password;
    alert("inside handlesubmit method");
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

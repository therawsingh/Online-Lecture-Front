import React, { useState } from "react";
import axios from "axios";
import { Admin } from "./Admin";
import { Insrtuctor } from "./Insrtuctor";

export const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [user, setuser] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await axios
        .post("http://localhost:8080/login", {
          username: username,
          password: password,
        })
        .then((res) => {
          console.log(res.data);

          if (res.status === 200) {
            alert("Success");
            setuser(res.data);
          } else if (res.status === 401) {
            alert("Fail");
          } else if (res.status === 404) {
            alert("Not Found");
          }
        });
    } catch (err) {
      alert("Bad Credentials");
    }
  }

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

      {user && (
        <div>
          {user.authorities[0].authority === "ROLE_ADMIN" ? (
            <Admin />
          ) : (
            <Insrtuctor />
          )}
        </div>
      )}
    </div>
  );
};

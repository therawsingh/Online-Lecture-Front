import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [user, setuser] = useState(null);
  const navigate = useNavigate();

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
          console.log(res.status);

          if (res.status === 200) {

            setuser(res.data);

            if (res.data.authorities[0].authority === "ROLE_ADMIN") {
              navigate("/admin");
            } else {
              navigate("/instructor");
            }

          } else if (res.status === 401) {
            alert("Fail");
          } else if (res.status === 404) {
            alert("Not Found");
          }
        });
    } catch (err) {
      console.log(err);
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
    </div>
  );
};

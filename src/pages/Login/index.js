import "./index.css";
import { auth } from "../../features/authSlices.js";
import { useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  return (
    <div className="Login">
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          const data = await axios
            .post("http://localhost:3000/login", {
              username,
              password,
            })
            dispatch(auth(data.data))
            navigate("/")
        }}
        className="FormSide"
      >
        <h1>Hoşgeldiniz</h1>
        <div className="FormSideInput">
          <label htmlFor="username">Kullanıcı Adı:</label>
          <input
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            id="username"
            placeholder="Kullanıcı Adınızı Giriniz"
          />
          <label htmlFor="password">Şifre:</label>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            id="password"
            placeholder="Şifrenizi Giriniz"
          />
        </div>
        <button className="LoginButton" type="submit">
          Giriş Yap
        </button>
      </form>
    </div>
  );
}

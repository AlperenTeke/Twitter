import "./index.css";
import axios from "axios";


export default function Register() {
  function fetch(e) {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3000/register",
        {
          email: document.getElementById("email").value,
          username: document.getElementById("username").value,
          password: document.getElementById("password").value,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((r) => {
        console.log(r.data)
      });
  }

  return (
    <div className="Register">
      <form className="FormSide">
        <h1>Aramıza Katıl!</h1>
        <div className="FormSideInput">
          <label htmlFor="username">Kullanıcı Adı:</label>
          <input type="text" id="username" placeholder="Kullanıcı Adınız:" />
          <label htmlFor="email">E-mail:</label>
          <input type="text" id="email" placeholder="E-mail:" />
          <label htmlFor="password">Şifre:</label>
          <input
            type="password"
            id="password"
            placeholder="Şifrenizi Giriniz"
          />
        </div>
        <button onClick={fetch} className="RegisterButton">
          Giriş Yap
        </button>
      </form>
    </div>
  );
}

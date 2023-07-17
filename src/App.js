import { BsFillImageFill } from "react-icons/bs";
import { AiOutlineGif } from "react-icons/ai";
import "./App.css";
import { FaTwitter, FaHome } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
import Icon from "./components/icon.js";
import Card from "./components/card.js";
import Tweet from "./components/tweet.js";
import { useState, useEffect } from "react";
import users from "./data/user.js";
import axios from "axios";
import { getUser } from "./features/authSlices";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function App() {
  const logoStyle = { color: "white", fontSize: "33px", marginTop: "5px" };
  const style = { color: "white", fontSize: "26px" };
  const style1 = { color: "white", fontSize: "30px" };
  const [area, setArea] = useState("");
  const user = useSelector(getUser);
  const navigate = useNavigate();
  const [hashtag, setHashtag] = useState([
    {
      id: 0,
      aciklama: "Türkiye tarihinde gündemde!",
      altBaslik: "#HAYIRDIRLA GARDAŞ",
      icerik: "3.800 Tweet",
    },
    {
      id: 1,
      aciklama: "Türkiye tarihinde gündemde!",
      altBaslik: "#HAYIRDIRLA GARDAŞ",
      icerik: "3.800 Tweet",
    },
    {
      id: 2,
      aciklama: "Türkiye tarihinde gündemde!",
      altBaslik: "#HAYIRDIRLA GARDAŞ",
      icerik: "3.800 Tweet",
    },
    {
      id: 3,
      aciklama: "Türkiye tarihinde gündemde!",
      altBaslik: "#HAYIRDIRLA GARDAŞ",
      icerik: "3.800 Tweet",
    },
    {
      id: 4,
      aciklama: "Türkiye tarihinde gündemde!",
      altBaslik: "#HAYIRDIRLA GARDAŞ",
      icerik: "4.000 Tweet",
    },
    {
      id: 5,
      aciklama: "Türkiye tarihinde gündemde!",
      altBaslik: "#HAYIRDIRLA GARDAŞ",
      icerik: "3.800 Tweet",
    },
    {
      id: 6,
      aciklama: "Türkiye tarihinde gündemde!",
      altBaslik: "#HAYIRDIRLA GARDAŞ",
      icerik: "3.800 Tweet",
    },
    {
      id: 7,
      aciklama: "Türkiye tarihinde gündemde!",
      altBaslik: "#HAYIRDIRLA GARDAŞ",
      icerik: "3.800 Tweet",
    },
    {
      id: 8,
      aciklama: "Türkiye tarihinde gündemde!",
      altBaslik: "#HAYIRDIRLA GARDAŞ",
      icerik: "3.800 Tweet",
    },
  ]);
  const [data, setData] = useState([]);
  useEffect(() => {
    if (user == null) {
      navigate("/login");
    }
    axios.get("http://localhost:3000/tweet").then((r) => {
      setData(r.data);
    });
    console.log(data);
  }, []);
  async function tweetle() {
    const data = await axios.post("http://localhost:3000/tweet", {
      email: user.email,
      content: area,
    });
    console.log("bitti");
  }
  return (
    <div>
      {user && (
        <div className="container">
          <div className="div1">
            <div className="sidebar">
              <div className="sidebar_up">
                <div className="sidebar_logo">
                  <FaTwitter style={logoStyle} className="sidebar_logo" />
                </div>
                <ul>
                  <Icon icon="HiOutlineHome" title="Home" style={style} />
                  <Icon icon="HiOutlineSearch" title="Explore" style={style} />
                  <Icon
                    icon="PiBellLight"
                    title="Notifications"
                    style={style}
                  />
                  <Icon icon="MdOutlineEmail" title="Messages" style={style} />
                  <Icon icon="RiFileListLine" title="Lists" style={style} />
                  <Icon
                    icon="PiBookmarkSimpleLight"
                    title="Bookmarks"
                    style={style}
                  />
                  <Icon icon="VscVerified" title="Verified" style={style} />
                  <Icon icon="FiUser" title="Profile" style={style} />
                  <Icon icon="CiCircleMore" title="More" style={style} />
                </ul>
                <div className="sidebar_tweetBTN">
                  <button>Tweet</button>
                </div>
              </div>
              <div className="sidebar_down">
                <ul>
                  <li>
                    <a href="#">
                      <div className="sidebar_img">
                        <img id="sender-profile" src={user.image || ""} />
                      </div>
                      <div className="sidebar_name">
                        <h2>{user.username || ""}</h2>
                        <h5>@{user.username || ""}</h5>
                      </div>
                      <div className="sidebar_options">
                        <h2>...</h2>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="div2">
            <nav className="nav">Anasayfa</nav>
            <div className="heading">
              <ul>
                <li className="activeLi">Sana Özel</li>
                <li>Takip Edilenler</li>
              </ul>
            </div>
            <div className="cont">
              <div className="tweetCreate">
                <div className="left">
                  <img src={user.image || ""} alt="Bulunamadı" />
                </div>
                <div className="right">
                  <textarea
                    placeholder="Bir şeyler Paylaş"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                  />
                  <div className="rightbot">
                    <div>
                      <BsFillImageFill />
                      <AiOutlineGif />
                      <FaHome />
                      <FaHome />
                    </div>
                    <button onClick={tweetle} id="tweet-btn">
                      Tweet
                    </button>
                  </div>
                </div>
              </div>
              {data.map((rr) => {
                return (
                  <Tweet
                    src={rr.user[0].image}
                    name={rr.user[0].username}
                    content={rr.content}
                    badge={rr.user[0].badge}
                  />
                );
              })}
            </div>
          </div>

          <div className="div3">
            <div className="search-bar">
              <label>
                <HiOutlineSearch style={style1} />
              </label>
              <input
                type="text"
                id="search"
                placeholder="Twitter'da Ara"
              ></input>
            </div>
            <div className="ilgiGündem">
              <h1 className="genelBaslik">POPULER ETİKETLER</h1>
              {hashtag.map((s) => {
                return (
                  <Card
                    aciklama={s.aciklama}
                    altbaslik={s.altBaslik}
                    icerik={s.icerik}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

import { BsFillImageFill } from "react-icons/bs";
import { AiOutlineGif } from "react-icons/ai";
import "./App.css";
import { FaTwitter, FaHome } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
import Icon from "./components/icon.js";
import Card from "./components/card.js";
import Tweet from "./components/tweet.js";
import { useState } from "react";

function App() {
  const logoStyle = { color: "white", fontSize: "33px", marginTop: "5px" };
  const style = { color: "white", fontSize: "26px" };
  const style1 = { color: "white", fontSize: "30px" };
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

  return (
    <div>
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
                <Icon icon="PiBellLight" title="Notifications" style={style} />
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
                      <img
                        id="sender-profile"
                        src="https://avatars.githubusercontent.com/u/108869977?v=4"
                      />
                    </div>
                    <div className="sidebar_name">
                      <h2>Alperen Teke</h2>
                      <h5>@alperentekee26</h5>
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
                <img
                  src="https://avatars.githubusercontent.com/u/108869977?v=4"
                  alt="Bulunamadı"
                />
              </div>
              <div className="right">
                <textarea placeholder="Bir şeyler Paylaş" />
                <div className="rightbot">
                  <div>
                    <BsFillImageFill />
                    <AiOutlineGif />
                    <FaHome />
                    <FaHome />
                  </div>
                  <button>Tweet</button>
                </div>
              </div>
            </div>
            <Tweet
              name="Melek"
              src="https://cdn.discordapp.com/attachments/1127528396121964544/1128416259327926322/20405601.jpg"
              content="sesin gelmez, haber gönder nerdesin"
            />
            <Tweet
              name="Alperen"
              src="https://avatars.githubusercontent.com/u/108869977?v=4"
              content="Gözlerinde kodumdaki noktalı virgül hatası gibi kaybolmak istiyorum."
            />
            <Tweet
              name="Master"
              src="https://avatars.githubusercontent.com/u/132709251?s=48&v=4"
              content="react day 2 yazişim böyle"
            />
            <Tweet
              name="Zeus"
              src="https://images.boboscope.com/64a11f52-7fdc-40b0-ad81-630cc1ad0f2a?alt=media&token=4ff015c4-c6de-4e58-aca6-7a6c362e9810&tr=w-1100,c-at_max,f-auto"
              content="Sitede kocaman bir boşluk var bilmem anlatabildim mi?"
            />
            <Tweet
              name="Ömer Can Balcı"
              src="https://media.discordapp.net/attachments/1127528396121964544/1128620854658465832/aptal_orospu.jpg?width=380&height=676"
              content="yas 16 70kg'yım steroid bastim sa"
            />
            <Tweet
              name="Arda"
              src="https://avatars.githubusercontent.com/u/132709251?s=48&v=4"
              content="selamlar!"
            />
            <Tweet
              name="Hardy"
              src="https://avatars.githubusercontent.com/u/132709251?s=48&v=4"
              content="selamlar!"
            />
          </div>
        </div>

        <div className="div3">
          <div className="search-bar">
            <label><HiOutlineSearch style={style1} /></label>
            <input type="text" id="search" placeholder="Twitter'da Ara"></input>
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
    </div>
  );
}

export default App;

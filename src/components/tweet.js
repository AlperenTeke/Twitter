import "./tweet.css";

export default function (props) {
  return (
    <div className="tweet">
      <img src={props.src} alt="Resim Undefined Gardaş" />
      <div>
        <div
          style={{ fontWeight: "900", display: "flex", alignItems: "center" }}
        >
          {props.name}
          <span className="username">
            {" @" + props.name.split(" ")[0].toLowerCase()}
          </span>
          {props.badge && <img src={props.badge} className="badge" alt="badge" />}
        </div>
        <div>{props.content}</div>
        <div className="icons"></div>
      </div>
    </div>
  );
}

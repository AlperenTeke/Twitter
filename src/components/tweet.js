

export default function(props){
    return <div className="tweet">
        <img src={props.src} alt="Resim Undefined Gardaş" />
        <div>
            <div style={{fontWeight:"900"}}>{props.name}<span className="username">{" @"+props.name.split(" ")[0].toLowerCase()}</span></div>
            <div>{props.content}</div>
            <div className="icons">
            
            </div>
        </div>
    </div>
}
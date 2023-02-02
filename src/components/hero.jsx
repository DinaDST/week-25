import "./hero.css";

function Hero(props) {
    return (
        <div className = "hero-card">
        <img src ={props.url} alt = "batman" className="hero-img"/>
        <div className = "hero-name">{props.name}</div> 
        <div className="hero-info">{props.info}</div>
        <div className="hero-power">{props.power}</div> 
        </div>
    );
}

export default Hero;
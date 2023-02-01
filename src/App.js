import React from "react";

import "./App.css";
import "./components/hero.css";

class App extends React.Component {
    render() {
        return ( <
            div className = "App" >
            <
            div className = "hero-card" >
            <
            img src = "./bet.jpg"
            alt = "batman" > { " " } <
            /img>{" "} <
            div className = "hero-name" > Бэтмэн < /div> <div className="hero-info"> Летучая мышь </div > { " " } <
            /div>{" "} <
            /div>
        );
    }
}

export default App;
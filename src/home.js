import React, { Component } from "react";
import CheeseySunset from "./assets/cheeseysunset.jpeg"
import words from "./data.json"
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
 
class Home extends Component {
  render() {
    return (
        <HashRouter>
      <div>
          <img src={CheeseySunset}></img>
          <div class="section">
            <h2>HELLO</h2>
            <p>{words.Home.p1}</p>
            <p>{words.Home.p2}</p>
            <p>{words.Home.p3}</p>
            <p>(P.S. This portfolio website was really just an excuse for me to build something with React. 
                <NavLink to='/contact'> How’d I do?</NavLink>)</p>
        </div>
      </div>
      </HashRouter>
    );
  }
}
 
export default Home;
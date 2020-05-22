import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import data from "./data.json"
import blockx from "./assets/BlockXSC.png"
import buddyup from "./assets/buddyup.png"
import fr from "./assets/frimage.png"

const pdata = data.Projects;
const images = [blockx, buddyup, fr]

class Projects extends Component {

  render() {
    return (
      <div class="section">
        <h1 class="title has-text-centered">
          PROJECTS
        </h1>
        <Tiles></Tiles>
      </div>
    );
  }
}

class Tiles extends Component {
  renderTile(i) {
    return(
      <div class="tile is-parent is-4">
        <NavLink to="/projects/blockx">
        <article class="tile is-child box ">
          <p class="subtitle is-3 has-text-centered ">{pdata[i].title}</p>
          <img class="image" src={images[i]}></img>
          <p class="subtitle">{pdata[i].caption}</p>
        </article>
          </NavLink>
      </div>
    );
  }
  render() {
    return(
      <HashRouter>
        <div class="tile is-ancestor">
            {this.renderTile(0)}
            {this.renderTile(1)}
            {this.renderTile(2)}
        </div>
      </HashRouter>
    );
  }
}



export default Projects;
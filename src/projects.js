import React, { Component } from "react";
import {
  Route,
  NavLink
} from "react-router-dom";
import data from "./data.json"
import blockx from "./assets/blockx.png"
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
        <Content></Content>
      </div>
    );
  }
}

class Tiles extends Component {
  renderTile(i) {
    return(
      <div class="tile is-parent is-4">
        <NavLink to={"/projects/" + pdata[i].path}>
        <article class="tile is-child box ">
          <p class="subtitle is-4 has-text-centered ">{pdata[i].title}</p>
          <img class="image" src={images[i]}></img>
          <p class="subtitle is-6"><br></br>{pdata[i].caption}</p>
        </article>
        </NavLink>
      </div>
    );
  }
  render() {
    return(
        <div class="tile is-ancestor">
            {this.renderTile(0)}
            {this.renderTile(1)}
            {this.renderTile(2)}
        </div>
    );
  }
}

class Content extends Component {
  render() {
    return(
      <div className="content">
            <Route path="/projects/blockx" component={BlockX}/>
            <Route path="/projects/buddyup" component={BuddyUp}/>
            <Route path="/projects/elevate" component={Elevate}/>
      </div>
    );
  }
}

class BlockX extends Component {
  render() {
    return (
      <div>
        hello
      </div>
    );
  }
}

class BuddyUp extends Component {
  render() {
    return (
      <div>
        hello
      </div>
    );
  }
}

class Elevate extends Component {
  render() {
    return (
      <div>
        hello
      </div>
    );
  }
}


export default Projects;
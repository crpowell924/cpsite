import React, { Component } from "react";
import {
  Route,
  NavLink
} from "react-router-dom";
import unified from 'unified'
import parse from 'remark-parse'
import remark2react from 'remark-react'
import data from "./data.json"
import blockx from "./assets/blockx.png"
import buddyup from "./assets/buddyup.png"
import fr from "./assets/frimage.png"
import blocktext from './blockx.md.js'

const pdata = data.Projects;
const images = [blockx, buddyup, fr]

class Projects extends Component {

  render() {
    return (
      <div className="section">
        <h1 className="title has-text-centered">
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
      <div className="tile is-parent is-4">
        <NavLink to={"/projects/" + pdata[i].path}>
        <article className="tile is-child box ">
          <p className="subtitle is-4 has-text-centered ">{pdata[i].title}</p>
          <img className="image" src={images[i]} alt={pdata[i].title}></img>
          <p className="subtitle is-6"><br></br>{pdata[i].caption}</p>
        </article>
        </NavLink>
      </div>
    );
  }
  render() {
    return(
        <div className="tile is-ancestor">
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
  constructor(props) {
    super(props)
    this.state = { text: blocktext }

  }
  render() {
    return (
      <div>
          {
            unified()
              .use(parse)
              .use(remark2react)
              .processSync(this.state.text).result
          }
      </div>
    )
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
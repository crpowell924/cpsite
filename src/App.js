import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from './home'
import Projects from "./projects";
import Play from "./play"
import Contact from "./contact";
import Header from "./assets/carleeheader1.png"
import Footer from "./footer"

class App extends Component {
  render() {
    return(
      <div class="container has-background-light">
      <section class="has-text-centered">
      <figure class="image">
        <img src={Header}></img>
      </figure>
      <Navigation></Navigation>
      </section>
      <Content></Content>
      <Footer></Footer>
      </div>
      );
  }
}

class Navigation extends Component {
  render () {
    return(
      <HashRouter>
        <div class="tabs is-boxed is-centered">
        <ul className="header">
            <li><NavLink to="/">home</NavLink></li>
            <li><NavLink to="/projects">work</NavLink></li>
            <li><NavLink to="/play">play</NavLink></li>
            <li><NavLink to="/contact">contact</NavLink></li>
        </ul>
        </div>
      </HashRouter>
    );
  }
}

class Content extends Component {
  render () {
    return (
      <HashRouter>
      <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/play" component={Play}/>
            <Route path="/contact" component={Contact}/>
      </div>
      </HashRouter>
    )
  }
}


export default App;

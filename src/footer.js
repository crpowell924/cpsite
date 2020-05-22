import React, { Component } from "react";
import Twitter from "./assets/twitter.png"
import Insta from "./assets/insta.png"
import Linkedin from "./assets/linkedin.png"
import data from "./data.json"
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";


class Footer extends Component {
    renderIcon(platform, url) {
        return(
            <Icon platform={platform} url={url}></Icon>
        )
    }
    render () {
      return (
        <section class="has-text-centered">
        <div class="footer has-background-light">
            {this.renderIcon(Insta, data.Footer.urls.insta)}
            <span>     </span>
            {this.renderIcon(Twitter, data.Footer.urls.twitter)}
            <span>     </span>
            {this.renderIcon(Linkedin, data.Footer.urls.linkedin)}
        </div>
        </section>
      );
    }
  }

function Icon(props) {
    return (
            <a href={props.url}>
            <span class="icon is-large">
            <figure class="image is-96x96">
            <img src={props.platform}></img>
            </figure>
            </span>
            </a>
    );
}

export default Footer;
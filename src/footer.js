import React, { Component } from "react";
import Twitter from "./assets/twitter.png"
import Insta from "./assets/insta.png"
import Linkedin from "./assets/linkedin.png"
import data from "./data.json"


class Footer extends Component {
    renderIcon(platform, url) {
        return(
            <Icon platform={platform} url={url}></Icon>
        )
    }
    render () {
      return (
        <section className="has-text-centered">
        <div className="footer has-background-light">
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
            <span className="icon is-large">
            <figure className="image is-96x96">
            <img src={props.platform} alt="Social Media"></img>
            </figure>
            </span>
            </a>
    );
}

export default Footer;
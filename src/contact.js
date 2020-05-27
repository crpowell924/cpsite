import React, { Component } from "react";
import resume from './assets/Carlee_Powell_Resume_5-11-20.pdf'
 
class Contact extends Component {
  render() {
    return (
      <div className="section has-text-centered">
        <h1 className="title">CONTACT</h1>
        <p><a href="mailto:crpowell924@gmail.com" className="has-text-link">crpowell924@gmail.com</a></p>
        <p>(919)454-8306</p>
        <p>So you like what you saw, huh? For all things business, the best way to reach me is at my 
        <a href="mailto:crpowell924@gmail.com" className="has-text-link"> email. </a></p>
        <p>You can also find me on social media, linked in the icons at the bottom of the page.</p>   
        <p>Or in case you like things a little more formal, here's a pdf of my <a href={resume} className="has-text-link">resume</a>. </p>
        <p>Thanks for stopping in!</p>
      </div>
    );
  }
}
 
export default Contact;
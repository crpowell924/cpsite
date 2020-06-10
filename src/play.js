import React, { Component } from "react";
// import unified from 'unified'
// import parse from 'remark-parse'
// import remark2react from 'remark-react'
// import play from './play.md';
import marathon from './assets/marathon.jpg'
import climbing from './assets/climbing.jpg'
import psalm from './assets/psalm.jpg'
import cross from './assets/cross.jpg'
import backpacking from './assets/backpacking.JPG'
 
class Play extends Component {
  render() {
    return (
      <div className="section">
        <h1 className="title has-text-centered">ABOUT ME</h1>
          <img  src={marathon} align="right" height="300" width="300" hspace="20" vspace="10"/>
          <p className="content">Hey, developers are people too! I may have a passion for programming, but my life consists of more than vim and VScode. I love being active-- physically, musically, spiritually, and socially. 
          </p>
          <h3 className="subtitle">sports!</h3>
          <p className="content">I’m pretty much always down for physical activity-- I love the feeling of working my body to the limit. It’s just really rewarding for me, so I hardly ever go a day without some form of exercise. I ran a marathon in 2018, but now I run 15-20 miles a week. I love playing spikeball, volleyball, and really any other sport (besides soccer. I’m so bad at soccer).
          </p>
          <img src={climbing} align="left" height="300" width="200" hspace="20" vspace="10"/>
          <p className="content">I have developed a love for rock climbing over the past few years, which is a big part of why I’m so pumped to live near the Rocky mountains! So far, I’ve mostly climbed in gyms, but the few times I’ve climbed outside have been some of my favorite experiences. I love the feeling of the rough rock under my fingers, and enjoying the jungle gym God created. I love the adrenaline of looking around from 100 feet up, trusting a few bolts and carabiners to hold me in place. Climbing is a sport that requires great strategy and strength, and every top is another achievement.
          </p>
          <h3 className="subtitle has-text-right">music!</h3>
          <p className="content ">Music has been a big part of my life since childhood, as I was raised in an a cappella church (that means no piano either, for real). I have been reading music and playing instruments since elementary school, singing in choir and private lessons since high school, and I was fortunate enough to sing in an A Cappella group throughout my time at UNC. Being in Psalm 100 allowed me to continue to sing, grow in my faith, and make amazing friends. It’s one of those things that really changed the course of my college career-- and I couldn’t be more thankful for it. It was such a bummer not to be able to sing in what would have been my final spring concert with Psalm (thanks COVID), but it’s hard to complain too much with the loveliest four years under my belt. 
          <img src={psalm} align="right" height="300" width="200" hspace="20" vspace="10"/>
          </p>
          <h3 className="subtitle ">faith!</h3>
          <p className="content">The most important aspect of my identity is certainly my faith. I’m thankful to have the ability, resources, and freedom to really study religion on my own. Through this study of religions, I’ve found a solid relationship with God through the Bible and the Christian church. 
          <img src={cross} align="left" height="300" width="200" hspace="20" vspace="10"/>
          The overwhelming love and grace of God shown in the life and death of Jesus is impossibly beautiful. It really has captivated my mind and my heart eternally. Because of that, I desire to show love to all people, enjoy the gifts of life, and do good work for the glory of God.
          </p>
          <h3 className="subtitle has-text-right">friends!</h3>
          <p className="content">Probably my most defining personality trait is my extroversion. I will almost always say yes to new plans, as long as it involves friends, family, or any other humans. One of the greatest thrills to me is developing a new friendship. I love learning how people tick. I love growing in mutual trust with another human, and being able to walk with someone through any part of their life. 
          </p>
          <p className="content">So, that’s me. I’m just a Carolina girl with a lot of passion. Hit me up if you want to talk about any of the aforementioned topics (or just be friends-- you know I love new friends). 
          </p>
          <p className="content has-text-centered">Oh and here's a full-size pic of me living my best life on a recent backpacking trip in Pisgah National Forest:</p>
          <img src={backpacking} align="center"/>
          
      </div>
    );
  }
}


 
export default Play;
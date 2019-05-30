import React, { Component } from 'react';
import '../../Style/accordion.css';
const iconPath = process.env.PUBLIC_URL + '/assets/';

class AboutContent extends Component {

  render() {
    return (
      <div className="content-about-container">
        <div className="content-about-title"></div>
        <div className="content-about-description">
          <div className="content-about-intro">
            My name's <b>Micky</b>, a graduate software developer based in London.<br/><br/><br/>
          I'm currently looking for work as a Software Developer with professional experience as a web developer and a keen interest in Media, Data Structures and Algorithms and Web Technologies. 
          </div>
          <div className="content-about-skills-container">
            <div className="item-1"><b>Skills</b> and <b>Technologies</b></div>
            <div className="content-about-skill-item item-2"><span>&#8226;</span> HTML5, CSS3, JavaScript, React, Redux, ES6.</div>
            <div className="content-about-skill-item item-3"><span>&#8226;</span> Flexbox, CSS-Grid and Bootstrsap.</div>
            <div className="content-about-skill-item item-4"><span>&#8226;</span> Object Oriented Programming using Python and Java. </div>
            <div className="content-about-skill-item item-5"><span>&#8226;</span> Professional version managament experience using Git.</div>
            <div className="content-about-skill-item item-6"><span>&#8226;</span> Creating RESTFUL APIs with Node and Express. </div>
            <div className="content-about-skill-item item-7"><span>&#8226;</span> NoSQL and SQL Database experience with MongoDB and MySQL.</div>
          </div>
          <div className="content-about-contact-info">
            <div>If you want to find out more about me, you can read my CV <a href={`${iconPath}cv_portfolio.pdf`} target="_blank">here.</a></div>
            <div className="content-about-socials-container">
              <div className="content-about-social-item"><img alt="github" src={`${iconPath}images/github.png`} /></div>
              <div className="content-about-social-item"><img alt="linkedin" src={`${iconPath}images/linkedin.png`} /></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutContent;

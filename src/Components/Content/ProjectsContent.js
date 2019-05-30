import React, { Component } from 'react';
import '../../Style/accordion.css';
const iconPath = process.env.PUBLIC_URL + '/assets/images/';

const slides = [
  {
    title: "DOBBLE",
    description: `An online game created with React where you can play the card game 'Dobble'.`,
    backgroundImage: `url(${iconPath}dobble.png)`,
    link: "https://mickydore.github.io/Dobble-Practice/"
  },
  {
    title: "PYTHON WEB SCRAPER",
    description: "A python webscraper built to scan local music venue websites and alert the user to newly added gigs.",
    backgroundImage: `url(${iconPath}scraper.png)`,
    link: "https://github.com/MickyDore/GigWebScraper"
  },
  {
    title: "PROGRAMMING CHALLENGES",
    description: "A variety of online challenges completed in different programming languages.",
    backgroundImage: `url(${iconPath}challenge.png)`,
    link: "https://github.com/MickyDore/ProgrammingChallenges"
  },
];


class ProjectsContent extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      slideIndex: 0
    }
  }
  
  handleSlideChange = (change) => {
    if (this.state.slideIndex === 0 && change === -1) {
      this.setState({
        slideIndex: slides.length-1
      })
    } else if (this.state.slideIndex === slides.length - 1 && change === 1) {
      this.setState({
        slideIndex: 0
      })
    } else {
      this.setState({
        slideIndex: this.state.slideIndex + change
      })
    }
  }
  
  handleLinkClick = () => {
    window.open(slides[this.state.slideIndex].link);
  }
  
  
  render() {
    return (
      <div className="content-projects-container">
        <div className="content-projects-title">Check out some of my work!</div>
        
        <div className="content-projects-item-container">
          <span 
            className="content-projects-item-left"
            onClick={() => this.handleSlideChange(-1)}
          >
            &#60;
          </span>
          <span 
            className="content-projects-item-right"
            onClick={() => this.handleSlideChange(1)}
          >
            &#62;
          </span>
          <div className="content-projects-item">
            <div className="content-projects-item-link" onClick={this.handleLinkClick}><img alt="live demo" src={`${iconPath}github.png`} /></div>
            <div className="content-projects-item-image" style={{backgroundImage: `${slides[this.state.slideIndex].backgroundImage}`}}></div>
            <div className="content-projects-item-info-container">
              <div className="content-projects-item-title">{slides[this.state.slideIndex].title}</div>
              <div className="content-projects-item-info">{slides[this.state.slideIndex].description}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectsContent;

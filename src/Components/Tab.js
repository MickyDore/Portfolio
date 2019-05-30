import React, { Component } from 'react';
import '../Style/accordion.css';
import HomeContent from './Content/HomeContent.js';
import AboutContent from './Content/AboutContent.js';
import ProjectsContent from './Content/ProjectsContent.js';
import ContactContent from './Content/ContactContent.js';

class Tab extends Component {

  render() {
    var content = "";
    switch (this.props.title) {
      case "home":
        content = <HomeContent></HomeContent>
        break;
        case "about":
          content = <AboutContent></AboutContent>
          break;
        case "projects":
          content = <ProjectsContent></ProjectsContent>
          break;
        case "contact":
          content = <ContactContent></ContactContent>
          break;
        default:
          content = "";
          break;
    }
    return (
      <div
        className={this.props.active ? `accordion-section accordion-active ${this.props.title}` : `accordion-section ${this.props.title}`}
        onClick={() => {this.props.handleClick(this.props.index)}}>
        <div className="accordion-section-title"><span>{this.props.title}</span></div>
        {this.props.active ? <div className="accordion-section-content">{content}</div> : ""}

      </div>
    )
  }
}

export default Tab;

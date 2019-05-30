import React, { Component } from 'react';
import '../Style/accordion.css';
import Tab from './Tab';
import Home from './Home';
const iconPath = process.env.PUBLIC_URL + '/assets/images/';

class Accordion extends Component {

  constructor(props) {
    super(props)

    this.state = {
      activeTab: 0
    }
  }

  handleClick = (index) => {
    this.setState({
      activeTab: index
    })
  }

  render() {
    return (
      <div className="accordion-container">
        <Tab
          handleClick={this.handleClick}
          index={0}
          active={this.state.activeTab == 0 ? true : false}
          title="home"
          content="this is the content of the tab"
        ><Home></Home>
        </Tab>
        <Tab
          handleClick={this.handleClick}
          index={1}
          active={this.state.activeTab == 1 ? true : false}
          title="about"
        >
        </Tab>
        <Tab
          handleClick={this.handleClick}
          index={2}
          active={this.state.activeTab == 2 ? true : false}
          title="projects"
        >
        </Tab>
        <Tab
          handleClick={this.handleClick}
          index={3}
          active={this.state.activeTab == 3 ? true : false}
          title="contact"
        >
        </Tab>
      </div>
    )
  }
}

export default Accordion;

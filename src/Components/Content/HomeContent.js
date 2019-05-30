import React, { Component } from 'react';
import '../../Style/accordion.css';
const iconPath = process.env.PUBLIC_URL + '/assets/images/';

class HomeContent extends Component {

  render() {
    return (
      <div className="content-home-container">
        <div className="content-home-image"><img alt="profile" src={`${iconPath}profile.jpg`} /></div>
        <div className="content-home-title">- Micky Dore -<br></br>Graduate Software Developer</div>
        <div className="content-home-description"></div>
      </div>
    )
  }
}

export default HomeContent;

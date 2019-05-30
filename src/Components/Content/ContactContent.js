import React, { Component } from 'react';
import '../../Style/accordion.css';
const iconPath = process.env.PUBLIC_URL + '/assets/images/';

class ContactContent extends Component {

  render() {
    return (
      <div className="content-home-container">
        <div className="content-home-image"></div>
        <div className="content-home-title"></div>
        <div className="content-home-description"></div>
      </div>
    )
  }
}

export default ContactContent;

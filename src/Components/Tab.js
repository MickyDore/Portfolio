import React, { Component } from 'react';
import '../Style/accordion.css';

class Tab extends Component {

  render() {
    return (
      <div
        className={this.props.active ? "accordion-section accordion-active" : "accordion-section"}
        onClick={() => {this.props.handleClick(this.props.index)}}>
        Lorem Ipsum
      </div>
    )
  }
}

export default Tab;

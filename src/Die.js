import React, { Component } from "react";
// import "@fortawesome/fontawesome-free/css/all.css";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numWords: ["one", "two", "three", "four", "five", "six"],
    val: 5,
  };
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  // handle click function
  handleClick() {
    this.props.handleClick(this.props.idx);
  }

  render() {
    const { locked, val, numWords, disabled, rolling } = this.props;
    let classes = `fas fa-dice-${numWords[val - 1]} fa-5x `;
    if (locked) classes += "Die-locked";
    if (rolling) classes += "Die-rolling";
    return (
      <i className={classes} onClick={this.handleClick} disabled={disabled}></i>
    );
  }
}

export default Die;

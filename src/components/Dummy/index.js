/**
 *  Dummy component
 */
import React, { Component } from "react";
import "./dummy.css";

class Dummy extends Component {
  constructor(props) {
    super(props);
    this.returnButtonHandler = this.returnButtonHandler.bind(this);
  }

  returnButtonHandler(e) {
    e.preventDefault();
    this.props.onToggle();
  }

  render() {
    return (
      <div className="dummy">
        <h1>This is Dummy component</h1>
        <button className="return-button" onClick={this.returnButtonHandler}>Return to main app</button>
      </div>
    );
  }
}

export default Dummy;
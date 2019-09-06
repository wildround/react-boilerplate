/**
 *  Main app
 */
import React, { Component } from "react";
import Dummy from "../Dummy";
import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMainAppVisible: true
    }

    this.onToggle = this.onToggle.bind(this);
  }

  onToggle() {
    this.setState({ isMainAppVisible: !this.state.isMainAppVisible });
  }

  render() {
    const { isMainAppVisible } = this.state;
    return (
      <div>
        {isMainAppVisible &&
          <div className="app">
            <h1>This is main app</h1>
            <button className="toggle-button" onClick={this.onToggle}>Toggle</button>
          </div>
        }
        {!isMainAppVisible &&
          <Dummy onToggle={this.onToggle}></Dummy>
        }
      </div>
    );
  }
}

export default App;

import React from "react";

export default class App extends React.Component {
  state = { name: "world" };

  render() {
    return <div className="hello">Hello, {this.state.name}.</div>;
  }
}

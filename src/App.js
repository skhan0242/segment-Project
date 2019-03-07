import React, { Component } from 'react';
import Header from "./component/Header"
import Content from "./component/Content"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header color="primary" />
        <Content />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";

import NoteListContainer from "./containers/NoteListContainer";

class App extends Component {
  render() {
    return (
      <div>
        <NoteListContainer />
      </div>
    );
  }
}

export default App;

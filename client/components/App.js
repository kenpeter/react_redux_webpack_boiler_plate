import React from 'react';

import ListLocation from "./ListLocation";
import Clickme from "./Clickme";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App.js</h1>
        <hr/>
        <Clickme />
        <hr/>
        <ListLocation />
      </div>
    );
  }
}

export default App;

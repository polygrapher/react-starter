import React from "react";

// import Component from './components/Component.jsx';

let styles = {
  app: {
    width: '70%',
    minWidth: 200,
    margin: '0 auto',
    fontFamily: 'Ubuntu, sans-serif'
  }
};

class App extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        Hello, React!
      </div>
    )
  }
}

React.render(<App />, document.getElementById("content"));

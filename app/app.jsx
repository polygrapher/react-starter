import React from "react";

/* Custom components */
import TodoList from './components/TodoList.jsx';
import TodoListItem from './components/TodoListItem.jsx';
import Footer from './components/Footer.jsx';

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
    var items = [];
    for (var i = 1; i <= 10; i++) {
      items.push({title: 'Item ' + i, done: (i%2 === 0)});
    }

    this.state = {
      items: items
    }
  }

  render () {
    return (
      <div style={styles.app} className="wrapper">
        <h3>Todo List</h3>
        <TodoList items={this.state.items} />
        <Footer items={this.state.items} />
      </div>
    );
  }
}

React.render(<App />, document.getElementById('content'));
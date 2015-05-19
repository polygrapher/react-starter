import React from "react/addons";

/* Custom components */
import Filter from './components/Filter.jsx';
import TodoList from './components/TodoList.jsx';
import TodoListItem from './components/TodoListItem.jsx';
import Footer from './components/Footer.jsx';

let styles = {
  app: {
    width: '60%',
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
      items.push({
        id: i,
        title: 'Item ' + i,
        status: (i%2 === 0 ? 'complete' : 'incomplete')
      });
    }

    this.state = {
      items: items,
      status: 'all'
    }
  }

  handleFilter (ev) {
    this.setState({
      status: ev.target.value
    });
  }

  changeItemStatus (index, checked) {
    var updateStatement = {};
    updateStatement[index] = {
      status: {$set: checked ? 'complete' : 'incomplete'}
    };
    this.setState(React.addons.update(this.state, {
      items: updateStatement
    }));
  }

  removeItem (index) {
    this.setState(React.addons.update(this.state, {
      items: {$splice: [[index, 1]]}
    }));
  }

  removeCompletedItems () {
    var incompleteItems = this.state.items.filter(this.filterByStatus.bind(this, 'incomplete'));
    this.setState(React.addons.update(this.state, {
      items: {$set: incompleteItems}
    }));
  }

  filterByStatus (status, item) {
    return status !== 'all' ? (status === item.status) : true;
  }

  render () {
    return (
      <div style={styles.app} className="wrapper">
        <h2>Todo List</h2>
        <Filter
          onFilter={this.handleFilter.bind(this)}
          selected={this.state.status}
        />
        <TodoList
          items={this.state.items.filter(this.filterByStatus.bind(this, this.state.status))}
          handleChange={this.changeItemStatus.bind(this)}
          handleRemove={this.removeItem.bind(this)}
        />
        <Footer
          items={this.state.items}
          handleRemoveCompleted={this.removeCompletedItems.bind(this)}
        />
      </div>
    );
  }
}

React.render(<App />, document.getElementById('content'));
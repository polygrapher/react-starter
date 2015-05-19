import React from "react";
import TodoListItem from './TodoListItem.jsx';

let styles = {
  list: {
    paddingLeft: 0,
    listStyleType: 'none'
  }
};

class TodoList extends React.Component {
  constructor (props) {
      super(props);
  }

  render () {
    var items = this.props.items.map(function(item, index) {
      return (
        <TodoListItem
          key={item.id}
          id={item.id}
          index={index}
          title={item.title}
          status={item.status}
          handleChange={this.props.handleChange}
          handleRemove={this.props.handleRemove}
        />
      )
    }, this);

    return (
      <ul
        style={styles.list}
        className="todo-list">
          {items}
      </ul>
    )
  }
}

TodoList.propTypes = {
  items: React.PropTypes.array.isRequired,
  handleChange: React.PropTypes.func.isRequired,
  handleRemove: React.PropTypes.func.isRequired
};

TodoList.defaultProps = {
  items: [],
  handleChange: React.PropTypes.func.isRequired,
  handleRemove: React.PropTypes.func.isRequired
};

export default TodoList;
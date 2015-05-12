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
    var items = this.props.items.map(function(item) {
      return (
        <TodoListItem
          key={item.title}
          title={item.title}
          done={item.done}
        />
      )
    });

    return (
      <ul style={styles.list} className="todo-list">{items}</ul>
    )
  }
}

TodoList.propTypes = {
  items: React.PropTypes.array.isRequired
};

TodoList.defaultProps = {
  items: []
};

export default TodoList;
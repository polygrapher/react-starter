import React from "react";

class TodoListItem extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
          <li className="todo-list__item">
            <label>
              <input type="checkbox" checked={this.props.done}/>
              {this.props.title}
            </label>
          </li>
        )
    }
}

TodoListItem.propTypes = {
  title: React.PropTypes.string.isRequired,
  done: React.PropTypes.bool.isRequired
};

TodoListItem.defaultProps = {
  title: '',
  done: false
};

export default TodoListItem;
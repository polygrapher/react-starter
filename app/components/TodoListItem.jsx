import React from "react";

let styles = {
  remove: {
    marginRight: '10px',
    cursor: 'pointer',
    fontSize: 16,
    fontWeight: 'bold'
  }
};

class TodoListItem extends React.Component {
  constructor (props) {
      super(props);
  }

  handleRemove (ev) {
    this.props.handleRemove(this.props.index)
  }

  handleChange (ev) {
    this.props.handleChange(this.props.index, ev.target.checked)
  }

  render () {
    return (
      <li className="todo-list__item">
        <i
          style={styles.remove}
          className="todo-list__remove-item"
          onClick={this.handleRemove.bind(this)}>
            &times;
        </i>
        <label>
          <input
            type="checkbox"
            onChange={this.handleChange.bind(this)}
            checked={this.props.status === 'complete'}
          />
          {this.props.title}
        </label>
      </li>
    )
  }
}

TodoListItem.propTypes = {
  id: React.PropTypes.number.isRequired,
  index: React.PropTypes.number.isRequired,
  title: React.PropTypes.string.isRequired,
  status: React.PropTypes.string.isRequired,
  handleChange: React.PropTypes.func.isRequired,
  handleRemove: React.PropTypes.func.isRequired

};

TodoListItem.defaultProps = {
  id: 0,
  index: 0,
  title: '',
  status: 'incomplete',
  handleChange: function() {},
  handleRemove: function() {}
};

export default TodoListItem;
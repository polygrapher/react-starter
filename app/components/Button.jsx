import React from "react";

let styles = {
  button: {
    float: 'right'
  }
};

class Button extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <button
        style={styles.button}
        name={this.props.name}
        onClick={this.props.onClick}>
          {this.props.title}
      </button>
    )
  }
}

Button.propTypes = {
  name: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired
};

Button.defaultProps = {
  name: 'button',
  title: 'Button',
  onClick: function() {}
};

export default Button;
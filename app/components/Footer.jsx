import React from "react";
import Counter from './Counter.jsx';
import Button from './Button.jsx';

let styles = {
  footer: {
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopStyle: 'solid',
    borderTopColor: 'black'
  }
};

class Footer extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <footer style={styles.footer}>
        <Counter {...this.props} />
        <Button
          name="remove"
          title="Remove completed"
          onClick={this.props.handleRemoveCompleted}
        />
      </footer>
    )
  }
}

Footer.propTypes = {
  items: React.PropTypes.array.isRequired,
  handleRemoveCompleted: React.PropTypes.func.isRequired
};

Footer.defaultProps = {
  items: [],
  handleRemoveCompleted: function() {}
};

export default Footer;
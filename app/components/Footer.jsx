import React from "react";

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
        Total: {this.props.items.length}
      </footer>
    )
  }
}

Footer.propTypes = {
  items: React.PropTypes.array.isRequired
};

Footer.defaultProps = {
  items: []
};

export default Footer;
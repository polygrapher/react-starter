import React from "react";

let styles = {
    counter: {
      border: 'none',
      float: 'left'
    }
};

class Counter extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        var incompleteItems = this.props.items.filter(function(item) {
          return item.status === 'incomplete';
        });
        return (
            <table style={styles.counter}>
              <tbody>
                <tr><td>Incomplete: {incompleteItems.length}</td></tr>
                <tr><td>Total: {this.props.items.length}</td></tr>
              </tbody >
            </table>
        )
    }
}

Counter.propTypes = {
    items: React.PropTypes.array.isRequired
};

Counter.defaultProps = {
    items: []
};

export default Counter;
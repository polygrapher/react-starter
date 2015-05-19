import React from "react";

let styles = {
  filter: {

  }
};

class Filter extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    var filters = this.props.filters.map(function(filter) {
      return (
        <label key={filter.value}>
          <input
            type="radio"
            name="status"
            defaultValue={filter.value}
            checked={this.props.selected === filter.value}
            onChange={this.props.onFilter}
          />
            {filter.label}
        </label>
      );
    }, this);
    return (
      <div style={styles.filter}>
        <strong>Filter by status:</strong> {filters}
      </div>
    )
  }
}

Filter.propTypes = {
  selected: React.PropTypes.string,
  onFilter: React.PropTypes.func.isRequired,
  filters: React.PropTypes.array.isRequired
};

Filter.defaultProps = {
  selected: 'all',
  onFilter: function() {},
  filters: [
    {label: 'Complete', value: 'complete'},
    {label: 'Incomplete', value: 'incomplete'},
    {label: 'All', value: 'all'}
  ]
};

export default Filter;
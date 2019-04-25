/* global _ */
import React from 'react';

export default class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.handleQueryChange = _.debounce((event) => {
      props.onQueryChange(event.target.value)
    }, 500);


    this.handleOrderChange = (event) => {
      props.onOrderChange(event.target.value)
    };
  }

  render() {
    return (
      <div className="Filter">
        <p>
          Search:
          <input onChange={this.handleQueryChange} />
        </p>

        <p>
          Sort by:
          <select onChange={this.handleOrderChange}>
            <option value="name">Alphabetical</option>
            <option value="age">Newest</option>
          </select>
        </p>
      </div>
    );
  }
}

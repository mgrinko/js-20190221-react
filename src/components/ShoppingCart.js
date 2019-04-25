import React from 'react';

export default class ShoppingCart extends React.Component {
  render() {
    return (
      <div>
        <h4>Shopping Cart</h4>
        <ul>
          {Object.keys(this.props.items).map(item => (
            <li>
              {item} - {this.props.items[item]}

              <button
                onClick={() => this.props.onRemove(item)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

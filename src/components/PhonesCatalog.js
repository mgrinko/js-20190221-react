import React from 'react';
import { Link } from 'react-router-dom';

export default class PhonesCatalog extends React.Component {
  render() {
    return (
      <div>
        <ul className="phones">
          {this.props.phones.map(phone => (
            <li className="thumbnail">
              <Link
                to={`/phones/${phone.id}`}
                className="thumb"
              >
                <img alt={phone.name} src={phone.imageUrl} />
              </Link>

              <div className="phones__btn-buy-wrapper">
                <a
                  onClick={() => this.props.onAdd(phone.id)}
                  className="btn btn-success"
                >
                  Add
                </a>
              </div>

              <Link to={`/phones/${phone.id}`}>
                {phone.name}
              </Link>

              <p>{phone.snippet}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

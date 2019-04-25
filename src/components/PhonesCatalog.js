import React from 'react';

export default class PhonesCatalog extends React.Component {
  render() {
    return (
      <div>
        <ul className="phones">
          {this.props.phones.map(phone => (
            <li className="thumbnail">
              <a
                onClick={() => this.props.onPhoneSelected(phone.id)}
                href={`#!/phones/${phone.id}`}
                className="thumb"
              >
                <img alt={phone.name} src={phone.imageUrl} />
              </a>

              <div className="phones__btn-buy-wrapper">
                <a
                  onClick={() => this.props.onAdd(phone.id)}
                  className="btn btn-success"
                >
                  Add
                </a>
              </div>

              <a
                onClick={() => this.props.onPhoneSelected(phone.id)}
                href={`#!/phones/${phone.id}`}
              >
                {phone.name}
              </a>

              <p>{phone.snippet}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

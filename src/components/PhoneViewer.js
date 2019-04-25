import React from 'react';
import { getById } from '../api/phones';

export default class PhoneViewer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedImage: this.props.phone ? this.props.phone.images[0] : null,
      phone: null,
    };
  }

  componentDidMount() {
    getById(this.props.phoneId)
      .then(phone => {
        this.setState({ phone });
      });
  }

  render() {
    const { phone } = this.state;

    if (!phone) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <img className="phone" src={this.state.selectedImage} />

          <button onClick={() => this.props.onAdd(phone.id)}>
            Add to basket
          </button>

          <h1>{phone.name}</h1>

          <p>{phone.description}</p>

          <ul className="phone-thumbs">
            {phone.images.map(imageUrl => (
              <li onClick={() => this.setState({ selectedImage: imageUrl })}>
                <img src={imageUrl} />
              </li>
            ))}
          </ul>
      </div>
    );
  }
}

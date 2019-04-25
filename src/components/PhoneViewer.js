import React from 'react';

export default class PhoneViewer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedImage: this.props.phone.images[0],
    };
  }

  render() {
    const { phone } = this.props;

    return (
      <div>
        <img className="phone" src={this.state.selectedImage} />

          <button onClick={this.props.onBack}>
            Back
          </button>

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

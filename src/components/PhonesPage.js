import React from 'react';

import PhonesCatalog from './PhonesCatalog.js';
import PhoneViewer from './PhoneViewer.js';
import ShoppingCart from './ShoppingCart.js';
import Filter from './Filter.js';
import { getAll, getById } from '../api/phones.js';

export default class PhonesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phones: [],
      query: '',
      order: 'name',
      selectedPhone: null,
      items: {
        qweqwe: 2,
        dfsdfgdfg: 1,
      },
    };

    this.onPhoneSelected = (phoneId) => this.selectedPhone(phoneId);
    this.onAdd = (phoneId) => this.addItem(phoneId);
    this.onBack = () => this.setState({ selectedPhone: null });
    this.onRemove = (itemToRemove) => this.removeItem(itemToRemove);

    this.onQueryChange = (query) => {
      this.setState({ query });
      this.loadPhones();
    };

    this.onOrderChange = (order) => {
      this.setState({ order });
      this.loadPhones();
    };
  }

  componentDidMount() {
    this.loadPhones();
  }

  async loadPhones() {
    const phones = await getAll({
      query: this.state.query,
      order: this.state.order,
    });

    this.setState({ phones });
  }

  addItem(item) {
    const oldItems = this.state.items;
    const items = {
      ...oldItems,
      [item]: oldItems[item] ? oldItems[item] + 1 : 1,
    };

    this.setState({ items });
  }

  removeItem(itemToRemove) {
    const newItems = { ...this.state.items };
    delete newItems[itemToRemove];

    this.setState({
      items: newItems,
    });
  }

  selectedPhone(phoneId) {
    getById(phoneId)
      .then(phone => {
        this.setState({ selectedPhone: phone });
      });
  }

  render() {
    return (
      <div class="row">
        <div class="col-md-2">
          <section>
            <Filter
              onQueryChange={this.onQueryChange}
              onOrderChange={this.onOrderChange}
            />
          </section>

          <section>
            <ShoppingCart
              items={this.state.items}
              onRemove={this.onRemove}
            />
          </section>
        </div>

        <div class="col-md-10">
          {this.state.selectedPhone ? (
            <PhoneViewer
              phone={this.state.selectedPhone}
              onBack={this.onBack}
              onAdd={this.onAdd}
            />
          ) : (
            <PhonesCatalog
              phones={this.state.phones}
              onPhoneSelected={this.onPhoneSelected}
              onAdd={this.onAdd}
            />
          )}
        </div>
      </div>
    );
  }
}

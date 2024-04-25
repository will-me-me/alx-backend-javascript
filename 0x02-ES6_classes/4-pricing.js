/* eslint-disable */

import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Getters
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // Setters
  set amount(amount) {
    if (typeof amount === 'number') this._amount = amount;
  }

  set currency(currency) {
    if (currency instanceof Currency) this._currency = currency;
  }

  // Utilities
  displayFullPrice() {
    const { amount, currency } = this;
    return `${amount} ${currency.name} (${currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

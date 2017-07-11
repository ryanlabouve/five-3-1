import Ember from 'ember';

import QueryParams from 'ember-parachute';

export const myQueryParams = new QueryParams({
  squatMax: {
    defaultValue: null,
  },
  deadliftMax: {
    defaultValue: null,
  },
  pressMax: {
    defaultValue: null,
  },
  benchMax: {
    defaultValue: null,
  },
  tms: {
    defaultValue: [0.85],
    serialize(value) {
      return value.toString();
    },
    deserialize(value = '') {
      return value.split(',').map(n => Number.parseFloat(n));
    }
  }
});

export default Ember.Controller.extend(myQueryParams.Mixin, {
  // queryParams: [
  //   'squatMax',
  //   'deadliftMax',
  //   'pressMax',
  //   'benchMax',
  //   'tms',
  //   'tps'
  // ]
});

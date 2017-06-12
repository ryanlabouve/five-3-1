import Ember from 'ember';

export default Ember.Component.extend({
  name: null,
  max: null,

  tps: [0.5, 0.55, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1.0],
});

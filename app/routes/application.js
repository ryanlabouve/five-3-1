import Ember from 'ember';
export default Ember.Route.extend({
  model({ squatMax, deadliftMax, pressMax, benchMax }) {
    return {
      squatMax: squatMax || 305,
      deadliftMax: deadliftMax || 350,
      pressMax: pressMax || 165,
      benchMax: benchMax || 245,
    }
  },

  setupController(controller, model) {
    controller.set('squatMax', model.squatMax);
    controller.set('deadliftMax', model.deadliftMax);
    controller.set('pressMax', model.pressMax);
    controller.set('benchMax', model.benchMax);
  }
});

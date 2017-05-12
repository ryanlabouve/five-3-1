import Ember from 'ember';

export default Ember.Component.extend({
  allTms: [0.8, 0.85, 0.9, 0.95, 1.0],

  init() {
    this._super(...arguments);
    if (!this.get('tms.length')) {
      this.set('tms', [...this.get('allTms')]);
    }
  },

  actions: {
    toggleArrayElement(el, arrKey) {
      let arr = [...this.get(arrKey).toArray()];

      let index = arr.indexOf(el);
      if (index > -1) {
        // remove element from aray
        let newArray = [
          ...arr.slice(0, index),
          ...arr.slice(index + 1)
        ];
        this.set(arrKey, newArray);
      } else {
        this.set(arrKey, [...arr, el])
      }
    }
  }
});

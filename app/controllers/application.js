import Ember from 'ember';

export default Ember.Controller.extend({
  authService : Ember.inject.service(),
  init(){
    this._super(...arguments);
    this.get('authService').initializeFromCookie();
  }
});

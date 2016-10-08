import Ember from 'ember';

export default Ember.Route.extend({
  authService : Ember.inject.service(),
  beforeModel(){
    if (this.get('authService').get('isAuthenticated')) {
        this.transitionTo('index');
    }
  }
});

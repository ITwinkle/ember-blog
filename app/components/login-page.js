import Ember from 'ember';

export default Ember.Component.extend({
  authService : Ember.inject.service(),
  _routing: Ember.inject.service('-routing'),
  actions: {
    signIn: function(){
      this.get('authService').authenticate();
      this.get('_routing').transitionTo('index');
    }
}
});

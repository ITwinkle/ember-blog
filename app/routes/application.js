import Ember from 'ember';

export default Ember.Route.extend({
  authService : Ember.inject.service(),
  beforeModel(transition) {
        var leafRoute = transition.state.handlerInfos.slice(-1)[0];
        if (!this.get('authService').get('isAuthenticated') && leafRoute.name !== 'login') {
            this.transitionTo('login');
        }
  },
  actions: {
    logout: function(){
      this.get('authService').unauthenticate();
    },
    error: function () {
           this.get('authService').unauthenticate();
           this.transitionTo('login');
    }
  }
});

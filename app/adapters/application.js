import Ember from 'ember';
import DS from 'ember-data';
import config from './../config/environment';

export default DS.RESTAdapter.extend({
    authService: Ember.inject.service(),
    namespace: 'api/v1',
    host: config.api.host,
    headers: Ember.computed('authService.accessToken', function() {
      return {
        'Authorization': 'Bearer ' + this.get("authService.accessToken")
      };
    })
});

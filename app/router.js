import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index',{path:'/'});
  this.route('about',{path:'about'});
  this.route('page-not-found', {path: '/*wildcard'});
  this.route('post', {path: '/posts/:post_id'});
  this.route('login');
});

export default Router;

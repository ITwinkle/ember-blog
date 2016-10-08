import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  init: function(){
    var self = this;
    this._super(...arguments);
    this.get('store').findRecord('post', this.get('id')).then(function(post){
      self.set('title',post.get('title'));
      self.set('post',post.get('post'));
    });
  },
  actions: {
    editPost(){
      var self = this;
      this.get('store').findRecord('post',this.get('id')).then(function(post){
        post.set('title', self.get('title'));
        post.set('post', self.get('post'));
        post.save();
        self.get('toggleModal')();
      });
    },
    toggleModal(){
      this.get('toggleModal')();
    }
   }
});

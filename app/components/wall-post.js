import Ember from 'ember';

export default Ember.Component.extend({
  editPost: false,
  store: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  actions: {
    edit(){
      this.set('editPost',true);
    },
    toggleModal(){
      this.toggleProperty('editPost');
    },
    delete(){
      if(confirm('Delete this post?')){
        this.get('store').findRecord('post',this.get('post.id')).then(function(post){
          post.destroyRecord();
        });
        this.get('flashMessages').success('Successfully deleted!');
      }

    }
  }
});

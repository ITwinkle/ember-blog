import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions: {
    addComment(){
      let comment = this.get('store').createRecord('comment',{
          text: this.get('text'),
          post: this.get('id')
      });
      let post = this.get('store').peekRecord('post',this.get('id'));
      post.get('comments').pushObject(comment);
      post.save();
      this.set('text','');
      comment.save();
    }
  }
});

import Ember from 'ember';
import {validator, buildValidations} from 'ember-cp-validations';

const Validations = buildValidations({
    title: validator('presence', true),
    post: [
      validator('presence', true),
      validator('length', {
        min: 4,
        max: 100
      })
    ]
});

export default Ember.Component.extend(Validations,{
  title: null,
  post: null,
  store: Ember.inject.service(),
  actions: {
    addPost(){
      if (this.get('validations.isValid')){
        var post = this.get('store').createRecord('post', {
          title: this.get('title'),
          post: this.get('post')
        });
        post.save();
        this.set('title','');
        this.set('post','');
        this.set('validations.attrs.title.isDirty',false);
        this.set('validations.attrs.post.isDirty',false);
      }
    }
  }
});

import DS from 'ember-data';

import {
  validator, buildValidations
}
from 'ember-cp-validations';

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

export default DS.Model.extend(Validations,{
    title: DS.attr('string'),
    post: DS.attr('string'),
    comments: DS.hasMany('comment')
});

import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  breed: DS.attr(),
  color: DS.attr(),
  smile: DS.attr(),
  image: DS.attr()
});

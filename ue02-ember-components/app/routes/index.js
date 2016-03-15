import Ember from 'ember';

var dogs = [{
  id: 1,
  name: 'Herbert',
  breed: 'Bulldog',
  color: 'brown',
  smile: 'ugly',
  image: 'https://40.media.tumblr.com/94b6267ff843bfd90bfd7e85bdfb3c04/tumblr_o3op2vC3ef1v2xgjso3_1280.jpg'
},
{
  id: 2,
  name: 'Bean',
  breed: 'Pug',
  color: 'cream',
  smile: 'not that cute',
  image: 'https://40.media.tumblr.com/07f1807971c22baadf302edda473a710/tumblr_o3lu6paR0R1u6a0a7o1_1280.jpg'
},
{
  id: 3,
  name: 'Sammie',
  breed: 'Husky',
  color: 'white',
  smile: 'the cutest',
  image: 'https://36.media.tumblr.com/4af5d51a265c59af50842a5aae83fbdd/tumblr_o3aksgJgBI1ukofkbo1_1280.jpg'
}]

export default Ember.Route.extend({
  model() {
    return dogs;
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',

  actions: {
    dogShowFace: function() {
      this.$('.dogimg').css('display', 'inline')
    }
  }
});

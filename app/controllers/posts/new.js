import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createPost: function(){
      this.get('model').save()
      this.transitionToRoute('posts')
    }
  }
});

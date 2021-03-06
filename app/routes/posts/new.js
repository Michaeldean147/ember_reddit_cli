import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.createRecord('post');
  },

  deactivate: function(){
    console.log(this.routeName)
    var model = this.modelFor('posts.new');
    model.rollback();
  }

});

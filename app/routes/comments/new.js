import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var post = this.modelFor('posts/show')
    console.log(post.id)
    return this.store.createRecord('comment', {post_id: post.id});
  },
  actions: {
    createComment: function(model){
      var _this = this;
      var post = this.modelFor('posts/show');
      model.save().then(function(){
        _this.transitionTo('posts')
      })
    }
  }
});

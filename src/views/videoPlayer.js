var VideoPlayerView = Backbone.View.extend({

  initialize: function (model) {
    this.render(model);
  },

  render: function(model) {
    this.$el.html(this.template(model.attributes));
    // $('.col-md-7').html(this.$el);
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});

var VideoPlayerView = Backbone.View.extend({

  initialize: function () {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    // $('.col-md-7').html(this.$el);
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});

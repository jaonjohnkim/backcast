var VideoPlayerView = Backbone.View.extend({
  
  
  initialize: function () {
    this.model = this.collection.models[0];
    this.render();

    this.collection.on('select', this.handleSelect, this);
  },
  
  render: function() {
    this.$el.empty();
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
  
  handleSelect: function(entry) {
    this.model = entry;
    this.render();
  },

  template: templateURL('src/templates/videoPlayer.html')

});

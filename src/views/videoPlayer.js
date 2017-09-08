var VideoPlayerView = Backbone.View.extend({
  
  
  initialize: function () {
    // console.log(this.collection);
    this.model = this.collection.models[0];
    this.collection.on('select', this.handleSelect, this);
    this.render();
  },
  
  render: function() {
    this.$el.empty();
    if (this.model) {
      this.$el.html(this.template(this.model.attributes));
    }
    return this;
  },
  
  handleSelect: function(entry) {
    if (this.model.id !== entry.id) {
      this.model = entry;
      this.render();
    }
  },

  template: templateURL('src/templates/videoPlayer.html')

});

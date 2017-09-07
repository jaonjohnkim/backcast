var VideoListView = Backbone.View.extend({
  
  initialize: function() {
    this.render();   
  },

  render: function() {
    this.$el.children().empty();
    // console.log(this.videoListEntryView.$el);
    this.$el.html(this.template());
    this.collection.forEach(this.renderVideoEntry, this);
    return this;
  },

  renderVideoEntry: function(videoEntry) {
    var videoEntryView = new VideoListEntryView({model: videoEntry});
    this.$el.find($('.video-list')).append(videoEntryView.render());
  },

  template: templateURL('src/templates/videoList.html')

});

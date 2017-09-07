var VideoListView = Backbone.View.extend({
  
  initialize: function(data) {
    // console.log('video list view');
    this.entries = [];
    // data = exampleVideoData;
    // console.log('data ', data);
    if (data) {
      // console.log('data collection: ', data.collection.models);
      for (var i = 0; i < data.collection.length; i++) {
        // console.log('models iteration: ', data.collection.models[i]);
        this.entries.push(new VideoListEntryView({ model: data.collection.models[i] }));
      }
    }
    // this.videoListEntryView = new VideoListEntryView();
    // this.videoListEntryView2 = new VideoListEntryView();
    this.render(data);
  },

  render: function(data) {
    this.$el.children().detach();
    // console.log(this.videoListEntryView.$el);
    this.$el.html(this.template());
    
    // console.log('this.entires: ', this.entries);

    for (var j = 0; j < this.entries.length; j++) {
      this.$el.find('.video-list').append(this.entries[j].$el);
    }
    // this.$el.find('.video-list').append(this.videoListEntryView.$el);
    // this.$el.find('.video-list').append(this.videoListEntryView2.$el);
    // this.$el.find('.video-list').append(this.videoListEntryView.$el);
    // this.$el.find('.video-list').append(this.videoListEntryView.$el);
    // this.$el.find('.video-list').append(this.videoListEntryView.$el);
    // this.$el.find('.video-list').html(this.videoListEntryView.$el);

    return this;
  },

  template: templateURL('src/templates/videoList.html')

});

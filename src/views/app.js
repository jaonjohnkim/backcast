var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {    
    this.videos = new Videos();
    this.videoPlayerView = new VideoPlayerView();
    this.videoListView = new VideoListView();
    this.searchView = new SearchView();
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    this.$el.find('.col-md-7').html(this.videoPlayerView.$el);
    this.$el.find('.col-md-5').html(this.videoListView.$el);
    this.$el.find('.search').html(this.searchView.$el);
    return this;
  },

  template: templateURL('src/templates/app.html')

});

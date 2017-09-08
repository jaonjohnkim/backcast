var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function(data) {
    this.videos = new Videos(data); //collection
    this.render();    

    var context = this;
    // console.log('old this.videos', this.videos);
    this.searchView.on('search', function() {
      var searchStr = context.searchView.$el.find('.form-control').val();
      // console.log('search string', searchStr);
      context.videos.search(searchStr);
      // console.log('search result', searchResult);
      // context.videos = new Videos(searchStr);
    });
    this.videos.on('reset', function() {
      // console.log('new this.videos!', context.videos);
      context.renderVideoList();  
    });
    
  },


  render: function() {
    this.$el.html(this.template());
    // console.log('new this.videos!', this.videos);
    this.videoPlayerView = new VideoPlayerView({
      el: this.$('.col-md-7'), 
      collection: this.videos
    });

    this.videoListView = new VideoListView({
      el: this.$('.col-md-5'), 
      collection: this.videos
    });

    this.searchView = new SearchView({
      el: this.$('.search'), 
      collection: this.videos
    });
    return this;
  },

  renderVideoList: function() {
    this.videoPlayerView = new VideoPlayerView({
      el: this.$('.col-md-7'), 
      collection: this.videos
    });

    this.videoListView = new VideoListView({
      el: this.$('.col-md-5'), 
      collection: this.videos
    });
    return this;
  }, 

  template: templateURL('src/templates/app.html')

});

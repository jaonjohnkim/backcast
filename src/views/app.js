var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {    

    this.render();
    this.videoPlayerView = new VideoPlayerView({el: this.$('.col-md-7'), collection: this.collection});
    this.videoListView = new VideoListView({el: this.$('.col-md-5'), collection: this.collection});
    this.searchView = new SearchView({el: this.$('.search')});
    
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});

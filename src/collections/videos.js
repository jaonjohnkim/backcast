var Videos = Backbone.Collection.extend({

  model: Video,

  initialize: function(input) {
    if (typeof input === 'string') {
      return this.search(input);
    }
  },

  search: function(queryStr) {
    // console.log('query string ', queryStr);
    var context = this;
    var searchResult = Backbone.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search', //youtube api
      data: {
        q: queryStr,
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        videoEmbeddable: true,
        key: window.YOUTUBE_API_KEY
      }
    });
    searchResult.done(function(data) {
      // console.log('success', data);
      
      var data = context.parse(data);
      // return context.data;
      context.reset(data);
    });
    searchResult.fail(function() {
      console.error('failed');
    });
  },

  parse: function(data) {
    return data.items;
  }

});

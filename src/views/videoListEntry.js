var VideoListEntryView = Backbone.View.extend({

  initialize: function () {
    
    this.render();
  },  

  render: function() {
    var templated = this.template(this.model.attributes);
    this.$el.html(templated);
    return this.$el;
  },

  events: {
    'click .video-list-entry-title': 'handleClick'
  },

  handleClick: function(event) {
    this.model.select();
  },

  template: templateURL('src/templates/videoListEntry.html')
  
});

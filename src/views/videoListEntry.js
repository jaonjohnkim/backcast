var VideoListEntryView = Backbone.View.extend({

  initialize: function (entry) {
    // console.log('entry: ', entry);
    this.model = entry.model;
    
    this.render(entry);

    
  },  

  render: function() {
    var templated = this.template(this.model.attributes);
    // console.log(templated);
    this.$el.html(templated);
    console.log(this.$el.find('.video-list-entry-title')[0]);
    // this.model.on('click', function() {
    //   console.log('yay');
    // }, this);
    // this.$el.find('.video-list-entry-title')[0].on('click', function() {
      // console.log('e');
    // }, this);
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

  
  
});

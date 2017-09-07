var VideoListEntryView = Backbone.View.extend({

  initialize: function (entry) {
    // console.log('entry: ', entry);
    this.model = entry.model;
    this.on('click', function() {
      console.log('e');
    });
    
    this.render(entry);

  },  

  render: function() {
    var templated = this.template(this.model.attributes);
    // console.log(templated);
    this.$el.html(templated);
    console.log(this.el);
    // this.model.on('click', function() {
    //   console.log('yay');
    // }, this);
    this.$el.find('.video-list-entry-title').on('click', function(e) {
      console.log(e); // Need to now change Model data, which then will trigger change event, so 
    });
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

  
  
});

var VideoListEntryView = Backbone.View.extend({

  initialize: function (entry) {
    console.log('entry: ', entry);
    this.render(entry);
  },  

  render: function(entry) {
    var templated = this.template(entry.model.attributes);
    console.log(templated);
    this.$el.html(templated);
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

  
  
});

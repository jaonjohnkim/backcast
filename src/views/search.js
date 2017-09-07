var SearchView = Backbone.View.extend({

  events: {
    'click .btn': 'handleSearch'
  },
  
  initialize: function() {
    this.render();
  },

  render: function() {
    
    this.$el.html(this.template());
    return this;
  },
  
  handleSearch: function(event) {
    console.log(event);
  },

  template: templateURL('src/templates/search.html')

});

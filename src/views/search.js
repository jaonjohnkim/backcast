var SearchView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  render: function() {
    
    this.$el.html(this.template());
    // console.log(this.el);
    // this.$el.empty();
    // this.$el.find('.search').html(this.$el);
    return this;
  },

  template: templateURL('src/templates/search.html')

});

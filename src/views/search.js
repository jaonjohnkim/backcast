var SearchView = Backbone.View.extend({

  events: {
    'click .btn': 'search'
  },
  
  initialize: function() {
    var context = this;
    this.render();
    $('.form-control').on('keyup', function(e) {
      if (e.which === 13 || e.keyCode === 13) { 
        context.search();
      }
    });
    
  },

  render: function() {
    
    this.$el.html(this.template());
    return this;
  },
  
  search: function() {
    // console.log('search triggering');
    this.trigger('search');
    // var searchStr = this.$el.find('.form-control').val();
    // this.collection = this.collection.search(searchStr);
    
  },

  template: templateURL('src/templates/search.html')

});

/**
 * @tag controllers, home
 */
jQuery.Controller.extend('Suggestions',
/* @Static */
{
 // onDocument : true
},
/* @Prototype */
{
  update : function(w) {
    if (!this.hasOwnProperty('xhr') || this.xhr === undefined)
    {
      this.findAll(w);
    }
    else
    {
      $.waterfall(
        this.xhr.abort(),
        this.findAll(w)
      );
    }
  },
  
  findAll : function(w) {
    this.xhr = Suggestion.findAll({word: w}, this.callback('list'));    
  },
  
  show : function() {
    if (this.element.is(":hidden")) 
    {
      this.element.show()
    }
  },
  
  list : function(sug){
    this.element.html("views/suggestion.ejs", sug );
    this.show();
  },
 
  ".suggestion click" : function(el) {
    $.waterfall(
      $('#word').val(el.html()),
      $('#form').submit()
      //this.destroy()
    )
  },
  
  /* Hiding instead of destroying
  destroy : function(){
    console.log('destroy');
    this._super(); //Always call this!
    $('#suggestions').remove();
  }
  */
  
});

$('#suggestions').suggestions();

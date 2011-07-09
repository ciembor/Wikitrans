/**
 * @tag controllers, home
 */
jQuery.Controller.extend('Suggestions',
/* @Static */
{
//  onDocument : true
},
/* @Prototype */
{

  update : function(w) {
    if (!this.hasOwnProperty('xhr') || this.xhr === undefined)
    {
      this.xhr = Suggestion.findAll({word: w}, this.callback('list'))
    }
    else
    {
      this.xhr.abort();//.callback(function() {
        this.xhr = Suggestion.findAll({word: w}, this.callback('list'));
    //  });
    }
  },
  
  list : function(sug){
    this.element.html("views/suggestion.ejs", sug );
  },
 
  ".suggestion click" : function(el) {
    $('#word').val(el.html());
  }
  
});

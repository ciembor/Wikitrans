/**
 * @tag controllers, home
 */
jQuery.Controller.extend('Results',
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
    this.xhr = Result.findAll({word: w}, this.callback('list'));    
  },
  
  show : function() {
    if (this.element.is(":hidden")) 
    {
      this.element.show()
    }
  },
  
  list : function(res){
    this.element.html("views/result.ejs", res);
    this.show();
  },
 
});

$('#results').results();

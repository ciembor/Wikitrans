/**
 * @tag controllers, home
 */
jQuery.Controller.extend('Wikitrans.Controller.Form',
/* @Static */
{
  onDocument : true
},
/* @Prototype */
{
  "{document} ready" : function() {
    $('#word').word();
  },
  
  submit : function() {
    $('#suggestions').hide()
    $('#results').controller().update($('#word').val());
    return false; // becouse I don't want to reload page
  }
});

//$('#form').wikitrans.controller.form();

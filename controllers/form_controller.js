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
    console.log('tłumaczę ' + $('#word').val());
    return false;
  }
});

//$('#form').wikitrans.controller.form();

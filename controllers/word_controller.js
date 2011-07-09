/**
 * @tag controllers, home
 */
jQuery.Controller.extend('Word',
/* @Static */
{
 //  onDocument: true
},
/* @Prototype */
{  
  init : function() {
    this.element.val('Wpisz słowo.');
    this.element.addClass('untouched');
  },
  focusin : function() {
    if (this.element.hasClass('untouched'))
    {
      this.element.val('');
      this.element.removeClass('untouched');
    }
  },
  
  keyup : function() {
    if (!$('#suggestions').length)
    {
      $('#form').after('views/suggestions.ejs', {});
      $('#suggestions').suggestions();
    }
    $('#suggestions').controller().update(this.element.val());
  }
});

//$('#word').word();
//$('#word').focus(function(){console.log('it works')});

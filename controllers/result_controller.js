/**
 * @tag controllers, home
 * Displays a table of results.	 Lets the user 
 * ["Wikitrans.Controllers.Result.prototype.form submit" create], 
 * ["Wikitrans.Controllers.Result.prototype.&#46;edit click" edit],
 * or ["Wikitrans.Controllers.Result.prototype.&#46;destroy click" destroy] results.
 */
$.Controller.extend('Wikitrans.Controllers.Result',
/* @Static */
{
	onDocument: true
},
/* @Prototype */
{
 /**
 * When the page loads, gets all results to be displayed.
 */
 "{window} load": function(){
	if(!$("#result").length){
	 $(document.body).append($('<div/>').attr('id','result'));
		 Wikitrans.Models.Result.findAll({}, this.callback('list'));
 	}
 },
 /**
 * Displays a list of results and the submit form.
 * @param {Array} results An array of Wikitrans.Models.Result objects.
 */
 list: function( results ){
	$('#result').html(this.view('init', {results:results} ));
 },
 /**
 * Responds to the create form being submitted by creating a new Wikitrans.Models.Result.
 * @param {jQuery} el A jQuery wrapped element.
 * @param {Event} ev A jQuery event whose default action is prevented.
 */
'form submit': function( el, ev ){
	ev.preventDefault();
	new Wikitrans.Models.Result(el.formParams()).save();
},
/**
 * Listens for results being created.	 When a result is created, displays the new result.
 * @param {String} called The open ajax event that was called.
 * @param {Event} result The new result.
 */
'result.created subscribe': function( called, result ){
	$("#result tbody").append( this.view("list", {results:[result]}) );
	$("#result form input[type!=submit]").val(""); //clear old vals
},
 /**
 * Creates and places the edit interface.
 * @param {jQuery} el The result's edit link element.
 */
'.edit click': function( el ){
	var result = el.closest('.result').model();
	result.elements().html(this.view('edit', result));
},
 /**
 * Removes the edit interface.
 * @param {jQuery} el The result's cancel link element.
 */
'.cancel click': function( el ){
	this.show(el.closest('.result').model());
},
 /**
 * Updates the result from the edit values.
 */
'.update click': function( el ){
	var $result = el.closest('.result'); 
	$result.model().update($result.formParams());
},
 /**
 * Listens for updated results.	 When a result is updated, 
 * update's its display.
 */
'result.updated subscribe': function( called, result ){
	this.show(result);
},
 /**
 * Shows a result's information.
 */
show: function( result ){
	result.elements().html(this.view('show',result));
},
 /**
 *	 Handle's clicking on a result's destroy link.
 */
'.destroy click': function( el ){
	if(confirm("Are you sure you want to destroy?")){
		el.closest('.result').model().destroy();
	}
 },
 /**
 *	 Listens for results being destroyed and removes them from being displayed.
 */
"result.destroyed subscribe": function(called, result){
	result.elements().remove();	 //removes ALL elements
 }
});
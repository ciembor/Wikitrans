/*
 * @tag models, home
 * Wraps backend suggestion services.  Enables 
 * [Wikitrans.Suggestion.static.findAll retrieving],
 * [Wikitrans.Suggestion.static.update updating],
 * [Wikitrans.Suggestion.static.destroy destroying], and
 * [Wikitrans.Suggestion.static.create creating] suggestions.
 */
$.Model.extend('Suggestion',
/* @Static */
{
	/*
 	 * Retrieves suggestions data from your backend services.
 	 * @param {Object} params params that might refine your results.
 	 * @param {Function} success a callback function that returns wrapped suggestion objects.
 	 * @param {Function} error a callback function for an error in the ajax request.
 	 */
//  models : function(data){
//    this._super(data.poka);
//  },
  
//  wrapMany : function(data){
//    this._super(data[0]);
//  },

  parse : function(data){
    var words = new Array();

    $.each(data[1], function(index, value){
      words.push({word: value});
    });

    return [words];
  },
  
	findAll: function( params, success, error ){
		
 //  var that = this; 
    
   return $.ajax({
			url: 'http://pl.wiktionary.org/w/api.php',
			type: 'get',
			dataType: 'jsonp',
			data: {
        format: 'json',
        action: 'opensearch',
        search: params.word,
        prop: 'langlinks'
      },
			success: this.callback(['parse', 'models', success]),
			error: error,
//			fixture: "//wikitrans/fixtures/suggestions.json.get" //calculates the fixture path from the url and type.
    });
    
    
    
	},
	/*
	 * Updates a suggestion's data.
	 * @param {String} id A unique id representing your suggestion.
	 * @param {Object} attrs Data to update your suggestion with.
	 * @param {Function} success a callback function that indicates a successful update.
 	 * @param {Function} error a callback that should be called with an object of errors.
     */
	update: function( id, attrs, success, error ){
		$.ajax({
			url: '/suggestions/'+id,
			type: 'put',
			dataType: 'json',
			data: attrs,
			success: success,
			error: error,
			fixture: "-restUpdate" //uses $.fixture.restUpdate for response.
		});
	},
	/*
 	 * Destroys a suggestion's data.
 	 * @param {String} id A unique id representing your suggestion.
	 * @param {Function} success a callback function that indicates a successful destroy.
 	 * @param {Function} error a callback that should be called with an object of errors.
	 */
	destroy: function( id, success, error ){
		$.ajax({
			url: '/suggestions/'+id,
			type: 'delete',
			dataType: 'json',
			success: success,
			error: error,
			fixture: "-restDestroy" // uses $.fixture.restDestroy for response.
		});
	},
	/*
	 * Creates a suggestion.
	 * @param {Object} attrs A suggestion's attributes.
	 * @param {Function} success a callback function that indicates a successful create.  The data that comes back must have an ID property.
	 * @param {Function} error a callback that should be called with an object of errors.
	 */
	create: function( attrs, success, error ){
		$.ajax({
			url: '/suggestions',
			type: 'post',
			dataType: 'json',
			success: success,
			error: error,
			data: attrs,
			fixture: "-restCreate" //uses $.fixture.restCreate for response.
		});
	}
},
/* @Prototype */
{});

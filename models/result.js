
$.Model.extend('Result',
/* @Static */
{

  parse : function(data){
  //  var words = new Array();

  //  $.each(data[1], function(index, value){
  //    words.push({headword: value});
  //  });

   // alert(data.query.export['*']);
    var result = new Array();
    
    result.push({headword: data.query.export['*']});
    return [result];
  },

	/**
 	 * Retrieves results data from your backend services.
 	 * @param {Object} params params that might refine your results.
 	 * @param {Function} success a callback function that returns wrapped result objects.
 	 * @param {Function} error a callback function for an error in the ajax request.
 	 */  
	findAll: function( params, success, error ){
    
   return $.ajax({
			url: 'http://en.wiktionary.org/w/api.php',
			type: 'get',
			dataType: 'jsonp',
			data: {
      //  http://en.wiktionary.org/w/api.php?action=query&format=jsonfm&titles=home&export
        format: 'json',
        action: 'query',
        titles: params.word,
        export: ''  // this parameter has no value
      },
			success: this.callback(['parse', 'models', success]),
			error: error,
//			fixture: "//wikitrans/fixtures/suggestions.json.get" //calculates the fixture path from the url and type.
    });
  },
    
	/**
	 * Updates a result's data.
	 * @param {String} id A unique id representing your result.
	 * @param {Object} attrs Data to update your result with.
	 * @param {Function} success a callback function that indicates a successful update.
 	 * @param {Function} error a callback that should be called with an object of errors.
     */
	update: function( id, attrs, success, error ){
		$.ajax({
			url: '/results/'+id,
			type: 'put',
			dataType: 'json',
			data: attrs,
			success: success,
			error: error,
			fixture: "-restUpdate" //uses $.fixture.restUpdate for response.
		});
	},
	/**
 	 * Destroys a result's data.
 	 * @param {String} id A unique id representing your result.
	 * @param {Function} success a callback function that indicates a successful destroy.
 	 * @param {Function} error a callback that should be called with an object of errors.
	 */
	destroy: function( id, success, error ){
		$.ajax({
			url: '/results/'+id,
			type: 'delete',
			dataType: 'json',
			success: success,
			error: error,
			fixture: "-restDestroy" // uses $.fixture.restDestroy for response.
		});
	},
	/**
	 * Creates a result.
	 * @param {Object} attrs A result's attributes.
	 * @param {Function} success a callback function that indicates a successful create.  The data that comes back must have an ID property.
	 * @param {Function} error a callback that should be called with an object of errors.
	 */
	create: function( attrs, success, error ){
		$.ajax({
			url: '/results',
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

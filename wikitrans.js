steal.plugins(	
	'jquery/controller',			// a widget factory
	'jquery/controller/subscribe',	// subscribe to OpenAjax.hub
	'jquery/view/ejs',				// client side templates
	'jquery/controller/view',		// lookup views with the controller's name
	'jquery/model',					// Ajax wrappers
	'jquery/dom/fixture',			// simulated Ajax requests
	'jquery/dom/form_params'		// form data helper

)
  
	.css('wikitrans')	// loads styles

	.resources(
  	'jquery.waterfall/jquery.waterfall.js', // similar to Node.js Step module
    'wiky.js'                               // wiki markup to html translator
  )
  
	.models('suggestion', 'result')						// loads files in models folder 

	.controllers('form', 'word', 'suggestions', 'results')					// loads files in controllers folder

	.views('view/suggestion.ejs', 'view/suggestions.ejs');						// adds views to be added to build

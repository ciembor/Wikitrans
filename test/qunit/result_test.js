module("Model: Wikitrans.Models.Result")

asyncTest("findAll", function(){
	stop(2000);
	Wikitrans.Models.Result.findAll({}, function(results){
		ok(results)
        ok(results.length)
        ok(results[0].name)
        ok(results[0].description)
		start()
	});
	
})

asyncTest("create", function(){
	stop(2000);
	new Wikitrans.Models.Result({name: "dry cleaning", description: "take to street corner"}).save(function(result){
		ok(result);
        ok(result.id);
        equals(result.name,"dry cleaning")
        result.destroy()
		start();
	})
})
asyncTest("update" , function(){
	stop();
	new Wikitrans.Models.Result({name: "cook dinner", description: "chicken"}).
            save(function(result){
            	equals(result.description,"chicken");
        		result.update({description: "steak"},function(result){
        			equals(result.description,"steak");
        			result.destroy();
        			start()
        		})
            })

});
asyncTest("destroy", function(){
	stop(2000);
	new Wikitrans.Models.Result({name: "mow grass", description: "use riding mower"}).
            destroy(function(result){
            	ok( true ,"Destroy called" )
            	start();
            })
})
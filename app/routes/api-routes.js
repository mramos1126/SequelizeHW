var character	= require ("../model/burger.js");
module.exports = function(app){




	app.post('/api/burger', function(req, res){

		// Take the request...
		var character = req.body;
		console.log(character);
		// Then send it to the ORM to "save" into the DB.
		character.create({
			burger_name : character.name

		});

	



	})
}

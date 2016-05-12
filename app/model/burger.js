
// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize"); 
// sequelize (lowercase) references my connection to the DB. You could name it something else, but I was just following their convention.
var sequelize = require("../config/connection.js"); 

// Creates a "Character" model that matches up with DB
var Character = sequelize.define("e9yjumwmqsjecccn", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	
	burger_name: {
		type: Sequelize.STRING,
	}
	// devoured: {
	// 	type: Sequelize.Boolean,
	// },
	// date: {
	// 	type: Sequelize.INTEGER,
	// }
	
});

// Syncs with DB
Character.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Character;
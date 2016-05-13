

var Sequelize = require("sequelize"); 

var sequelize = require("../config/connection.js"); 


var Character = sequelize.define("Burgerworld", {
	
	// id: {
		
	// 	type: Sequelize.INTEGER,
	// 	autoIncrement: true,
	// 	primaryKey: true
	// },
	
	burger_name: {
		type: Sequelize.STRING
	}
	//{    timestamps: false },

	// devoured: {
	// 	type: Sequelize.Boolean,
	// },
	 // date: {
	 // 	type: Sequelize.timestamp
	 //  }
	
});

// Syncs with DB
Character.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Character;
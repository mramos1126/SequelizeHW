

var Sequelize = require("sequelize"); 

var sequelize = require("../config/connection.js"); 


var Character = sequelize.define("burgerDome", {
	
	// id: {
		
	// 	type: Sequelize.INTEGER,
	// 	autoIncrement: true,
	// 	primaryKey: true
	// },
	
	burgerName: {
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
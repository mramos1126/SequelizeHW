var Sequelize = require("sequelize");

var source = {
    jawsDB :{

    port: 3306,
    host: 'l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'dv4p657ku2yvhhy9',
    password: 'whl897ncu19jntzx',
    database: "e9yjumwmqsjecccn"
}

}
var selectedSource = source.jawsDB;

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize(selectedSource.database, selectedSource.user, selectedSource.password, {
  host: selectedSource.host,
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

});

// Exports the connection for other files to use
module.exports = sequelize;
var mysql = require('mysql');
var connection = mysql.createConnection({
    port: 3306,
    host: 'l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com
',
    user: 'dv4p657ku2yvhhy9',
    password: 'whl897ncu19jntzx',
    database: "e9yjumwmqsjecccn"
});


connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
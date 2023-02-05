var mysql = require('mysql')
var connection = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    port: 3306,
    database: "jwt"
})
connection.connect(function (err) {
    if (err) {
        console.log("Error.....", err.sqlMessage)
    }
    else {
        console.log("Connected")
    }

});
module.exports = connection;
// connection 객체 준비
"use strict"

const mysql = require('mysql')
const connection = mysql.createConnection({
  database: 'word',
  user: 'root',
  password: '1111'
})
connection.connect()

/*
module.exports.getConnection = function() {
  return con
}
*/
module.exports = {
  getConnection() {
    return connection
  }
}













//

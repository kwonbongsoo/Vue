"use strict"

module.exports = {
  setConnection(conn) {
    this.connection = conn // 변수를 알아서 만들어준다.
  },

  get(successFn, errorFn) {
    this.connection.query(
      'select * from word',
      function (error, result) {
        if (error) {
          errorFn(error)
        } else {
          successFn(result)
        }
      })
  }
} // module









//

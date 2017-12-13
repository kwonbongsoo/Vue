"use strict"

module.exports = {
  setWordDao(dao) {
    this.wordDao = dao
  },

  get(success, error) {
    var obj = this
      this.wordDao.get(function(results) {
       success(results)
     }, error)
  }
} // module

// 학생 정보를 다루는 서비스를 정의한다.
const express = require('express')
const datasource = require('../util/datasource')
const wordDao = require('../dao/wordDao')
const wordService = require('../service/wordService')

const connection = datasource.getConnection()
wordDao.setConnection(connection)
wordService.setWordDao(wordDao)

const router = express.Router()

router.get('/get.json', (request, response) => {
  wordService.get(function(result) {
    response.json(result)
  }, function(error) {
    response.status(200)
            .set('Content-Type', 'text/plain;charset=UTF-8')
            .end('error')
    console.log(error)
  })
})

module.exports = router

var express = require('express') // 웹요청을 쉽게 다루기 위한 프레임워크
// POST 요청 파라미터 값을 처리할 모듈 로딩
var bodyParser = require('body-parser')
var path = require('path')
// template engine을 통합하여 관리해주는 모듈

var app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}));


// 클라이언트가 요청할때 바로 던져줄수 있는 정적자원이 저장된 폴더를 지정한다.
// 여러개의 폴더를 지정할 수 있다.
app.use(express.static('public')) // public 폴더가 static 폴더다. 웹브라우저가 요청하는 파일이 있는지 지정한다.

// post 요청 데이터 분석기를 등록한다.
// 이 분석기를 등록해야만 post 요청으로 들어온 데이터를 꺼낼 수 있다.
app.use(bodyParser.urlencoded({ extended: false }))

// 서비스 라우터 등록
app.use('/word', require('./control/word-control.js'))

app.listen(80, function() {
  console.log('서버 시작');
})

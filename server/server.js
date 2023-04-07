const express = require('express');
const path = require('path');
const app = express();

app.listen(8080, function () {
  console.log('listening on 8080')
}); 

app.use(express.json());
var cors = require('cors');//npm install cors 설치해야함
app.use(cors());

app.use(express.static(path.join(__dirname, 'blog/build')));

app.get('/', function(요청,응답){
    응답.sendFile(path.join(__dirname, 'blog/build/index.html')); //index.html 파일 경로
})

//product 경로로 get 요청하면 DB에서 데이터 가져와서 보여주세요
app.get('/product', function(요청, 응답){
    응답.json({name:'김다빈'});
})
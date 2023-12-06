const express = require('express');
const session = require('express-session');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const initUserLogin = require('./userLogin');   // 로그인/회원가입 모듈
const initScraping = require('./scraping'); // 웹 스크래핑 모듈
const initCreatePost = require('./boardCRUD'); // 게시판 모듈

// JSON body parser 설정
app.use(bodyParser.json());

// CORS 설정
app.use(cors());

// JSON 파싱을 위한 미들웨어
app.use(express.json());

app.use(session({
    secret: 'mySecretKey',
    resave: false,
    saveUninitialized: false
}));

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});

initUserLogin(app);
initCreatePost(app);
initScraping(app);

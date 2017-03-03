var koa = require('koa');
var router = require('./router.js');
var db = require('./db.js');
var bodyParser = require('koa-bodyparser');
var cors = require('koa-cors');

var app = koa();
app.use(cors());
app.use(bodyParser());

app.use(router.routes());

app.listen(3000);
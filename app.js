
// 必要なライブラリー
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// ルート用モジュールのロード
// -> index.jsへ
var indexRouter = require('./routes/index');
// -> users.jsへ
var usersRouter = require('./routes/users');
// -> hello.jsへ
var helloRouter = require('./routes/hello');

// expressオブジェクトの作成
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// 関数の組み込み
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ルート用、エラー用のapp.use
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/hello', helloRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// expressにappを適用
module.exports = app;

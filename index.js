var express         = require('express');
var path            = require('path');
var bodyParser      = require('body-parser');
var ejs             = require('ejs');
var app             = express();
var server          = require('http').createServer(app);

app.engine('.html',ejs.__express);
app.set('views', __dirname + '/route');
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

server.listen('8084',function(){
  console.log('--------angular_demo listening--------');
});

// ngroute
app.get('/ngroute',function(req,res){
	res.render('ngroute/ng权威指南12_ng_route',{});
});
app.get('/book.html',function(req,res){
	res.render('ngroute/book',{});
});
app.get('/chapter.html',function(req,res){
	res.render('ngroute/chapter',{});
});

//uiroute
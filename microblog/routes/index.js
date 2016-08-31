var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: ' 首页' });
});

//用户主页
router.get('/u/:user',function(req,res,next){
	res.render('user',{title:req.params.user});
});

//发表信息
router.post('/post',function(req,res,next){
	res.render('post');
});

//获取注册界面
router.get('/reg',function(req,res,next){
	res.render('reg',{title:'用户注册'});
});

//注册
router.post('/reg',function(req,res,next){
	if(req.body['password2'] !=  req.body['password']){
		console.log(req.body['password2']);
		console.log(req.body['password']);

		//res.send('两次密码输入不一致！');
		return res.redirect('/reg');
	}
	res.render('doReg');
});

//获取登录界面
router.get('/login',function(req,res,next){
	res.render('login');
});

//登录
router.post('/login',function(req,res,next){
	res.render('doLogin');
});

//退出
router.get('/logout',function(req,res,next){
	res.render('logout',{title:'Logout Page'});
});

module.exports = router;

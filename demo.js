router.get('/hello', function(req, res, next) {
  res.render('index', { title: 'NodeJS' });
});


var user={
	'Evan':{
		name:'Evan',
		website:'http://www.evanshelter.com'
	}
};

router.all('/user/:username',function(req,res,next){
	if(user[req.params.username]){//校验用户是否存在，起到一个中间件的作用
		next();//转移控制权
	}else{
		next(new Error(req.params.username+' doesn\'n exist.'));
	}
});

router.get('/user/:username', function(req, res, next) {
	//all方法已经校验了，所以一定存在 就直接输出
  res.send(JSON.stringify(user[req.params.username]));
});

router.put('/user/:username',function(req,res){//更新路由
	res.end('Done');
});

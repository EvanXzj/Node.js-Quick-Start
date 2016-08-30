//exports 是模块公开的接口
//reqiure 获取模块内reports的接口
var name

exports.setName=function(tname){
	name=tname;
}

exports.sayHello=function(){
	console.log("Hello "+name);
}

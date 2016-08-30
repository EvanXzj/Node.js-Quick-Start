//exports 是模块公开的借口
//reqiure 获取模块内reports的借口
var name

exports.setName=function(tname){
	name=tname;
}

exports.sayHello=function(){
	console.log("Hello "+name);
}

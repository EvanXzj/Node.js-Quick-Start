//util.inspect(object,[showHidden],[depth],[colors]) 是一个将任意对象转换为字符串的方法， 通常用于调试和错误输出

//arg2   	showHidden  是一个可选参数，如果值为  true ，将会输出更多隐藏信息。

//arg3		depth  表示最大递归的层数，如果对象很复杂，你可以指定层数以控制输出信息的多少。
//如果不指定 depth ，默认会递归2层，指定为  null  表示将不限递归层数完整遍历对象。

//arg4		如果 color 值为  true ，输出格式将会以 ANSI 颜色编码，通常用于在终端显示更漂亮的效果。

var util=require('util');

function Animal(){
	this.name='Animal';

	this.toString=function(){
		return this.name;
	};
}

var Animal=new Animal();

console.log(util.inspect(Animal));
console.log(util.inspect(Animal,true));
console.log(util.inspect(Animal,true,null,true));
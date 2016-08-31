var util=require('util');

function Base(){
	this.name='Base';
	this.base=1991;

	this.sayHello=function(){
		console.log("Hello "+this.name);
	}
}

Base.prototype.showName=function(){
	console.log(this.name);
}

function Sub(){
	this.name='Sub';
}

util.inherits(Sub,Base);//继承，只会继承在原型中定义的属性或方法

var BaseObj=new Base();
BaseObj.showName();
BaseObj.sayHello();
console.log(BaseObj);

var SubObj=new Sub();
SubObj.showName();
//SubObj.sayHello();//sayHello不是在原型中定义的方法，所以Sub并没有继承。所以如果放开注释会报错，sayHello is not a function

console.log(SubObj);

var  hello=require('./module');

hello.setName('Evan');
//hello.sayHello();
//Hello Evan

var hello2=require('./module');

hello2.setName('Jason');
hello2.sayHello();
//Hello Jason


//这是因为变量  hello1和  hello2 指向的是同一个实例，
// require 单次加载：require 不会重复加载模块，也就是说无论调用多少次  require， 获得的模块都是同一个。
//因此  hello.setName  的结果被 hello2.setName 覆盖，最终输出结果是由后者决定的。
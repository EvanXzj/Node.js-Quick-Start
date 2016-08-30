//异步（非阻塞）读取文件内容
var fs=require('fs');

fs.readFile('file.txt','utf-8',function(err,data){//非阻塞，立即执行之后的代码。I/O返回数据后执行匿名回调函数
	if(err){//if error happens  print it
		console.log(err);
	}else{
		console.log("file.txt contents: "+data);
	}
});

console.log('Async readFile End');

//输出结果如下：
//Async readFile End
//file.txt contents: 测试阻塞和非阻塞文件读取方式用例文件。
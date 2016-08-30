//同步读取文件内容
var fs=require('fs');

var data=fs.readFileSync('file.txt','utf-8');//同步读取时阻塞，返回内容后才会继续执行后面的代码
console.log('file.txt contents : ' +data);

console.log('Read File End');
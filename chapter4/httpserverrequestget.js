var http=require('http');
var url=require('url');
var util=require('util');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	console.log(req.url);
	res.end(util.inspect(url.parse(req.url,true)));
	//通过  url.parse，原始的  path 被解析为一个对象，其中 query就是我们所谓的 GET请求的内容,而路径则是 pathname 
}).listen(3000);
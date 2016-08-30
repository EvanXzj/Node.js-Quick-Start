var http=require('http');//import module

var server=http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write('<h1>Node.js</h1>');
	res.end('<p>Welcome to Node.js</p>');
});

server.listen(3000,function(){
	console.log("Server running at http://127.0.0.1:3000");
});

/*
*	在终端运行输入node app.js  
*	终端控制台会打印 Server running at http://127.0.0.1:3000
*	打开浏览器输入以上地址会看到你要的页面
*	此时脚本一直在运行，一直在监听3000端口，知道进程被杀。
*	小技巧 1：Ctrl+c 结束进程
*		
*	小技巧 2: supervisor
*	supersor作用：监视你对代码的改动，并自动重新Node.js
*	 npm 安装 supervisor：npm install -g supervisor
*	使用 supervisor 命令启动 app.js：  supervisor app.js
*	当代码被改动时，运行的脚本会被终止，然后重新启动，同时也会输出一些信息。
**/

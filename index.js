var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/index.html') {
       	fs.readFile('./index.html', 'utf-8', function(error, data) {
        response.write(data);
        response.end();
        });
    } else {
    		response.statusCode = 404;
    		response.write('<img src="https://assets.hongkiat.com/uploads/funny-creative-error-404/37-error-404-page.jpg"/>');
    		response.end();
    }
});


server.listen(9000);


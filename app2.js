const http = require('http');

const server = http.createServer(function (request, response){
	if(request.url === '/')	{
		response.setHeader('Content-type', 'text/html');
		response.end('<strong>Test ROOT</strong>');
	}	
});

// localhost:3004
server.listen(3004, () => {
	console.log("Server is up and listening on 3004...");
});

var http = require('http');
const fs = require('fs');
const port=8080;
const hostname='127.0.0.1'
const myServer= http.createServer(function (request, response) {
response.writeHead(200, {'Content-Type': 'text/html'});
const html = fs.readFileSync('./Registration form.html');
response.end(html);
console.log('Handled request');
}); 
myServer.listen(port, hostname, ()=>{
    console.log(`server is running successfully at http://${hostname}:${port}`);
});
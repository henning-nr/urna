var http = require('http'); // 1 - Import Node.js core module
var fs = require('fs');
var server = http.createServer(function async (req, res) {   // 2 - creating server

    var html = fs.readFileSync("./index.html", "utf8")
    var resposta = await html.replace('{ title }', 'Justiça <br> <a style="margin-right: -20px;">Eleitoral</a>'.toLocaleUpperCase());
    res.end(resposta)
});

server.listen(3000); //3 - listen for any incoming requests

console.log('Node.js web server at port 3000 is running..')
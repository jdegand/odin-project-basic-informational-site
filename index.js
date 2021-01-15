const http = require('http');
//import file system fs

http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});

    const url = req.url;

    if (url === '/') {
        res.write('Home Page'); //fs readfile index.html
        res.end();
    } else if(url === '/about') {
        res.write('About Page');
        res.end();
    } else if(url === '/contact-me') {
        res.write('Contact Page');
        res.end();
    } else {
        res.write('404 Page');
        res.end();
    }
}).listen(8080, function() {
    console.log("Server is listening on 8080");
});

//node index.js

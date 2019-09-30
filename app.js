// const express = require('express');
// const bodyParser = require('body-parser');
var http = require("http");

// const app = express();
const PORT = 3000;

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.listen(PORT, () =>{
//     console.log(`Your server is running on the port ${PORT}`);
// });

 


http.createServer(function (request, response) {

    response.writeHead(200, {'Content-Type': 'text/plain'});
  
    response.end('Hello World\n');
 }).listen(PORT);
 
 console.log(`Your server is running on the port ${PORT}`);
/*

JSON ME
 Exercise 8 of 8
 
Most of the times we're building RESTful API servers with JSON.
 
Write a server that, when it receives a GET, reads a file, parses it to JSON,
and responds with that content to the user.
 
The server should respond to any GET that matches the /books resource path.

As always, the port is passed in process.argv[2]. The file to read is passed
in process.argv[3].
 
Respond with:
 
    res.json(object)
 
Everything should match the /books resource path.
 
For reading the file, use the fs module, e.g.,
 
    fs.readFile(filename, callback)
 
-------------------------------------------------------------------------------
 
## HINTS
 
While the parsing can be done with JSON.parse:
 
    object = JSON.parse(string)
 
No need to install the fs module. It's part of the core and the Node.js platform.
 
Videos: [http://bit.ly/1jW1sBf](http://bit.ly/1jW1sBf).
 
 
 » To print these instructions again, run: expressworks print
 » To execute your program in a test environment, run: expressworks run program.js
 » To verify your program, run: expressworks verify program.js
 » For help run: expressworks help


*/

const express = require('express'),
      fs = require('fs');

const app = express();

let bookJson;


app.get('/books', (req, res) => {
  fs.readFile(process.argv[3], (err, data) => {
    if (err) res.sendStatus(500);
    try {
      bookJson = JSON.parse(data);
    } catch (err) {
      res.sendStatus(500);
    }
    res.json(bookJson);
  })
});

app.listen(process.argv[2]);

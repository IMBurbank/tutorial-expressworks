/*

STYLISH CSS
 Exercise 5 of 8

 
HTML without styles is boring so this exercise will teach you how to use Stylus with Express on the fly.
 
Style the HTML from the "STATIC" exercise using Stylus middleware.
Stylus <https://github.com/stylus/stylus> generates .css files on-the-fly from .styl files.
 
Your solution should listen on the port supplied by process.argv[2] for
GET requests, one of which will be for main.css, which should be
automatically generated by your Stylus middleware. index.html and main.styl can be found in process.argv[3] (they are in the same directory).
 
You could also create your own folder and use these, if you like:
 
The main.styl file:
 
    p
      color red
 
The index.html file:
 
    <html>
      <head>
        <title>expressworks</title>
        <link rel="stylesheet" type="text/css" href="/main.css"/>
      </head>
      <body>
        <p>I am red!</p>
      </body>
    </html>
 
-------------------------------------------------------------------------------
 
## HINTS
 
You'll want to plug in some stylus middleware using app.use() again.
It'll look something like this:
 
    app.use(require('stylus').middleware('/path/to/folder'))
 
Hint: You can utilize __dirname to get an absolute path to the currently running file.
 
The path to a folder can be not just an absolute path  but a relative one:
 
    app.use(require('stylus').middleware('public'))
 
In addition to producing in the "STATIC" exercise, you'll need to serve static files.
Remember that middleware is executed in the order app.use is called!

## NOTE
 
For your own projects, Stylus needs to be installed like any other
dependency:
 
    $ npm install stylus
 
Videos: [http://bit.ly/1jW1sBf](http://bit.ly/1jW1sBf).
 
 
 » To print these instructions again, run: expressworks print
 » To execute your program in a test environment, run: expressworks run program.js
 » To verify your program, run: expressworks verify program.js
 » For help run: expressworks help

*/


const express = require('express'),
      path = require('path'),
      stylus = require('stylus');

const app = express();


app.use(stylus.middleware(path.join(__dirname)));
app.use(express.static(path.join(__dirname)));

app.listen(process.argv[2]);

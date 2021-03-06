/*

WHAT'S IN QUERY

 Exercise 7 of 8
 
Oftentimes, we need to process the data from the URL query string (urlencoded).
 
Write a route that extracts data from the query string in the GET /search URL
route, e.g. ?results=recent&include_tabs=true and then outputs it back to
the user in JSON format.
 
Use app.get('/search', function(){...}) for the route.
 
In Express.js, to extract query string parameters, we can use (inside the request handler):
 
    req.query.NAME
 
-------------------------------------------------------------------------------
 
## HINTS
 
No need to install query middleware. It's part of the Express.js framework.
 
To output JSON we can use:
 
    res.send(object)
 
Videos: [http://bit.ly/1jW1sBf](http://bit.ly/1jW1sBf).
 
 
 » To print these instructions again, run: expressworks print
 » To execute your program in a test environment, run: expressworks run program.js
 » To verify your program, run: expressworks verify program.js
 » For help run: expressworks help


*/


const express = require('express');

const app = express();


app.get('/search', (req, res) => res.send(req.query) );

app.listen(process.argv[2]);

/*

PUG
 Exercise 3 of 8


Create an Express.js app with a home page rendered by the Pug template engine.

The home page should respond to /home.

The view should show the current date using 'new Date.toDateString()'.

We use 'toDateString()' to simply return the date in a human-readable format
without the time.

-------------------------------------------------------------------------------

## HINTS

The Pug template file index.pug must look like this:

    h1 Hello World
    p Today is #{date}.

You can use our index.pug (recommended). The path to index.pug will be provided in
process.argv[3]. Of course, you are welcome to use your own Pug file. Just make sure it's exactly the same as ours.

This is how you can specify the path to the template files in the folder templates:

    app.set('views', path.join(__dirname, 'templates'))

The __dirname is the absolute path of this file and path.join is used to produce cross-platform path (Win vs. Linux/Mac).

To tell Express.js app what template engine to use, apply this line to the
Express.js configuration:

    app.set('view engine', 'pug')

Instead of Hello World's res.end(), the res.render() function accepts
a template name and data (called locals):

    res.render('index', {date: new Date().toDateString()})

We use toDateString() to simply return the date in a human-readable format
without the time.

-------------------------------------------------------------------------------

## NOTE

When creating your projects from scratch, install the pug dependency with npm.
If you run $ npm install on this package (expressworks), you should have pug installed.

Again, the port to use is passed by expressworks to the application as process.argv[2].

If you receive Error: Cannot find module 'pug', it is because Express is looking for Pug relative to its path. You can fix this by running npm install pug.

Videos: [http://bit.ly/1jW1sBf](http://bit.ly/1jW1sBf).


 » To print these instructions again, run: expressworks print
 » To execute your program in a test environment, run: expressworks run program.js
 » To verify your program, run: expressworks verify program.js
 » For help run: expressworks help

*/


const express = require('express'),
      path = require('path');

const app = express();


app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'templates'));

app.get('/home', (req, res) => res.render('index', {date: new Date().toDateString()}));

app.listen(process.argv[2]);

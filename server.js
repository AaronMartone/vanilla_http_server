/*
    For this assignment you should write an http server in vanilla node that responds to several different routes.
    
    The server should respond to a request to /time that will send back the current time of the server.
    
    It should also respond to a get request to /greet/name where name is any single word string. It should send back a 
    string that greets that name.

    It should also have a separate post request to /greet that takes the name in JSON format.

    There should be tests using chaiHTTP for both routes, as well as a Gruntfile/package.json
*/

'use strict';

// required modules.
var http = require('http');
var url = require('url');

function start(route, handler) {
    function onRequest(req, res) {

        // determine the pathname of the request.
        var pathname = url.parse(req.url).pathname;

        // route the pathname to execute its handler.
        return route(handler, pathname, req, res);
    }

    http.createServer(onRequest).listen(3000);
    console.log('Server listening...');
}

exports.start = start;
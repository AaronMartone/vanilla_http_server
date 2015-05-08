'use strict';

function welcome(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Welcome. Now how about you try a URL you\'re SUPPOSED to request, eh?');
    res.end();
}

function time(req, res) {
    var now = new Date();
    var hours = (now.getHours() > 12) ? now.getHours() - 12 : now.getHours();
    var mins = (now.getMinutes() < 10) ? '0' + now.getMinutes() : now.getMinutes(); 
    var secs = (now.getSeconds() < 10) ? '0' + now.getSeconds() : now.getSeconds(); // heh heh heh... 'secs'.
    var ampm = (now.getHours() > 12) ? 'PM' : 'AM';
    var nowAsString = hours + ':' + mins + ':' + secs + ' ' + ampm;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h2>What time is it? Time to <a href="https://www.youtube.com/watch?v=oEmCUZfjVYk" title="Unpimp your auto!">unpimp your auto</a>. Oh, <strong>SNAP</strong>! It\'s ' + nowAsString + '!</h2>');
    res.end();
}

function greet(req, res) {
    var yourName;
    if (req.method === 'GET') {
        var url = require('url');
        var urlKeys = url.parse(req.url).pathname.split('/');
        yourName = urlKeys[2] || 'Unnamed, random creepy visitor, who is probably a sex criminal, or at the very least has outstanding parking tickets.';
    } else {
        var body;
        req.on('data', function(data) {
            body += data.toString('utf-8');            
        });
        req.on('end', function(data) {
            body += data.toString('utf-8');
            var parsedBody = JSON.parse(body);
            yourName = parsedBody.name || 'POSTer of nothingness, be ye His and/or Her Royal Highness of might-as-well-use GET, PUTter of \'dumb\' in the King-dumb.';
        });        
    }    

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello, ' + yourName);
    res.end();
}

exports.greet = greet;
exports.time = time;
exports.welcome = welcome;
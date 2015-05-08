'use strict';

function route(handler, pathname, req, res) {
    console.log('Received a request to route path: ' + pathname);
    var pathKeys = pathname.split('/');
    var pathKey = '/' + pathKeys[1];
    if (typeof handler[pathKey] === 'function') {
        handler[pathKey](req, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('Error 404-T : I PITY DA FOO who tried to request ' + pathname + '!');
        res.end();
    }
}

exports.route = route;
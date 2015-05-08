'use strict';

var server = require('./server');
var router = require('./router');
var requestHandlers = require('./request-handlers');

var handler = {};
handler['/'] = requestHandlers.welcome;
handler['/time'] = requestHandlers.time;
handler['/greet'] = requestHandlers.greet;

server.start(router.route, handler);
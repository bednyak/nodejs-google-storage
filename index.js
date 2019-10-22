const express = require('express');
const app = express();
const http = require('http');
const config = require('./src/config');
const server = http.createServer(app);
const serverUtils = require('./src/utils/server-utils');
const port = serverUtils.normalizePort(config.port);
const index = require('./src/files-routers');

app.set('port', port);

app.use('/', index);

server.listen(port);
server.on('error', serverUtils.onError);
server.on('listening', serverUtils.onListening);

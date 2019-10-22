function onError(error) {
    if (error.syscall !== 'listen') throw error;

    const port = error.port;
    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

    if (error.code === 'EACCES') {
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
    } else if (error.code === 'EADDRINUSE') {
        console.error(bind + ' is already in use');
        process.exit(1);
    } else {
        throw error;
    }
}

function onListening() {
    const addr = this.address();
    const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    console.log('Listening on ' + bind);
}

function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) return val;

    if (port >= 0) return port;

    return false;
}

module.exports = {
    onError,
    onListening,
    normalizePort
};

const http = require('http');
const server = require('./server/server.js');
const config = require('./config/config.js')

const app = http.createServer(server);

app.listen(config.serverSettings.port, () => {
    console.log('Server started on port ' + config.serverSettings.port);
});
 
exports.listen = function () {
    this.app.listen.apply(this.app, arguments);
};
  
exports.close = function (callback) {
    this.app.close(callback);
};

module.exports = app;
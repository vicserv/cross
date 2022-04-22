const { port } = require('./config.json');
const proxy = require('cors-anywhere');
proxy.createServer({
    originWhitelist: [],
    requireHeader: [],
    removeHeaders: ['user-agent']
}).listen(port, '127.0.0.1', function() {
    console.log('Running CORS Anywhere on ::' + port + '::');
});
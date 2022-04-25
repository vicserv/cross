require('dotenv').config()

const { port } = require('./config.json');
const proxy = require('cors-anywhere');
proxy.createServer({
    originWhitelist: [],
    requireHeader: [],
    removeHeaders: ['user-agent']
}).listen( port ||  process.env.PORT, function() {
    console.log('Running CORS Anywhere on ::' + (port || process.env.PORT) + '::');
});
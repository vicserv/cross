require('dotenv').config()

const { port } = require('./config.json');
const PORT =  80
const proxy = require('cors-anywhere');
proxy.createServer({
    originWhitelist: [],
    requireHeader: [],
    removeHeaders: ['user-agent']
}).listen( PORT, function() {
    console.log('Running CORS Anywhere on ::' + PORT + '::');
});
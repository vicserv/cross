require('dotenv').config()

const { port } = require('./config.json');
const PORT =  process.env.PORT
const proxy = require('cors-anywhere');
proxy.createServer({
    originWhitelist: [],
    requireHeader: [],
    removeHeaders: ['user-agent']
}).listen( PORT, function() {
    console.log('Running CORS Anywhere on ::' + PORT + '::');
});
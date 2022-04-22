const { port } = require('./config.json');
const proxy = require('cors-anywhere');
proxy.createServer({
    originWhitelist: [],
    requireHeader: [],
    removeHeaders: ['user-agent']
}).listen(process.env.PORT || port, function() {
    console.log('Running CORS Anywhere on ::' + (process.env.PORT || port )+ '::');
});
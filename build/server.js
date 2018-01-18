const express = require('express');
const createWebpackMiddleware = require('webpack-express-middleware');
const app = express();
const config = require('./webpack.prod.conf.js');
const compiler = require('webpack')(config);
var history = require('connect-history-api-fallback');
 
app.use(history());
app.set('port', process.env.PORT || 8000);
app.set('host', process.env.HOST || '0.0.0.0');
 
const webpackMiddleware = createWebpackMiddleware(compiler, config);
webpackMiddleware(app);
 
app.listen(app.get('port'), app.get('host'), webpackMiddleware.listen);
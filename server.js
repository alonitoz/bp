const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');  
const routes = require('./routes');
const initDB = require('./db');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.resolve(__dirname, 'public')));

if (process.env.NODE_ENV === 'development') {
    const webpack = require('webpack');
    const webpackConfig = require('./webpack/webpack.config');
    const compiler = webpack(webpackConfig);

    app.use(
        require('webpack-dev-middleware')(compiler, {
            publicPath: webpackConfig.output.publicPath
        })
    );
    app.use(require("webpack-hot-middleware")(compiler));
}

app.use(routes);

initDB().then(() => {
    const port = process.env.PORT || 9999;
    app.listen(port, () => {
        console.log(`Server started http://localhost:${port}/`);
    });
}).catch(ex => {
    throw ex;
})

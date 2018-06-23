import webpack from 'webpack';
import config from '../../webpack.config';
import webpackMiddleware from 'koa-webpack';


module.exports = options => {
    return () => null;
    return webpackMiddleware({
        config: config
    });
};

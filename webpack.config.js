var path = require('path');
var glob = require('glob');

module.exports = {
    entry: glob.sync('./src/**/*').reduce(function(obj, file) {
        obj[path.parse(file).name] = file;
        return obj
    }, {}),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "[name].js"
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [{
            test: /\.(ts|js)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }],
    }
};

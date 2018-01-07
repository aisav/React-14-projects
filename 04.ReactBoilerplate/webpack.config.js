module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },

    resolve: {
        root: __dirname,
        alias: {
            Greeter: 'app/components/Greeter.jsx'
        },
        extensions: ['', '.js', '.jsx']
    },

    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']        //'stage-0'     //in package-dev    "babel-preset-stage-0": "^6.24.1",
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    }
};
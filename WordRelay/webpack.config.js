const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');


module.exports = {
    name : "word-relay-setting",
    mode : "development", // 실서비스 : production
    
    resolve : {
        extensions: [".js", ".jsx"]
    },
    
    // 가장 중요 2가지

    entry : {
        app : ['./client'] 
        //'WordRelay.jsx'는 require()로 불러와지니깐 할 필요 x
    }, //입력

    module : {
        rules : [{
            test: /\.jsx?/, //? - x가 있어도 없어도 됨 \ - 특수문자임을 나타냄
            loader: 'babel-loader',
            options : {
                presets : [['@babel/preset-env', {
                    targets : {
                        browsers : ['> 5% in KR'] // github.com/browserslist
                    },
                    debug : true
                     
                        }] ,
                        '@babel/preset-react'
                    ],
                plugins : [
                        '@babel/plugin-proposal-class-properties',
                        'react-refresh/babel'
                        ]
            }
        }]

    },

    plugins : [
        new RefreshWebpackPlugin()
    ],

    output : {
        path: path.join(__dirname, 'dist'),
        filename: "[name].js",
        publicPath : '/dist'
    },  //출력
    devServer : {
        publicPath : '/dist',
        hot : true
    }
};


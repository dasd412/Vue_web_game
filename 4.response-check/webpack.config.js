
// node 환경에서 import는 require()
const { VueLoaderPlugin } = require('vue-loader');
const path =require('path'); // node로 상대 경로 갖고 오기

//<script>가 많아지는 것을 해결하기 위해 webpack 사용

// 노드.js의 모듈을 만듬.
module.exports={
    mode:'development',
    devtool:'eval',
    resolve:{
        extensions: ['.js', '.vue'],
    },
    entry:{//여러 개의 <script>가 하나로 합쳐져서 만들어질 대상
        app: path.join(__dirname,'main.js'), // == ./main.js
    },
    module:{// 웹팩의 핵심.
        rules: [{
            test : /\.vue$/, // 파일명이 .vue로 끝나는 파일에 대해
            loader: 'vue-loader', 
        }],
    },
    plugins:[
        new VueLoaderPlugin(),
    ],
    output:{// dist 디렉토리에 app.js가 최종 결과물로 만들어진다.
        filename: '[name].js',
        path: path.join(__dirname,'dist'), // == ./dist/
    },
};
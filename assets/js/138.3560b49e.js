(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{468:function(s,a,n){"use strict";n.r(a);var e=n(0),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"搭建基本的前端开发环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#搭建基本的前端开发环境"}},[s._v("#")]),s._v(" 搭建基本的前端开发环境")]),s._v(" "),n("p",[s._v("我们日常使用的前端开发环境应该是什么样的？例如：")]),s._v(" "),n("ul",[n("li",[s._v("构建我们发布需要的html、css、js文件")]),s._v(" "),n("li",[s._v("使用css预处理器来编写样式")]),s._v(" "),n("li",[s._v("处理和压缩图片")]),s._v(" "),n("li",[s._v("使用babel来支持es新特性")]),s._v(" "),n("li",[s._v("本地提供静态服务来方便开发调试\n以上几项应该可以满足比较简单的前端项目开发环境需求了，")])]),s._v(" "),n("h2",{attrs:{id:"关联htnl"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关联htnl"}},[s._v("#")]),s._v(" 关联HTNL")]),s._v(" "),n("p",[s._v("webpack默认从作为入口的js文件进行构建（更多是基于SPA去考虑），但通常一个前端项目基本是从一个页面（即html）出发的，最简单的方法是，创建一个html文件，\n使用script标签直接引用构建好的js文件")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<script src="./dist/bundle.js"><\/script>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("但是如果我们的文件名或者路径会变化，例如使用[hash]来命名，那么最好是将html引用路径和我们的构建关联起来，这个时候我们可以使用\nhtml-webpack-plugin"),n("br"),s._v("\nhtml-webpack-plugin是一个独立的node.package，所以在使用之间我们需要先安装它，把它安装到项目的开发依赖中")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("npm i html-webpack-plugin -D \n\n//或者\nyarn add html-webpack-plugin -D \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("然后再webpack配置中，将html-webpack-plugin添加到plugins列表中")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("const htmlwebpackplugin=require('html-webapck-plugin')\nmodule.exports={\n    //...\n    plugins:[\n        new htmlwebpackplugin()       \n    ]\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("这样配置好以后，构建时html-webpack-plugin会为我们创建一个html文件，其中会引用构建出来的js文件，实际项目中，默认创建的html文件并没有什么用，我们需要自己来写HTML文件，可以通过html-webpack-plugin的配置，传递一个写好的HTMl模版")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("module.exports={\n    //...\n    plugins:[\n        new htmlwebpackplugin({\n            filname:'index.html', //配置输出文件名和路径\n            template:'assets/index.html' //配置文件模版\n        })\n    ]\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("这样通过html-webpack-plugin就可以将我们的页面和构建js关联起来，回归日常，从页面开始开发，如果需要添加多个页面关联，那么实例化多个html-webpack-plugin，并将它们都放到plugins字段中就可以了")]),s._v(" "),n("h2",{attrs:{id:"构建css"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#构建css"}},[s._v("#")]),s._v(" 构建css")]),s._v(" "),n("p",[s._v("我们编写css，并且希望使用webpack来构建，为此，需要在配置中引入loader来解析和处理css文件，")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("module.exports={\n    modeul:{\n        rules:[\n            //...\n            {                                                                                                                                                                                                                            \n                test:/\\.css/,//正则匹配所有的css文件\n                include:[\n                    path.resolve(__dirname,'src'),\n                ],\n                user:[\n                    'style-loader‘,\n                    'css-loader'//引入的css处理包\n                ]\n            }\n        ]\n    }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("p",[s._v("style-loader和css-loader都是单独的node package,需要安装\n我们创建一个index.css，并在index.js中引用它，然后进行构建")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("import './index.css'\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("可以发现，构建出来的文件并没有css，先看一下新增两个loader的作用\n可以发现，构建出来的文件并没有css，先来看一下新增两个loader的作用：")]),s._v(" "),n("ul",[n("li",[s._v("css-loader负责解析css代码，主要是为了处理css中的依赖，例如@import合url()等引用外部文件的声明；")]),s._v(" "),n("li",[s._v("style-loader会将css-loader解析的结果转变成js代码，运行时动态插入style标签来让css代码生效\n经过上面两个loader的处理后，css代码会转变为js，和index.js一起打包了，如果需要单独把css文件分离出来，我们需要使用extract-text-webpack-plugn插件\n这个插件的并未支持webpack4.x版本，所以安装时候需要指定它的alpha版本")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("npm i extract-text-webpack-plugin@next -D或者yarn add extract-text-webpack-plugin@next -D\n//如果你用的是webpack3.x版本直接用这个插件现有的版本就行\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("简单例子")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("const ExtractTextPlugin=require('extract-text-webpack-plugin')\nmodule.exports={\n    //...\n    module:{\n        rules:[\n            {\n                test:/\\.css$/\n                use:EctractTextPlugin.extract({\n                    fallback:'style-loader',\n                    use:'css-loader'\n                })\n            }\n        ]\n    },\n    plugins:[\n        //引入插件配置文件名，这里同样可以使用【hash】\n        new ExtractTextPlugin('index.css')\n    ]\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("h2",{attrs:{id:"css预处理器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#css预处理器"}},[s._v("#")]),s._v(" css预处理器")]),s._v(" "),n("p",[s._v("在上述使用css的基础上，通常我们会使用less/sass等css处理器，webpack可以通过添加对应的loader来支持，以使用less为例，我们可以在官方文档中找到对应的loader\n我们需要在上面的webpack配置中，添加一个配置来支持解析后缀为.less的文件")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("const ExtractTextPlugin=require('extract-text-webpack-plugin')\nmodule.exports={\n    //...\n    module:{\n        rules:[\n            {\n                test:/\\.less$/\n                use:EctractTextPlugin.extract({\n                    fallback:'style-loader',\n                    use:[\n                        'css-loader',\n                        'less-loader'\n                    ]\n                })\n            }\n    },\n    plugins:[\n        //引入插件配置文件名，这里同样可以使用【hash】\n        new ExtractTextPlugin('index.css')\n    ]\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("h2",{attrs:{id:"处理图片文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#处理图片文件"}},[s._v("#")]),s._v(" 处理图片文件")]),s._v(" "),n("p",[s._v("在前端项目的样式中总会使用图片，虽然我们已经提到css-loader会解析样式中用url()引用的文件路径，但是图片对应的jpg/png/gif等文件格式，webpack处理不了，是的我们只要添加一个处理图片的loader配置就可以了，现有的file-loader就是个不错的选择\nfile-loader可以用于处理很多类型的文件，它的主要作用是直接输出文件，把构建后的文件路径返回，配置很简单，在rules中添加一个字段，增加图片类型文件的解析配置\n···\nmodule.exports = {\n// ... module: {\nrules: [\n{\ntest: /.(png|jpg|gif)$/,\nuse: [\n{\nloader: 'file-loader',\noptions: {\n},\n},\n],\n},\n],\n},\n}\n···")]),s._v(" "),n("h2",{attrs:{id:"使用babel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用babel"}},[s._v("#")]),s._v(" 使用babel")]),s._v(" "),n("p",[s._v("babel是一个让我们能够es新特性的js编译工具，我们可以在webapck中配置babel，以便使用es6.es7标准来编写代码")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("module.exports = { \n    // ... \n    module: {\n         rules: [ \n             { \n                 test: /\\.jsx?/,\n                  // 支持 js 和 jsx \n                  include: [ \n                      path.resolve(__dirname, 'src'),\n                       // src 目录下的才需要经过 babel-loader 处 理 \n                       ],\n                       loader: 'babel-loader',\n            },\n        ], \n    }, \n }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("p",[s._v("babel的相关配置可以在目录下使用.babelrc文件来处理，详细参考babel官方文档")]),s._v(" "),n("h2",{attrs:{id:"启用静态服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#启用静态服务"}},[s._v("#")]),s._v(" 启用静态服务")]),s._v(" "),n("p",[s._v("至此，我们完成了处理多种文件类型的webpack配置，我们可以使用webpack-dev-server在本地开启一个简单的静态服务来进行开发")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('"scripts":{\n    "build":"webpack --mode production",\n    "start":"webpack-dev-server --mode development"\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("尝试着运行npm run start或者yarn start,然后就可以访问http://localhost:8080/来访问你的页面了，默认是访问index.html,如果是其他页面要注意访问的url是否正确")])])}),[],!1,null,null,null);a.default=t.exports}}]);
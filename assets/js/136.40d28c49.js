(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{467:function(s,n,a){"use strict";a.r(n);var e=a(0),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"webpack的基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack的基本概念"}},[s._v("#")]),s._v(" webpack的基本概念")]),s._v(" "),a("p",[s._v("webpack本质上是一个打包工具，它会根据代码的内容解析模块依赖，帮助我们把多个模块的代码打包，借用一下webpack官网图\n"),a("img",{attrs:{src:"https://pcaaron.github.io/webpack/historyWebpack.jpg",alt:"webpack"}}),s._v("\n如图 webpack会把我们项目中使用到的多个代码模块，打包构建成项目运行仅需要的几个静态文件，webpack有着非常丰富的配置项，提供了十分强大的扩展能力，\n可以在打包构建的过程中做很多事情，来看下webpack的基本概念")]),s._v(" "),a("h2",{attrs:{id:"入口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#入口"}},[s._v("#")]),s._v(" 入口")]),s._v(" "),a("p",[s._v("在多个代码模块会有一个起始的.js文件，这个就是webpack构建的入口\nwebpack会读取这个我那件，并从它开始解析依赖，然后进行文件打包，如图，一开始我们使用webpack构建时候，\n默认的入口文件即时./src/index.js")]),s._v(" "),a("p",[s._v("如果是单页面，那么可能入口只有一个，如果是多页面，那么一个页面对应一个构建入口")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("module.exports={\n    entry:'./src/index.js'\n}\n//上述配置等同于\nmoudule.exports={\n    entryL{\n        main:'./src/index.js'\n    }\n}\n\n//或者配置多个入口\nmodule.exports={\n    entry:{\n        foo:'./srx/oage-foo.js',\n        bar:'./srx/page-bar.js',\n\n    }\n}\n//使用数组来对多个文件进行打包\nmoudule.exports={\n    entry:{\n        marin:[\n            './src/foo.js',\n            './src/bar.js',\n\n        ]\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])]),a("p",[s._v("最后的例子,可以理解为多个文件作为一个入口，webpack会解析两个文件的依赖后进行打包")]),s._v(" "),a("h2",{attrs:{id:"loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loader"}},[s._v("#")]),s._v(" loader")]),s._v(" "),a("p",[s._v("webpack提供一种垂立多种文件格式的机智，就是使用loader,我们可以把loader理解为一个转换器，负责把某种文件格式的内容装换为webapck可以支持打包的模块")]),s._v(" "),a("p",[s._v("例如：在没哟添加额外插件的情况下，webpack会默认吧所有依赖打包成js文件，如古佛入口文件依赖一个\n.hbs的模版文件以及一个.css的样式文件,那么我们需要handlebaers-lodaer来处理.hbs文件，需要css-loader来处理.css的样式文件（其实还去要style-laoder），最终\n把不同格式的文件都解析成为js代码，以便打包后在浏览器中运行。")]),s._v(" "),a("p",[s._v("当我们需要使用不同的laoder来接下处理不同类型的文件时，我们可以在module.rules字段来配置相关的规则，例如使用babel来处理.js文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("module:{\n    //....\n    rules:[\n        {\n            test:/\\.jsx?/,//匹配文件路径的正则表达式，一般我们都是配置文件类型后缀\n            include:[\n                path.resolve(_dirname,'src') //指定那些路径下的文件需要经过loader处理\n            ],\n            use:'babel-loader',//指定使用的loader\n\n        }\n    ]\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("loader是webpack中比较复杂的一块内容，它支撑这webapck来处理文件的多样性")]),s._v(" "),a("h2",{attrs:{id:"plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugin"}},[s._v("#")]),s._v(" plugin")]),s._v(" "),a("p",[s._v("在webpack的构建流程中，plugin用于处理更多其他的一些构建任务，可以这么理解吧，模块代码转换的工作由loader来处理，除此以外的任何其他工作都可以交给plugin来完成\n通过添加我们需要的plugin，可以满足更多构建中特殊的需求，例如：要使用压缩js代码的uglifysj-webpack-plugin插件，只要在配置汇总通过plugin字段添加新的plugin即可")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("const uglifyPlugin=requeire('uglifyjs-webpack-plugin')\nmoudule.exports={\n    plugins:[\n        new uglifyPlugin()\n    ]\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("除了压缩js代码的uglifyjs-webpack-plugin，常用的还有定义环境变量的defineplugin,生成css文件的extractwebpackplugin等，在这里提到这些，只要能够对plugin的作用哟孤儿大概的理解\nplugin理论上可以干涉webpack的整个构建流程，可以在流程的每一个步骤中定制自己的构建需求")]),s._v(" "),a("h2",{attrs:{id:"输出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输出"}},[s._v("#")]),s._v(" 输出")]),s._v(" "),a("p",[s._v("webpack的输出即指webpack最终构建出来的静态文件，可以看看上面webpack官方图片右侧的那些文件，当然，构建结果的文件名，路径等都是可以配置的，使用output字段：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("moudelu.exports={\n    //....\n    output:{\n        path:path.resolve(_dirname,'dist'),\n        filename:'bundle,js',\n    }\n}\n//或者多个入口生成不同的文件\nmoudelu.exports={\n    //....\n    output:{\n      entry:{\n          foo:'./src/foo.js',\n          bar:'./src/bar.js',\n      },\n      output:{\n\n      }\n    }\n}\n//路径中使用hash,每次构建时候会有一个不同的hash值，避免发布新版本时候线上使用浏览器缓存\nmodule.exports={\n    //...\n    output:{\n        filename:'[name],js',\n        path:_dirname+'/dist/[hash]'\n    }\n    }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])]),a("p",[s._v("我们在一开始直接使用webpack构建时候，默认创建的输出内容就是./dist/main.js")])])}),[],!1,null,null,null);n.default=t.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{461:function(s,n,a){"use strict";a.r(n);var e=a(0),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"什么是路由？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是路由？"}},[s._v("#")]),s._v(" 什么是路由？")]),s._v(" "),a("ul",[a("li",[s._v("路由是一个网络工程里面的术语")]),s._v(" "),a("li",[s._v("路由就是通过互联网的网络把信息从源地址传输到目的地地址的活动")]),s._v(" "),a("li",[s._v("生活中我们有没有听说过路由的概念呢？路由器")]),s._v(" "),a("li",[s._v("路由器提供了两种机制：路由和转送")])]),s._v(" "),a("ol",[a("li",[s._v("路由是决定数据包从来源到目的地的路径")]),s._v(" "),a("li",[s._v("转送将输入端的数据转移到合适的输出器")])]),s._v(" "),a("ul",[a("li",[s._v("路由中有一个非常重要的概念叫路由表")]),s._v(" "),a("li",[s._v("路由表本质上就是一个映射表。决定了数据包的指向")])]),s._v(" "),a("h1",{attrs:{id:"什么是前端渲染，什么是后端渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是前端渲染，什么是后端渲染"}},[s._v("#")]),s._v(" 什么是前端渲染，什么是后端渲染")]),s._v(" "),a("ol",[a("li",[s._v("后端渲染")]),s._v(" "),a("li",[s._v("前端渲染")]),s._v(" "),a("li",[s._v("以上自行百度")])]),s._v(" "),a("h1",{attrs:{id:"url的哈希模式跟html5的history"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#url的哈希模式跟html5的history"}},[s._v("#")]),s._v(" url的哈希模式跟html5的history")]),s._v(" "),a("ul",[a("li",[s._v('url的哈希模式：通过location.hash="aaa"设置，发现页面没有刷新，但是地址已经发生了变化')]),s._v(" "),a("li",[s._v("html5的history：")])]),s._v(" "),a("ol",[a("li",[s._v("history.pushState({},'','home') 此时页面地址也变化了，但是页面同样没有刷新，栈结构（先进后出）aa->bb->cc history.back()，此时页面地址是bb")]),s._v(" "),a("li",[s._v("history.replaceState({},'','about'); 替换url，不是压栈出栈，不能返回")]),s._v(" "),a("li",[s._v("history.go(-1) 返回上个页面等同于history.back 也可以history.go(-2)")]),s._v(" "),a("li",[s._v("history.forward()等同于go(-1)")])]),s._v(" "),a("h1",{attrs:{id:"认识vuerouter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#认识vuerouter"}},[s._v("#")]),s._v(" 认识vuerouter")]),s._v(" "),a("ul",[a("li",[s._v("vuerouter是vuejs官方的路由插件，他和vuejs是深度集成的，适合用于构建单页面应用")]),s._v(" "),a("li",[s._v("我们可以访问官网进行学习，https://router.vuejs.org/zh/")]),s._v(" "),a("li",[s._v("vuerouter是基于路由和组件的\n"),a("ol",[a("li",[s._v("路由用于设定访问路径，将路径和组件映射起来")]),s._v(" "),a("li",[s._v("在vuerouter的单页面应用中，页面路径的改变就是组件的切换")])])])]),s._v(" "),a("h1",{attrs:{id:"安装和使用vue-router"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装和使用vue-router"}},[s._v("#")]),s._v(" 安装和使用vue-router")]),s._v(" "),a("ol",[a("li",[s._v("步骤一 安装vue-router")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm i vue-router \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("步骤二 在模块化工程中使用它(因为是一个插件，所以可以通过vue.use()来安装路由功能)\n"),a("ul",[a("li",[s._v("第一步:导入路由对象，并且调用Vue.use(VueRouter)")]),s._v(" "),a("li",[s._v("第二步：创建路由实例，并且传入路由映射配置")]),s._v(" "),a("li",[s._v("第三步：在vue实例中挂载创建的路由实例")])])])]),s._v(" "),a("h1",{attrs:{id:"使用vue-router的步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用vue-router的步骤"}},[s._v("#")]),s._v(" 使用vue-router的步骤")]),s._v(" "),a("ul",[a("li",[s._v("第一步：创建路由组件")]),s._v(" "),a("li",[s._v("第二步：配置路由映射，组件和路径映射关系")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    //router/idnex.js\n    //配置路由相关的信息\nimport Vue from "vue";\nimport VueRouter from "vue-router";\n\n//导入组件\n\nimport Home from "../views/Home.vue";\nimport About from "../views/About.vue";\n\n\n\n//1.通过vue.use(插件)，安装插件\nVue.use(VueRouter);\n//2.创建vuerouter对象\nconst routes = [{\n    path: "/home",\n    name: "Home",\n    component: Home\n  },\n  {\n    path: "/about",\n    name: "About",\n    component: About\n  }\n];\n\nconst router = new VueRouter({\n  //配置路由和组件之间的应用关系\n  routes\n});\n\n//导出router\nexport default router;\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br")])]),a("ul",[a("li",[s._v("第三步：使用路由，通过router-link和router-view"),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('//app.vue\n  <div id="nav">\n    \x3c!-- router-link全局注册的组件 --\x3e\n    <router-link to="/home">首页</router-link> |\n    <router-link to="/about">关于</router-link>\n  </div>\n  \x3c!-- 决定渲染出来的组件在什么位置,占位作用 --\x3e\n  <router-view />\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])])]),s._v(" "),a("h1",{attrs:{id:"路由的默认值和history模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由的默认值和history模式"}},[s._v("#")]),s._v(" 路由的默认值和history模式")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('//router/index.js\n {\n    path: "",\n    redirect: "/home", //重定向 路由的默认配置\n  },\n//路由从hash模式变为history模式\nconst router = new VueRouter({\n  //配置路由和组件之间的应用关系\n  routes,\n  mode: "history" //histroy模式\n});\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h1",{attrs:{id:"router-link的其他属性补充"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#router-link的其他属性补充"}},[s._v("#")]),s._v(" router-link的其他属性补充")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('//app.vue\n\n//tag把routerlink变为其他标签 默认为a标签\n//replace 不让浏览器返回\n//active-class="abc" 将处于活跃状态的路由变为class变为abc\n      <router-link to="/home" tag="button" replace active-class="abc"\n        >首页</router-link\n      >\n\n// router/index.js\nconst router = new VueRouter({\n  //配置路由和组件之间的应用关系\n  routes,\n  mode: "history", //histroy模式\n  linkactiveClass: "active" //统一修改 处于活跃状态路由class名字设置\n});\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h1",{attrs:{id:"通过代码控制路由跳转"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过代码控制路由跳转"}},[s._v("#")]),s._v(" 通过代码控制路由跳转")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<template>\n  <div id="app">\n    <div id="nav">\n      \x3c!-- router-link全局注册的组件 --\x3e\n      \x3c!-- <router-link to="/home" tag="button" repalce active-class="abc">首页</router-link>|\n      <router-link to="/about" tag="button">关于</router-link> --\x3e\n      <button @click="homeclick">home</button>\n      <button @click="aboutclick">about</button>\n    </div>\n    \x3c!-- 决定渲染出来的组件在什么位置 --\x3e\n    <router-view />\n  </div>\n</template>\n\n<script>\nexport default {\n  name: "app",\n  methods: {\n    homeclick() {\n      this.$router.push("./home");\n    },\n    aboutclick() {\n      this.$router.replace("./about"); //不返回\n    }\n  }\n};\n<\/script>\n<style lang="scss">\n#app {\n  font-family: Avenir, Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #2c3e50;\n}\n\n#nav {\n  padding: 30px;\n\n  a {\n    font-weight: bold;\n    color: #2c3e50;\n\n    &.router-link-exact-active {\n      color: #42b983;\n    }\n  }\n}\n</style>\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br")])]),a("h1",{attrs:{id:"动态路由的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态路由的使用"}},[s._v("#")]),s._v(" 动态路由的使用")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('//index.js\n{\n    path: "/user/:userid", //加参数\n    name: "User",\n    component: User\n}\n//app.vue\n<router-link :to="`/user/${userid}`" tag="button">用户</router-link> //使用参数\n\n  data() {\n    return {\n      userid: "lisi"\n    };\n  }\n//user.vue 拿到参数\n<h4>{{ userid }}</h4>\ncomputed: {\n    userid() {\n      return this.$route.params.userid; //this.$route 活跃状态的路由 拿到路由的userid 注意：这里userid是上方你注册路由时自定义的名字\n    }\n},\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("h1",{attrs:{id:"路由的懒加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由的懒加载"}},[s._v("#")]),s._v(" 路由的懒加载")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('//路由懒加载\nconst Home = () => import("../views/Home.vue");\nconst About = () => import("../views/About.vue");\nconst User = () => import("../views/User.vue");\nconst News = () => import("../views/News.vue");\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h1",{attrs:{id:"路由的嵌套使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由的嵌套使用"}},[s._v("#")]),s._v(" 路由的嵌套使用")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('//index.js\n  {\n    path: "/home",\n    name: "Home",\n    component: Home,\n    children: [{\n      path: "",\n      redirect: "news"\n    }, {\n      path: \'news\',\n      component: News\n    }]\n  },\n},\n//home.vue\n    <router-link to="/home/news">新闻</router-link>\n    <router-view></router-view>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h1",{attrs:{id:"vue-router传递参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-router传递参数"}},[s._v("#")]),s._v(" vue-router传递参数")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('//app.vue\n      <router-link\n        :to="{ path: \'/profile\', query: { name: \'aaa\' } }"\n        tag="button"\n        >profile</router-link\n      >\n//profile.vue\n//$route.query取参数\n <h4>{{ $route.query }}</h4>\n\n//另一种方式\n     <button @click="proClick">profile</button>\n//methods\n   proClick() {\n      this.$router.push({\n        path: "/profile",\n        query: {\n          name: "kebi"\n        }\n      });\n    }\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("h1",{attrs:{id:"全局导航守卫"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局导航守卫"}},[s._v("#")]),s._v(" 全局导航守卫")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('\n//index.js\n// meta 元数据 描述数据\n  {\n    path: "/profile",\n    name: "Profile",\n    component: Profile,\n    meta: {\n      title: "档案"\n    }\n  }\n\n\n//index.js\n//前置钩子 \nrouter.beforeEach((to, from, next) => {\n  //从from到to\n  // document.title = to.matched[0].meta.title;\n  document.title = to.meta.title;\n  console.log(to);\n  next();\n})\n//后置守卫 跳转后的\n  router.afterEach((to, from, next) => {\n    next();\n  })\n//路由独享守卫\n{\n    path: "/profile",\n    name: "Profile",\n    component: Profile,\n    meta: {\n      title: "档案"\n    },\n    beforeEach: (to, from, next) => {\n      next()\n    }\n\n  }\n// 注意：更多钩子请看官网\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br")])]),a("h1",{attrs:{id:"keepalive-（保持活着）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keepalive-（保持活着）"}},[s._v("#")]),s._v(" keepalive （保持活着）")]),s._v(" "),a("ul",[a("li",[s._v("keep-alive是vue内置的组件，可以使被包含的组件保留状态，或避免重新渲染")]),s._v(" "),a("li",[s._v("router-view也是一个组件，如果直接被包含在keep-alive里面，所有路径匹配的视图组件都会被缓存")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("  //keep-alive用法\n  <keep-alive>\n    <router-view />\n  </keep-alive>\n  //这两个函数，只有该组件被保持了状态，使用了keep-alive时才有效\n  activated() {},\n  deactivated() {}\n  //路由内守卫 记录离开时的path\n  beforerouterleave(to,from,next){\n    this.path=this.$touter.path;\n    next();\n  }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h1",{attrs:{id:"keep-alive的属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keep-alive的属性"}},[s._v("#")]),s._v(" keep-alive的属性")]),s._v(" "),a("ul",[a("li",[s._v("include 字符串或者正则表达，只有匹配的组件会被缓存")]),s._v(" "),a("li",[s._v("exclude 字符串或者正则表达，只有匹配的组件不会被缓存")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(' //用法(多个情况下格式如下，不要加空格) 排除档案页面 会被销毁，创建\n  <keep-alive exclude="profile,User">\n        <router-view />\n  </keep-alive>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);
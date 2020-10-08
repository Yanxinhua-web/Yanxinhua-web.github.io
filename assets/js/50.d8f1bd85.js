(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{376:function(s,n,a){"use strict";a.r(n);var e=a(0),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"构造函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构造函数"}},[s._v("#")]),s._v(" 构造函数")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("使用工厂模式创建的对象，使用的构造函数都是Object()")])]),s._v(" "),a("li",[a("p",[s._v("所以创建的对象 都是Object这个类型")])]),s._v(" "),a("li",[a("p",[s._v("我们无法区分多种不同类型的对象")])]),s._v(" "),a("li",[a("p",[s._v("不同的是 构造函数首字母大写")])]),s._v(" "),a("li",[a("p",[s._v("构造函数跟普通函数的区别")])]),s._v(" "),a("li",[a("p",[s._v("构造函数使用new关键字来调用，普通函数则是直接调用")])]),s._v(" "),a("li",[a("p",[s._v("构造函数执行流程：")])])]),s._v(" "),a("ol",[a("li",[s._v("会立刻创建一个新的对象，")]),s._v(" "),a("li",[s._v("将新建的对象设置为函数中的this")]),s._v(" "),a("li",[s._v("逐行执行函数中的代码")]),s._v(" "),a("li",[s._v("将新建的对象作为返回值返回")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function Person(name, age) {\nconsole.log(this)\nthis.name = name\nthis.age = age\nthis.sayName = function () {\n\n    console.log(this.name)\n\n}\n}\n\nfunction Dog(name, age) {\nthis.name = name\nthis.age = age\nthis.sayName = function () {\n\n    console.log(this.name, this.age)\n\n}\n}\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("ul",[a("li",[s._v("使用一个构造函数创建的对象，我们称之为一类对象，也将一个构造函数称为一个类")]),s._v(" "),a("li",[s._v("我们将通过构造函数创建的对象，称之为实例")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("var per = new Person(1, 1); \nvar per2 = new Person(2, 2); \nvar per3 = new Person(3, 3); \n\nconsole.log(per)\nconsole.log(per2)\nconsole.log(per3)\nvar dog = new Dog('狗', 8)\nconsole.log(dog)\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"instantce运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instantce运算符"}},[s._v("#")]),s._v(" instantce运算符")]),s._v(" "),a("ul",[a("li",[s._v("可以检查一个对象是否是一个类的实例")]),s._v(" "),a("li",[s._v("如果是返回true, 如果不是返回false")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("console.log(per instanceof Person) -true\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("所有的对象都是Object的对象")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("console.log(per instanceof Object) -true\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"构造函数的优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构造函数的优化"}},[s._v("#")]),s._v(" 构造函数的优化")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("在person函数中，我们会为每一个对象添加一个sayName函数")])]),s._v(" "),a("li",[a("p",[s._v("目前我们的方法是在构造函数内部创建的，也就是说构造函数每执行一次 都会创建一个sayName函数")])]),s._v(" "),a("li",[a("p",[s._v("也就说所有实例的sayName都是唯一的")])]),s._v(" "),a("li",[a("p",[s._v("也就导致了 构造函数每执行一次都会创建一个新的对象")])]),s._v(" "),a("li",[a("p",[s._v("将sayName方法在全局作用域中定义")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\nfunction sayName() {\nconsole.log( `大家好，我是${this.name},我今年${this.age}` )\n}\n\nfunction Animal(name, age) {\nconsole.log(this)\nthis.name = name\nthis.age = age\nthis.sayName = sayName; \n}\nvar dog = new Animal('老八', 12)\nvar cat = new Animal('老七', 22)\n\ndog.sayName()\n\nconsole.log(dog.sayName == cat.sayName)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);
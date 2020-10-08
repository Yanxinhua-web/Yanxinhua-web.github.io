(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{443:function(s,e,n){"use strict";n.r(e);var a=n(0),r=Object(a.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"promise"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#promise"}},[s._v("#")]),s._v(" Promise")]),s._v(" "),n("h2",{attrs:{id:"什么是promise呢？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是promise呢？"}},[s._v("#")]),s._v(" 什么是promise呢？")]),s._v(" "),n("ul",[n("li",[s._v("promise是异步编程的一种解决方案")]),s._v(" "),n("li",[s._v("为了解决网络请求的回调地狱，（当网络请求非常复杂时，就会出现回调地狱)")])]),s._v(" "),n("h2",{attrs:{id:"promise的基本用法-链式调用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#promise的基本用法-链式调用"}},[s._v("#")]),s._v(" promise的基本用法(链式调用)")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("        new Promise((resolve, reject) => {\n            setTimeout(() => {\n                resolve();\n                reject('errpr message')\n            }, 1000);\n        }).then(() => {\n            console.log('hello promise');\n            return new Promise(() => {\n                setTimeout(() => {\n                    resolve();\n\n                }, 1000);\n            }).then(() => {\n                console.log('hello js')\n            })\n        }).catch(err => {\n            console.log(err)\n        });\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("h2",{attrs:{id:"promise的三种状态"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#promise的三种状态"}},[s._v("#")]),s._v(" promise的三种状态")]),s._v(" "),n("ul",[n("li",[s._v("pending(等待状态) 比如正在进行网络请求，或者定时器没有到时间")]),s._v(" "),n("li",[s._v("fulfill(满足状态) 当我们回调了resolve时，就处于该状态，并且回调.then()")]),s._v(" "),n("li",[s._v("rejecet(拒绝状态) 当我们主动回调了reject时，就处于该状态，并且会回调.catch()")])]),s._v(" "),n("h2",{attrs:{id:"promise的链式调用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#promise的链式调用"}},[s._v("#")]),s._v(" promise的链式调用")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("        //链式调用\n        new Promise((resolve, reject) => {\n            setTimeout(() => {\n                resolve('aaa')\n            }, 1000);\n        }).then(res => {\n            console.log(res + '第一层处理代码');\n            return new Promise((resolve) => {\n                resolve(res + '111')\n            })\n        }).then(res => {\n            console.log(res + '第二层处理代码')\n        })\n        // new promise(resolve => resolve(结果)) 简写\n        new Promise((resolve, reject) => {\n            setTimeout(() => {\n                resolve('aaa')\n            }, 1000);\n        }).then(res => {\n            console.log(res + '第一层处理代码');\n            return Promise.resolve(res + '111')\n        }).then(res => {\n            console.log(res + '第二层处理代码')\n        })\n        //简写\n        new Promise((resolve, reject) => {\n            setTimeout(() => {\n                resolve('aaa')\n            }, 1000);\n        }).then(res => {\n            console.log(res + '第一层处理代码');\n            return res + '111';\n        }).then(res => {\n            console.log(res + '第二层处理代码')\n        })\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br")])]),n("h2",{attrs:{id:"promise-all的使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#promise-all的使用"}},[s._v("#")]),s._v(" promise-all的使用")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("     //请求1\n        //请求2\n        // 两个请求都完成时候再处理\n        Promise.all([\n            new Promise((resolve, reject) => {\n                setTimeout(() => {\n                    resolve('resolve1');\n                }, 1000)\n            }),\n            new Promise((resolve, reject) => {\n                setTimeout(() => {\n                    resolve('resolve2');\n                }, 2000)\n            })\n        ]).then(results => {\n            console.log(results)\n        })\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])])])}),[],!1,null,null,null);e.default=r.exports}}]);
webpackJsonp([1],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_leftNav__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_leftNav___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_common_leftNav__);
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app',
  components: {
    leftNav: __WEBPACK_IMPORTED_MODULE_0__components_common_leftNav___default.a
  }
});

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Main',
  data() {
    return {};
  }
});

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//局部引用axios

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'Pos',
    mounted: function () {
        var orderHeight = document.body.clientHeight;
        document.getElementById("order-list").style.height = orderHeight + 'px';
    },
    // //用axios加载数据
    // created() {
    //     //读取常用商品列表
    //     //局部引用axios
    //     axios.get('../../static/oftenGoods.json')
    //         .then(response => {
    //             //console.log(response);
    //             this.oftenGoods = response.data;
    //         })
    //         .catch(error => {
    //             console.log(error);
    //             alert('网络错误，不能访问');
    //         })
    //     //读取分类商品列表
    //     //全局引用axios
    //     this.$http.get('../../static/typeGoods.json')
    //         .then(response => {
    //             //console.log(response);
    //             //this.type0Goods=response.data;
    //             this.type0Goods = response.data[0];
    //             this.type1Goods = response.data[1];
    //             this.type2Goods = response.data[2];
    //             this.type3Goods = response.data[3];

    //         })
    //         .catch(error => {
    //             console.log(error);
    //             alert('网络错误，不能访问');
    //         })
    // },
    data() {
        return {
            tableData: [], //订单列表的值
            oftenGoods: [{
                goodsId: 1,
                goodsName: '香辣鸡腿堡',
                price: 18
            }, {
                goodsId: 2,
                goodsName: '田园鸡腿堡',
                price: 15
            }, {
                goodsId: 3,
                goodsName: '和风汉堡',
                price: 15
            }, {
                goodsId: 4,
                goodsName: '快乐全家桶',
                price: 80
            }, {
                goodsId: 5,
                goodsName: '脆皮炸鸡腿',
                price: 10
            }, {
                goodsId: 6,
                goodsName: '魔法鸡块',
                price: 20
            }, {
                goodsId: 7,
                goodsName: '可乐大杯',
                price: 10
            }, {
                goodsId: 8,
                goodsName: '雪顶咖啡',
                price: 18
            }, {
                goodsId: 9,
                goodsName: '大块鸡米花',
                price: 15
            }, {
                goodsId: 20,
                goodsName: '香脆鸡柳',
                price: 17
            }],
            type0Goods: [{
                goodsId: 1,
                goodsImg: "https://img.4008823823.com.cn/kfcios/Version/542_441323.jpg",
                goodsName: '香辣鸡腿堡s',
                price: 18
            }, {
                goodsId: 2,
                goodsImg: "https://img.4008823823.com.cn/kfcios/Version/537_428748.jpg",
                goodsName: '鸡腿双层堡S',
                price: 15
            }, {
                goodsId: 3,
                goodsImg: "https://img.4008823823.com.cn/kfcios/Version/542_441325.jpg",
                goodsName: '和风汉堡',
                price: 15
            }],
            type1Goods: [{
                goodsId: 4,
                goodsImg: "https://img.4008823823.com.cn/kfcios/Version/458_294145.jpg",
                goodsName: '大包薯条',
                price: 80
            }, {
                goodsId: 5,
                goodsImg: "https://img.4008823823.com.cn/kfcios/Version/399_232632.jpg",
                goodsName: '脆皮炸鸡腿',
                price: 10
            }, {
                goodsId: 6,
                goodsImg: "https://img.4008823823.com.cn/kfcios/Version/522_401486.jpg",
                goodsName: '魔法鸡块',
                price: 20
            }],
            type2Goods: [{
                goodsId: 7,
                goodsImg: "https://img.4008823823.com.cn/kfcios/Version/237_92971.jpg",
                goodsName: '百事可乐',
                price: 10
            }, {
                goodsId: 8,
                goodsImg: "https://img.4008823823.com.cn/kfcios/Version/542_439268.jpg",
                goodsName: '雪顶咖啡',
                price: 18
            }],
            type3Goods: [{
                goodsId: 9,
                goodsImg: "https://img.4008823823.com.cn/kfcios/Version/427_257163.jpg",
                goodsName: '儿童欢乐套餐',
                price: 15
            }, {
                goodsId: 10,
                goodsImg: "https://img.4008823823.com.cn/kfcios/Version/511_378745.jpg",
                goodsName: '快乐全家桶',
                price: 17
            }],
            totalMoney: 0, //订单总价格
            totalCount: 0 //订单商品总数量

        };
    },
    methods: {
        //添加订单列表的方法
        addOrderList(goods) {
            //console.log(goods);
            this.totalCount = 0; //汇总数量清0
            this.totalMoney = 0;
            let isHave = false;
            //判断是否这个商品已经存在于订单列表
            for (let i = 0; i < this.tableData.length; i++) {
                console.log(this.tableData[i].goodsId);
                if (this.tableData[i].goodsId == goods.goodsId) {

                    isHave = true; //存在
                }
            }
            //根据isHave的值判断订单列表中是否已经有此商品
            if (isHave) {
                //存在就进行数量添加
                let arr = this.tableData.filter(o => o.goodsId == goods.goodsId);
                arr[0].count++;
                //console.log(arr);
            } else {
                //不存在就推入数组
                let newGoods = { goodsId: goods.goodsId, goodsName: goods.goodsName, price: goods.price, count: 1 };
                this.tableData.push(newGoods);
            }

            this.getAllMoney();
        },
        //删除单个商品
        delSingleGoods(goods) {
            console.log(goods);
            this.tableData = this.tableData.filter(o => o.goodsId != goods.goodsId);
            this.getAllMoney();
        },
        //删除所有商品
        delAllGoods() {
            this.tableData = [];
            this.totalCount = 0;
            this.totalMoney = 0;
        },
        //汇总数量和金额
        getAllMoney() {
            this.totalCount = 0;
            this.totalMoney = 0;
            if (this.tableData) {
                this.tableData.forEach(element => {
                    this.totalCount += element.count;
                    this.totalMoney = this.totalMoney + element.price * element.count;
                });
            }
        },
        //结账方法模拟
        checkout() {
            if (this.totalCount != 0) {
                this.tableData = [];
                this.totalCount = 0;
                this.totalMoney = 0;
                this.$message({
                    message: '结账成功，感谢你又为店里出了一份力!',
                    type: 'success'
                });
            } else {
                this.$message.error('不能空结。老板了解你急切的心情！');
            }
        }

    }
});

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_element_ui__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_element_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_element_ui_lib_theme_default_index_css__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_element_ui_lib_theme_default_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_element_ui_lib_theme_default_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_axios__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.





//全局引用axios

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].prototype.$http = __WEBPACK_IMPORTED_MODULE_5_axios___default.a;

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_element_ui___default.a);

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(172)

var Component = __webpack_require__(44)(
  /* script */
  __webpack_require__(118),
  /* template */
  __webpack_require__(180),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(173)

var Component = __webpack_require__(44)(
  /* script */
  __webpack_require__(119),
  /* template */
  __webpack_require__(181),
  /* scopeId */
  "data-v-179ef542",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 179:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('leftNav'), _vm._v(" "), _c('div', {
    staticClass: "pos"
  }, [_c('router-view')], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "left-nav"
  }, [_c('ul', [_c('li', [_c('i', {
    staticClass: "icon iconfont icon-wodezichan"
  }), _vm._v(" "), _c('div', [_vm._v("收银")])]), _vm._v(" "), _c('li', [_c('i', {
    staticClass: "icon iconfont icon-dianpu"
  }), _vm._v(" "), _c('div', [_vm._v("店铺")])]), _vm._v(" "), _c('li', [_c('i', {
    staticClass: "icon iconfont icon-hanbao"
  }), _vm._v(" "), _c('div', [_vm._v("商品")])]), _vm._v(" "), _c('li', [_c('i', {
    staticClass: "icon iconfont icon-huiyuanqia"
  }), _vm._v(" "), _c('div', [_vm._v("会员")])]), _vm._v(" "), _c('li', [_c('i', {
    staticClass: "icon iconfont icon-shijian"
  }), _vm._v(" "), _c('div', [_vm._v("抢购")])]), _vm._v(" "), _c('li', [_c('i', {
    staticClass: "icon iconfont icon-tongji"
  }), _vm._v(" "), _c('div', [_vm._v("统计")])]), _vm._v("\n\n·\n    ")])])
}]}

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pos"
  }, [_c('div', [_c('el-row', [_c('el-col', {
    staticClass: "pos-order",
    attrs: {
      "span": 7,
      "id": "order-list"
    }
  }, [_c('el-tabs', [_c('el-tab-pane', {
    attrs: {
      "label": "点餐"
    }
  }, [_c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.tableData,
      "border": ""
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "goodsName",
      "label": "商品"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "count",
      "label": "量",
      "width": "50"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "price",
      "label": "金额",
      "width": "70"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "width": "100",
      "fixed": "right"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "type": "text",
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.delSingleGoods(scope.row)
            }
          }
        }, [_vm._v("删除")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "type": "text",
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.addOrderList(scope.row)
            }
          }
        }, [_vm._v("增加")])]
      }
    }])
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "totalDiv"
  }, [_c('small', [_vm._v("数量：")]), _vm._v(" "), _c('strong', [_vm._v(_vm._s(_vm.totalCount))]), _vm._v("     \n                            "), _c('small', [_vm._v("总计：")]), _vm._v(" "), _c('strong', [_vm._v(_vm._s(_vm.totalMoney))]), _vm._v(" 元\n                        ")]), _vm._v(" "), _c('div', {
    staticClass: "order-btn"
  }, [_c('el-button', {
    attrs: {
      "type": "warning"
    }
  }, [_vm._v("挂单")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "danger"
    },
    on: {
      "click": function($event) {
        _vm.delAllGoods()
      }
    }
  }, [_vm._v("删除")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "success"
    },
    on: {
      "click": function($event) {
        _vm.checkout()
      }
    }
  }, [_vm._v(" 结账")])], 1)], 1), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "挂单"
    }
  }, [_vm._v("\n                        挂单\n                    ")]), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "外卖"
    }
  }, [_vm._v("\n                        外卖\n                    ")])], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 17
    }
  }, [_c('div', {
    staticClass: "often-goods"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("常用商品")]), _vm._v(" "), _c('div', {
    staticClass: "often-goods-list"
  }, [_c('ul', _vm._l((_vm.oftenGoods), function(goods) {
    return _c('li', {
      on: {
        "click": function($event) {
          _vm.addOrderList(goods)
        }
      }
    }, [_c('span', [_vm._v(_vm._s(goods.goodsName))]), _vm._v(" "), _c('span', {
      staticClass: "o-price"
    }, [_vm._v("￥" + _vm._s(goods.price) + "元")])])
  }))])]), _vm._v(" "), _c('div', {
    staticClass: "goods-type"
  }, [_c('el-tabs', [_c('el-tab-pane', {
    attrs: {
      "label": "汉堡"
    }
  }, [_c('ul', {
    staticClass: "cookList"
  }, _vm._l((_vm.type0Goods), function(goods) {
    return _c('li', {
      on: {
        "click": function($event) {
          _vm.addOrderList(goods)
        }
      }
    }, [_c('span', {
      staticClass: "foodImg"
    }, [_c('img', {
      attrs: {
        "src": goods.goodsImg,
        "width": "100%"
      }
    })]), _vm._v(" "), _c('span', {
      staticClass: "foodName"
    }, [_vm._v(_vm._s(goods.goodsName))]), _vm._v(" "), _c('span', {
      staticClass: "foodPrice"
    }, [_vm._v("￥" + _vm._s(goods.price) + "元")])])
  }))]), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "小食"
    }
  }, [_c('ul', {
    staticClass: "cookList"
  }, _vm._l((_vm.type1Goods), function(goods) {
    return _c('li', {
      on: {
        "click": function($event) {
          _vm.addOrderList(goods)
        }
      }
    }, [_c('span', {
      staticClass: "foodImg"
    }, [_c('img', {
      attrs: {
        "src": goods.goodsImg,
        "width": "100%"
      }
    })]), _vm._v(" "), _c('span', {
      staticClass: "foodName"
    }, [_vm._v(_vm._s(goods.goodsName))]), _vm._v(" "), _c('span', {
      staticClass: "foodPrice"
    }, [_vm._v("￥" + _vm._s(goods.price) + "元")])])
  }))]), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "饮料"
    }
  }, [_c('ul', {
    staticClass: "cookList"
  }, _vm._l((_vm.type2Goods), function(goods) {
    return _c('li', {
      on: {
        "click": function($event) {
          _vm.addOrderList(goods)
        }
      }
    }, [_c('span', {
      staticClass: "foodImg"
    }, [_c('img', {
      attrs: {
        "src": goods.goodsImg,
        "width": "100%"
      }
    })]), _vm._v(" "), _c('span', {
      staticClass: "foodName"
    }, [_vm._v(_vm._s(goods.goodsName))]), _vm._v(" "), _c('span', {
      staticClass: "foodPrice"
    }, [_vm._v("￥" + _vm._s(goods.price) + "元")])])
  }))]), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "套餐"
    }
  }, [_c('ul', {
    staticClass: "cookList"
  }, _vm._l((_vm.type3Goods), function(goods) {
    return _c('li', {
      on: {
        "click": function($event) {
          _vm.addOrderList(goods)
        }
      }
    }, [_c('span', {
      staticClass: "foodImg"
    }, [_c('img', {
      attrs: {
        "src": goods.goodsImg,
        "width": "100%"
      }
    })]), _vm._v(" "), _c('span', {
      staticClass: "foodName"
    }, [_vm._v(_vm._s(goods.goodsName))]), _vm._v(" "), _c('span', {
      staticClass: "foodPrice"
    }, [_vm._v("￥" + _vm._s(goods.price) + "元")])])
  }))])], 1)], 1)])], 1)], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_page_Pos__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_page_Pos___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_page_Pos__);




__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    name: 'Pos',
    component: __WEBPACK_IMPORTED_MODULE_2__components_page_Pos___default.a
  }]
}));

/***/ }),

/***/ 75:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(171)

var Component = __webpack_require__(44)(
  /* script */
  __webpack_require__(117),
  /* template */
  __webpack_require__(179),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

},[120]);
//# sourceMappingURL=app.da15314c3beabbce3a0e.js.map
"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_site_main_Main_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/site/main/Main.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/site/main/Main.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_pagination_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../mixins/pagination.mixin.js */ "./resources/js/mixins/pagination.mixin.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Main",
  mixins: [_mixins_pagination_mixin_js__WEBPACK_IMPORTED_MODULE_1__["default"]],
  data: function data() {
    return {
      films: [],
      search: '',
      genre: 0,
      sorted: [],
      years: [],
      year: 0,
      date: 0
    };
  },
  computed: {
    genres: function genres() {
      return this.$store.getters.genres;
    }
  },
  mounted: function mounted() {
    this.getFilms();
    this.$store.dispatch('getGenres');
    this.getYears();
  },
  watch: {
    search: function search(val, old) {
      if (val.length >= 4 || old.length >= 4) {
        this.getResults();
      }

      if (+val.length === 0 || +old.length === 0) {
        this.getFilms();
      }
    }
  },
  methods: {
    getFilms: function getFilms() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get('/api/films/content/').then(function (res) {
                  _this.films = res.data;

                  _this.setupPagination(_this.films);

                  console.log(res.data);
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getYears: function getYears() {
      var _this2 = this;

      axios.get("/api/films/years").then(function (res) {
        _this2.years = res.data;
      });
    },
    getResults: function getResults() {
      var _this3 = this;

      axios.get("/api/films/search?q=".concat(this.search)).then(function (res) {
        _this3.films = res.data;

        _this3.setupPagination(_this3.films);
      });
    },
    filterFilms: function filterFilms(genre) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(_this4.year !== 0)) {
                  _context2.next = 6;
                  break;
                }

                _this4.sorted = [];
                _this4.date = 0;

                _this4.items.map(function (film) {
                  if (film.genres.some(function (elem) {
                    return elem.id === genre;
                  })) {
                    _this4.sorted.push(film);
                  }
                });

                _context2.next = 12;
                break;

              case 6:
                _context2.next = 8;
                return _this4.getFilms();

              case 8:
                _this4.sorted = [];
                _this4.date = 0;
                _this4.year = 0;

                _this4.films.map(function (film) {
                  if (film.genres.some(function (elem) {
                    return elem.id === genre;
                  })) {
                    _this4.sorted.push(film);
                  }
                });

              case 12:
                _context2.next = 14;
                return _this4.setupPagination(_this4.sorted);

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    filterYears: function filterYears(year) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var vm, _vm;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(_this5.genre !== 0)) {
                  _context3.next = 9;
                  break;
                }

                _this5.sorted = [];
                _this5.date = 0;
                vm = _this5;

                _this5.items.map(function (film) {
                  if (film.year.substring(0, 4) === year) {
                    vm.sorted.push(film);
                  }
                });

                _context3.next = 7;
                return _this5.setupPagination(_this5.sorted);

              case 7:
                _context3.next = 13;
                break;

              case 9:
                _this5.sorted = [];
                _this5.date = 0;
                _vm = _this5;

                _this5.films.map(function (film) {
                  if (film.year.substring(0, 4) === year) {
                    _vm.sorted.push(film);
                  }
                });

              case 13:
                _context3.next = 15;
                return _this5.setupPagination(_this5.sorted);

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    filterDate: function filterDate(date) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var newItems, _newItems;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(_this6.genre !== 0 || _this6.year !== 0)) {
                  _context4.next = 12;
                  break;
                }

                newItems = _this6.items;

                if (!(date === 1)) {
                  _context4.next = 6;
                  break;
                }

                newItems.sort(function (a, b) {
                  return a.created_at > b.created_at ? -1 : 1;
                });
                _context4.next = 6;
                return _this6.setupPagination(newItems);

              case 6:
                if (!(date === 2)) {
                  _context4.next = 10;
                  break;
                }

                newItems.sort(function (a, b) {
                  return a.created_at > b.created_at ? 1 : -1;
                });
                _context4.next = 10;
                return _this6.setupPagination(newItems);

              case 10:
                _context4.next = 17;
                break;

              case 12:
                _newItems = _this6.films;

                if (date === 1) {
                  _newItems.sort(function (a, b) {
                    return a.created_at > b.created_at ? -1 : 1;
                  });
                }

                if (date === 2) {
                  _newItems.sort(function (a, b) {
                    return a.created_at > b.created_at ? 1 : -1;
                  });
                }

                _context4.next = 17;
                return _this6.setupPagination(_newItems);

              case 17:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    clearSort: function clearSort() {
      this.sorted = [];
      this.year = 0;
      this.genre = 0;
      this.date = 0;
      this.getFilms();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/site/main/Main.vue?vue&type=template&id=0a5b299c&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/site/main/Main.vue?vue&type=template&id=0a5b299c&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("navbar"), _vm._v(" "), _c("div", {
    staticClass: "w-3/4 mx-auto"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.search,
      expression: "search"
    }],
    staticClass: "form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",
    attrs: {
      type: "search",
      id: "exampleSearch",
      name: "search",
      placeholder: "Искать фильмы или сериалы"
    },
    domProps: {
      value: _vm.search
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.search = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "w-3/4 mx-auto flex flex-wrap justify-around mt-12"
  }, [_c("div", {
    staticClass: "w-72"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.genre,
      expression: "genre"
    }],
    staticClass: "form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",
    attrs: {
      disabled: this.genre !== 0,
      name: "genre",
      id: "genre"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.genre = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, function ($event) {
        return _vm.filterFilms(_vm.genre);
      }]
    }
  }, [_c("option", {
    attrs: {
      selected: "",
      disabled: "",
      value: "0"
    }
  }, [_vm._v("Выберите жанр")]), _vm._v(" "), _vm._l(_vm.genres, function (genre) {
    return _c("option", {
      domProps: {
        value: genre.id
      }
    }, [_vm._v(_vm._s(genre.name))]);
  })], 2)]), _vm._v(" "), _c("div", {
    staticClass: "w-72"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.year,
      expression: "year"
    }],
    staticClass: "form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",
    attrs: {
      disabled: this.year !== 0,
      name: "genre",
      id: "genre"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.year = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, function ($event) {
        return _vm.filterYears(_vm.year);
      }]
    }
  }, [_c("option", {
    attrs: {
      selected: "",
      disabled: "",
      value: "0"
    }
  }, [_vm._v("Выберите год")]), _vm._v(" "), _vm._l(_vm.years, function (year) {
    return _c("option", {
      domProps: {
        value: year
      }
    }, [_vm._v(_vm._s(year))]);
  })], 2)]), _vm._v(" "), _c("div", {
    staticClass: "w-72"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.date,
      expression: "date"
    }],
    staticClass: "form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",
    attrs: {
      name: "genre",
      id: "genre"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.date = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, function ($event) {
        return _vm.filterDate(_vm.date);
      }]
    }
  }, [_c("option", {
    attrs: {
      disabled: ""
    },
    domProps: {
      value: 0
    }
  }, [_vm._v("По дате добавления")]), _vm._v(" "), _c("option", {
    domProps: {
      value: 1
    }
  }, [_vm._v("Самые новые")]), _vm._v(" "), _c("option", {
    domProps: {
      value: 2
    }
  }, [_vm._v("Самые старые")])])]), _vm._v(" "), _c("div", {
    staticClass: "w-20"
  }, [_c("button", {
    staticClass: "cursor-pointer inline-block mb-5 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out",
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.clearSort.apply(null, arguments);
      }
    }
  }, [_vm._v("\n                    Сбросить\n                ")])])]), _vm._v(" "), _c("div", {
    staticClass: "grid xl:grid-cols-6 gap-12 m-12"
  }, [_vm.items ? _vm._l(_vm.items, function (film) {
    return _c("div", {
      staticClass: "flex justify-center"
    }, [_c("div", {
      staticClass: "rounded-lg shadow-lg bg-white max-w-sm mb-2"
    }, [_c("router-link", {
      staticClass: "flex justify-around",
      attrs: {
        to: {
          name: "film.show",
          params: {
            id: film.id
          }
        }
      }
    }, [_c("img", {
      staticClass: "rounded-t-lg",
      attrs: {
        src: "storage/".concat(film.img_path),
        alt: film.name
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "p-6"
    }, [_c("p", {
      staticClass: "text-gray-900 text-lg md:text-sm font-medium mb-2"
    }, [_vm._v(_vm._s(film.name))])])], 1)]);
  }) : _vm._e()], 2), _vm._v(" "), !_vm.items ? [_c("div", {
    staticClass: "w-3/4 mx-auto text-center h-screen text-6xl text-red-700"
  }, [_vm._v("\n                Ничего не найдено, попробуйте снова\n            ")])] : _vm._e(), _vm._v(" "), _c("Paginate", {
    attrs: {
      "page-count": _vm.pageCount,
      "click-handler": _vm.pageChangeHandler,
      "prev-text": "Назад",
      "next-text": "Вперед",
      "container-class": "flex justify-center",
      "page-class": "page-item",
      "page-link-class": "page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none",
      "prev-class": "page-item",
      "prev-link-class": "page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none",
      "next-class": "page-item",
      "next-link-class": "page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none",
      "active-class": "bg-purple-600"
    },
    model: {
      value: _vm.page,
      callback: function callback($$v) {
        _vm.page = $$v;
      },
      expression: "page"
    }
  }), _vm._v(" "), _c("foot")], 2);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/mixins/pagination.mixin.js":
/*!*************************************************!*\
  !*** ./resources/js/mixins/pagination.mixin.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      page: +this.$route.query.page || 1,
      pageSize: 18,
      pageCount: 0,
      allItems: [],
      items: []
    };
  },
  methods: {
    setupPagination: function setupPagination(allItems) {
      this.allItems = lodash__WEBPACK_IMPORTED_MODULE_0___default().chunk(allItems, this.pageSize);
      this.pageCount = lodash__WEBPACK_IMPORTED_MODULE_0___default().size(this.allItems);
      this.items = this.allItems[this.page - 1] || this.allItems[0];
    },
    pageChangeHandler: function pageChangeHandler(page) {
      this.$router.push("".concat(this.$route.path, "?page=").concat(page));
      this.items = this.allItems[page - 1] || this.allItems[0];
    }
  }
});

/***/ }),

/***/ "./resources/js/components/site/main/Main.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/site/main/Main.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Main_vue_vue_type_template_id_0a5b299c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.vue?vue&type=template&id=0a5b299c&scoped=true& */ "./resources/js/components/site/main/Main.vue?vue&type=template&id=0a5b299c&scoped=true&");
/* harmony import */ var _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main.vue?vue&type=script&lang=js& */ "./resources/js/components/site/main/Main.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Main_vue_vue_type_template_id_0a5b299c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Main_vue_vue_type_template_id_0a5b299c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0a5b299c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/site/main/Main.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/site/main/Main.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/site/main/Main.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/site/main/Main.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/site/main/Main.vue?vue&type=template&id=0a5b299c&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/site/main/Main.vue?vue&type=template&id=0a5b299c&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_0a5b299c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_0a5b299c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_0a5b299c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Main.vue?vue&type=template&id=0a5b299c&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/site/main/Main.vue?vue&type=template&id=0a5b299c&scoped=true&");


/***/ })

}]);
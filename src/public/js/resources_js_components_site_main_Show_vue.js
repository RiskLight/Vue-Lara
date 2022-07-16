"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_site_main_Show_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/site/main/Comments.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/site/main/Comments.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mixins_pagination_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../mixins/pagination.mixin */ "./resources/js/mixins/pagination.mixin.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Comments",
  mixins: [_mixins_pagination_mixin__WEBPACK_IMPORTED_MODULE_0__["default"]],
  data: function data() {
    return {
      description: null,
      comments: null,
      user: null,
      editCommentId: null,
      commentDescription: ''
    };
  },
  mounted: function mounted() {
    this.getComments();
    this.getUser();
  },
  methods: {
    addComment: function addComment() {
      var _this = this;

      var user_id = localStorage.getItem('user_id');
      var film_id = this.$route.params.id;
      axios.post("/api/films/add-comment", {
        description: this.description,
        film_id: film_id,
        user_id: user_id
      }).then(function (res) {
        _this.description = '';

        _this.getComments();
      });
    },
    getComments: function getComments() {
      var _this2 = this;

      axios.get("/api/films/get-comments/".concat(this.$route.params.id)).then(function (res) {
        _this2.comments = res.data;

        _this2.setupPagination(_this2.comments);
      });
    },
    getUser: function getUser() {
      this.user = localStorage.getItem('user_id');
    },
    changeEditCommentId: function changeEditCommentId(id, comment) {
      this.editCommentId = id;
      this.commentDescription = comment;
    },
    isEdit: function isEdit(id) {
      return this.editCommentId === id;
    },
    closeEditComment: function closeEditComment() {
      this.editCommentId = null;
    },
    updateComment: function updateComment(id) {
      var _this3 = this;

      axios.patch("/api/films/update-comment/".concat(id), {
        user_id: this.user,
        description: this.commentDescription,
        film_id: this.$route.params.id
      }).then(function (res) {
        _this3.closeEditComment();

        _this3.getComments();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/site/main/Rate.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/site/main/Rate.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Rate",
  data: function data() {
    return {
      rate: null,
      user_id: null
    };
  },
  mounted: function mounted() {
    this.getRate();
    this.getUser();
  },
  methods: {
    getRate: function getRate() {
      var _this = this;

      axios.get("/api/films/rate/".concat(this.$route.params.id)).then(function (res) {
        _this.rate = res.data;
      });
    },
    postRate: function postRate(value) {
      var _this2 = this;

      var user = localStorage.getItem('user_id');
      var film = this.$route.params.id;
      axios.post("/api/films/post-rate", {
        user_id: user,
        film_id: film,
        points: value
      }).then(function (res) {
        setTimeout(function () {
          _this2.getRate();
        }, 500);
      });
    },
    getUser: function getUser() {
      this.user_id = localStorage.getItem('user_id');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/site/main/Show.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/site/main/Show.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Rate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rate */ "./resources/js/components/site/main/Rate.vue");
/* harmony import */ var _Comments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comments */ "./resources/js/components/site/main/Comments.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Show",
  components: {
    Comments: _Comments__WEBPACK_IMPORTED_MODULE_1__["default"],
    Rate: _Rate__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      user: null
    };
  },
  computed: {
    film: function film() {
      return this.$store.getters.film;
    }
  },
  mounted: function mounted() {
    this.$store.dispatch('getFilm', this.$route.params.id);
    this.getUser();
  },
  methods: {
    addFilmToFavorite: function addFilmToFavorite() {
      axios.post("/api/films/add-favorite", {
        film_id: this.$route.params.id,
        user_id: this.user
      });
    },
    getUser: function getUser() {
      this.user = localStorage.getItem('user_id');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/site/main/Comments.vue?vue&type=template&id=33a3d526&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/site/main/Comments.vue?vue&type=template&id=33a3d526&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "mt-12"
  }, [_c("div", {
    staticClass: "flex mx-auto w-full items-center justify-center shadow-lg mb-4"
  }, [_vm.user ? [_c("div", {
    staticClass: "w-full bg-white rounded-lg px-4 pt-2"
  }, [_c("div", {
    staticClass: "flex flex-wrap -mx-3 mb-6"
  }, [_c("h2", {
    staticClass: "px-4 pt-3 pb-2 text-gray-800 text-lg"
  }, [_vm._v("Добавьте свой бред")]), _vm._v(" "), _c("div", {
    staticClass: "w-full md:w-full px-3 mb-2 mt-2"
  }, [_c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.description,
      expression: "description"
    }],
    staticClass: "bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white",
    attrs: {
      name: "description",
      placeholder: "Бредовый текст"
    },
    domProps: {
      value: _vm.description
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.description = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "w-full md:w-full flex items-start md:w-full px-3"
  }, [_c("div", {
    staticClass: "flex items-start w-1/2 text-gray-700 px-2 mr-auto"
  }, [_c("svg", {
    staticClass: "w-5 h-5 text-gray-600 mr-1",
    attrs: {
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }
  }, [_c("path", {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "-mr-1"
  }, [_c("button", {
    staticClass: "bg-white text-gray-700 font-normal text-sm py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100",
    on: {
      click: _vm.addComment
    }
  }, [_vm._v("\n                                    Добавьте комментарий\n                                ")])])])])])] : _vm._e(), _vm._v(" "), !_vm.user ? [_c("div", [_vm._v("\n                    Оставлять комментарии могут только зарегистрированные пользователи\n                ")])] : _vm._e()], 2), _vm._v(" "), _c("div", {
    staticClass: "w-full mx-auto"
  }, [_vm._l(_vm.items, function (comment) {
    return [_c("div", {
      staticClass: "flex-col mt-6 mx-auto items-center justify-start shadow-lg mt-56 mb-1 w-full"
    }, [_c("div", {
      staticClass: "p-6 flex flex-col justify-start"
    }, [_c("span", {
      staticClass: "text-gray-900 text-xl font-medium mb-2"
    }, [_vm._v(_vm._s(comment.user.name))]), _vm._v(" "), _c("div", {
      staticClass: "break-words"
    }, [_c("p", {
      staticClass: "text-gray-700 text-base text-lg max-w-full mb-4"
    }, [_vm._v("\n                                " + _vm._s(comment.description) + "\n                            ")]), _vm._v(" "), _c("div", {
      "class": _vm.isEdit(comment.id) ? "" : "hidden"
    }, [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.commentDescription,
        expression: "commentDescription"
      }],
      staticClass: "bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white",
      attrs: {
        name: "description",
        placeholder: "Бредовый текст",
        required: ""
      },
      domProps: {
        value: _vm.commentDescription
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.commentDescription = $event.target.value;
        }
      }
    }), _vm._v(" "), _c("button", {
      staticClass: "cursor-pointer inline-block px-6 py-2.5 bg-transparent text-gray-600 underline hover:no-underline text-sm leading-tight rounded focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out outline-none",
      on: {
        click: function click($event) {
          return _vm.updateComment(comment.id);
        }
      }
    }, [_vm._v("\n                                    Обновить\n                                ")]), _vm._v(" "), _c("button", {
      staticClass: "cursor-pointer inline-block px-6 py-2.5 bg-transparent text-gray-600 underline hover:no-underline text-sm leading-tight rounded focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out outline-none",
      on: {
        click: _vm.closeEditComment
      }
    }, [_vm._v("\n                                    Закрыть\n                                ")])])]), _vm._v(" "), _c("p", {
      staticClass: "text-gray-600 text-sm"
    })]), _vm._v(" "), _c("div"), _vm._v(" "), +_vm.user === comment.user.id ? [_c("div", {
      staticClass: "justify-end",
      "class": _vm.isEdit(comment.id) ? "hidden" : ""
    }, [_c("button", {
      staticClass: "cursor-pointer inline-block px-6 py-2.5 bg-transparent text-gray-600 underline hover:no-underline text-sm leading-tight rounded focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out outline-none",
      on: {
        click: function click($event) {
          return _vm.changeEditCommentId(comment.id, comment.description);
        }
      }
    }, [_vm._v("\n                                Редактировать\n                            ")])])] : _vm._e()], 2)];
  }), _vm._v(" "), _vm.items ? [_c("Paginate", {
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
  })] : _vm._e()], 2)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/site/main/Rate.vue?vue&type=template&id=147ec6d9&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/site/main/Rate.vue?vue&type=template&id=147ec6d9&scoped=true& ***!
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

  return _c("div", {
    staticClass: "w-3/4 mx-auto flex items-center"
  }, [_c("div", {
    staticClass: "stars mr-2"
  }, [_c("div", {
    staticClass: "class"
  }, [_c("input", {
    staticClass: "star star-10",
    attrs: {
      disabled: _vm.user_id == null,
      id: "star-10",
      type: "radio",
      name: "star"
    },
    domProps: {
      checked: Math.round(_vm.rate) === 10
    },
    on: {
      click: function click($event) {
        return _vm.postRate(10);
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "star star-10",
    attrs: {
      "for": "star-10"
    }
  }), _vm._v(" "), _c("input", {
    staticClass: "star star-9",
    attrs: {
      disabled: _vm.user_id == null,
      id: "star-9",
      type: "radio",
      name: "star"
    },
    domProps: {
      checked: Math.round(_vm.rate) === 9
    },
    on: {
      click: function click($event) {
        return _vm.postRate(9);
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "star star-9",
    attrs: {
      "for": "star-9"
    }
  }), _vm._v(" "), _c("input", {
    staticClass: "star star-8",
    attrs: {
      disabled: _vm.user_id == null,
      id: "star-8",
      type: "radio",
      name: "star"
    },
    domProps: {
      checked: Math.round(_vm.rate) === 8
    },
    on: {
      click: function click($event) {
        return _vm.postRate(8);
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "star star-8",
    attrs: {
      "for": "star-8"
    }
  }), _vm._v(" "), _c("input", {
    staticClass: "star star-7",
    attrs: {
      disabled: _vm.user_id == null,
      id: "star-7",
      type: "radio",
      name: "star"
    },
    domProps: {
      checked: Math.round(_vm.rate) === 7
    },
    on: {
      click: function click($event) {
        return _vm.postRate(7);
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "star star-7",
    attrs: {
      "for": "star-7"
    }
  }), _vm._v(" "), _c("input", {
    staticClass: "star star-6",
    attrs: {
      disabled: _vm.user_id == null,
      id: "star-6",
      type: "radio",
      name: "star"
    },
    domProps: {
      checked: Math.round(_vm.rate) === 6
    },
    on: {
      click: function click($event) {
        return _vm.postRate(6);
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "star star-6",
    attrs: {
      "for": "star-6"
    }
  }), _vm._v(" "), _c("input", {
    staticClass: "star star-5",
    attrs: {
      disabled: _vm.user_id == null,
      id: "star-5",
      type: "radio",
      name: "star"
    },
    domProps: {
      checked: Math.round(_vm.rate) === 5
    },
    on: {
      click: function click($event) {
        return _vm.postRate(5);
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "star star-5",
    attrs: {
      "for": "star-5"
    }
  }), _vm._v(" "), _c("input", {
    staticClass: "star star-4",
    attrs: {
      disabled: _vm.user_id == null,
      id: "star-4",
      type: "radio",
      name: "star"
    },
    domProps: {
      checked: Math.round(_vm.rate) === 4
    },
    on: {
      click: function click($event) {
        return _vm.postRate(4);
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "star star-4",
    attrs: {
      "for": "star-4"
    }
  }), _vm._v(" "), _c("input", {
    staticClass: "star star-3",
    attrs: {
      disabled: _vm.user_id == null,
      id: "star-3",
      type: "radio",
      name: "star"
    },
    domProps: {
      checked: Math.round(_vm.rate) === 3
    },
    on: {
      click: function click($event) {
        return _vm.postRate(3);
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "star star-3",
    attrs: {
      "for": "star-3"
    }
  }), _vm._v(" "), _c("input", {
    staticClass: "star star-2",
    attrs: {
      disabled: _vm.user_id == null,
      id: "star-2",
      type: "radio",
      name: "star"
    },
    domProps: {
      checked: Math.round(_vm.rate) === 2
    },
    on: {
      click: function click($event) {
        return _vm.postRate(2);
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "star star-2",
    attrs: {
      "for": "star-2"
    }
  }), _vm._v(" "), _c("input", {
    staticClass: "star star-1",
    attrs: {
      disabled: _vm.user_id == null,
      id: "star-1",
      type: "radio",
      name: "star"
    },
    domProps: {
      checked: Math.round(_vm.rate) === 1
    },
    on: {
      click: function click($event) {
        return _vm.postRate(1);
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "star star-1",
    attrs: {
      "for": "star-1"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "flex align-baseline"
  }, [_c("span", {
    staticClass: "text-2xl mx-4"
  }, [_vm._v("Оценка:")]), _vm._v(" "), _c("span", {
    staticClass: "text-3xl font-bold",
    attrs: {
      id: "exact-rating"
    }
  }, [_vm._v(_vm._s(_vm.rate))])])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/site/main/Show.vue?vue&type=template&id=31be0314&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/site/main/Show.vue?vue&type=template&id=31be0314&scoped=true& ***!
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
    staticClass: "text-6xl text-blue-700 text-center mt-12 font-bold"
  }, [_vm._v("\n            " + _vm._s(_vm.film.name) + "\n        ")]), _vm._v(" "), _c("div", {
    staticClass: "text-3xl mt-4 text-blue-500-600 text-center"
  }, [_vm._v("\n            Дата выхода: " + _vm._s(_vm.film.year) + "\n        ")]), _vm._v(" "), _c("div", {
    staticClass: "text-2xl text-blue-500-600 text-center"
  }, [_vm._v("\n            Жанры: "), _vm._l(_vm.film.genres, function (genre, index) {
    return _c("span", {
      staticClass: "lowercase"
    }, [_vm._v(_vm._s(genre.name) + " ")]);
  })], 2), _vm._v(" "), _c("div", {
    staticClass: "flex justify-around mt-12 mb-12"
  }, [_c("iframe", {
    staticClass: "w-3/4",
    attrs: {
      src: _vm.film.film_path,
      height: "600",
      frameborder: "0",
      allowfullscreen: ""
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "flex flex-wrap w-3/4 mx-auto justify-between"
  }, [_c("div", [_c("Rate")], 1), _vm._v(" "), _c("div", [_vm.user ? [_c("div", {
    staticClass: "w-full bg-white rounded-lg px-4 pt-2"
  }, [_c("div", {}, [_c("input", {
    attrs: {
      type: "hidden",
      name: "film_id",
      value: ""
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100",
    on: {
      click: _vm.addFilmToFavorite
    }
  }, [_vm._v("\n                                Добавить в избранное\n                            ")])])])] : _vm._e()], 2)]), _vm._v(" "), _c("div", {
    staticClass: "hidden xl:w-96 text-xs text-center",
    attrs: {
      id: "message"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "text-2xl w-3/4 mx-auto mt-20 flex flex-col justify-around"
  }, [_c("div", [_vm._v(_vm._s(_vm.film.description))]), _vm._v(" "), _c("Comments")], 1)], 1);
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
      pageSize: 2,
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

/***/ "./resources/js/components/site/main/Comments.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/site/main/Comments.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Comments_vue_vue_type_template_id_33a3d526_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comments.vue?vue&type=template&id=33a3d526&scoped=true& */ "./resources/js/components/site/main/Comments.vue?vue&type=template&id=33a3d526&scoped=true&");
/* harmony import */ var _Comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comments.vue?vue&type=script&lang=js& */ "./resources/js/components/site/main/Comments.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Comments_vue_vue_type_template_id_33a3d526_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Comments_vue_vue_type_template_id_33a3d526_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "33a3d526",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/site/main/Comments.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/site/main/Rate.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/site/main/Rate.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Rate_vue_vue_type_template_id_147ec6d9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rate.vue?vue&type=template&id=147ec6d9&scoped=true& */ "./resources/js/components/site/main/Rate.vue?vue&type=template&id=147ec6d9&scoped=true&");
/* harmony import */ var _Rate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rate.vue?vue&type=script&lang=js& */ "./resources/js/components/site/main/Rate.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Rate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Rate_vue_vue_type_template_id_147ec6d9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Rate_vue_vue_type_template_id_147ec6d9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "147ec6d9",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/site/main/Rate.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/site/main/Show.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/site/main/Show.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Show_vue_vue_type_template_id_31be0314_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=31be0314&scoped=true& */ "./resources/js/components/site/main/Show.vue?vue&type=template&id=31be0314&scoped=true&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/components/site/main/Show.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_31be0314_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Show_vue_vue_type_template_id_31be0314_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "31be0314",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/site/main/Show.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/site/main/Comments.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/site/main/Comments.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Comments.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/site/main/Comments.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/site/main/Rate.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/site/main/Rate.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Rate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Rate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/site/main/Rate.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Rate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/site/main/Show.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/site/main/Show.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/site/main/Show.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/site/main/Comments.vue?vue&type=template&id=33a3d526&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/site/main/Comments.vue?vue&type=template&id=33a3d526&scoped=true& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Comments_vue_vue_type_template_id_33a3d526_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Comments_vue_vue_type_template_id_33a3d526_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Comments_vue_vue_type_template_id_33a3d526_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Comments.vue?vue&type=template&id=33a3d526&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/site/main/Comments.vue?vue&type=template&id=33a3d526&scoped=true&");


/***/ }),

/***/ "./resources/js/components/site/main/Rate.vue?vue&type=template&id=147ec6d9&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/site/main/Rate.vue?vue&type=template&id=147ec6d9&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Rate_vue_vue_type_template_id_147ec6d9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Rate_vue_vue_type_template_id_147ec6d9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Rate_vue_vue_type_template_id_147ec6d9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Rate.vue?vue&type=template&id=147ec6d9&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/site/main/Rate.vue?vue&type=template&id=147ec6d9&scoped=true&");


/***/ }),

/***/ "./resources/js/components/site/main/Show.vue?vue&type=template&id=31be0314&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/site/main/Show.vue?vue&type=template&id=31be0314&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_31be0314_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_31be0314_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_31be0314_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Show.vue?vue&type=template&id=31be0314&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/site/main/Show.vue?vue&type=template&id=31be0314&scoped=true&");


/***/ })

}]);
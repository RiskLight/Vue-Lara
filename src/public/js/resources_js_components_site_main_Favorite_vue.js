"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_site_main_Favorite_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/site/main/Favorite.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/site/main/Favorite.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mixins_pagination_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../mixins/pagination.mixin */ "./resources/js/mixins/pagination.mixin.js");
/* harmony import */ var _service_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/api */ "./resources/js/service/api.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Favorite",
  mixins: [_mixins_pagination_mixin__WEBPACK_IMPORTED_MODULE_0__["default"]],
  data: function data() {
    return {
      films: [],
      user: null
    };
  },
  mounted: function mounted() {
    this.getUser();
    this.getFilmsUser();
  },
  methods: {
    getFilmsUser: function getFilmsUser() {
      var _this = this;

      _service_api__WEBPACK_IMPORTED_MODULE_1__.axiosInstance.get("films/favorite/".concat(this.user)).then(function (res) {
        _this.films = res.data;

        _this.setupPagination(_this.films);
      });
    },
    getUser: function getUser() {
      this.user = localStorage.getItem('user_id');
    },
    deleteFavoriteFilm: function deleteFavoriteFilm(id) {
      var _this2 = this;

      _service_api__WEBPACK_IMPORTED_MODULE_1__.axiosInstance["delete"]("films/delete-favorite/".concat(id)).then(function (res) {
        _this2.getFilmsUser();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/site/main/Favorite.vue?vue&type=template&id=55ec25d6&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/site/main/Favorite.vue?vue&type=template&id=55ec25d6&scoped=true& ***!
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

  return _c("div", [_c("navbar"), _vm._v(" "), _c("div", {
    staticClass: "h-full"
  }, [_c("div", {
    staticClass: "grid xl:grid-cols-6 gap-12 m-12"
  }, _vm._l(_vm.items, function (film) {
    return _c("div", {
      staticClass: "flex flex-col justify-around"
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
        src: "../../../storage/".concat(film.img_path),
        alt: film.name
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "p-6"
    }, [_c("p", {
      staticClass: "text-gray-900 text-sm font-medium mb-2"
    }, [_vm._v(_vm._s(film.name))])]), _vm._v(" "), _c("div", {
      staticClass: "flex justify-center mb-2"
    }, [_c("button", {
      staticClass: "px-6 text-sm py-2.5 bg-blue-600 text-white leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out",
      on: {
        click: function click($event) {
          return _vm.deleteFavoriteFilm(film.id);
        }
      }
    }, [_vm._v("\n                                ??????????????\n                            ")])])], 1)]);
  }), 0)]), _vm._v(" "), !_vm.items ? [_c("div", {
    staticClass: "w-3/4 text-center mx-auto h-screen text-6xl text-red-700"
  }, [_vm._v("\n                ?? ?????? ?????? ?????? ?????????????????? ??????????????\n            ")])] : _vm._e(), _vm._v(" "), _vm.items ? [_c("Paginate", {
    attrs: {
      "page-count": _vm.pageCount,
      "click-handler": _vm.pageChangeHandler,
      "prev-text": "??????????",
      "next-text": "????????????",
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
  })] : _vm._e(), _vm._v(" "), _c("foot")], 2);
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

/***/ "./resources/js/components/site/main/Favorite.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/site/main/Favorite.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Favorite_vue_vue_type_template_id_55ec25d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Favorite.vue?vue&type=template&id=55ec25d6&scoped=true& */ "./resources/js/components/site/main/Favorite.vue?vue&type=template&id=55ec25d6&scoped=true&");
/* harmony import */ var _Favorite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Favorite.vue?vue&type=script&lang=js& */ "./resources/js/components/site/main/Favorite.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Favorite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Favorite_vue_vue_type_template_id_55ec25d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Favorite_vue_vue_type_template_id_55ec25d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "55ec25d6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/site/main/Favorite.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/site/main/Favorite.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/site/main/Favorite.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Favorite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Favorite.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/site/main/Favorite.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Favorite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/site/main/Favorite.vue?vue&type=template&id=55ec25d6&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/site/main/Favorite.vue?vue&type=template&id=55ec25d6&scoped=true& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Favorite_vue_vue_type_template_id_55ec25d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Favorite_vue_vue_type_template_id_55ec25d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Favorite_vue_vue_type_template_id_55ec25d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Favorite.vue?vue&type=template&id=55ec25d6&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/site/main/Favorite.vue?vue&type=template&id=55ec25d6&scoped=true&");


/***/ })

}]);
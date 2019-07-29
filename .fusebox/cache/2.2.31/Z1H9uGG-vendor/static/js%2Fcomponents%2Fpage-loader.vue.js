module.exports = { contents: "var _p = {};\nvar _v = function(exports){\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.default = {\n    name: 'page-loader',\n    props: ['text'],\n    data: function () {\n        return {};\n    },\n    computed: {\n        msg: function () { return this.$store.state.pageLoader.msg; },\n        isShown: function () { return this.$store.state.pageLoader.shown; }\n    },\n    mounted: function () {\n        this.$store.commit('pageLoader/msgChange', this.text);\n    }\n};\n\n};\n_p.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{\"name\":\"page-loader\"}},[(_vm.isShown)?_c('div',{staticClass:\"page-loader\"},[_c('i'),_c('span',[_vm._v(_vm._s(_vm.msg))])]):_vm._e()])}\n_p.staticRenderFns = [  ];\nvar _e = {}; _v(_e); Object.assign(_e.default.options||_e.default, _p)\nmodule.exports = _e\n    ",
dependencies: [],
sourceMap: {},
headerContent: undefined,
mtime: 1548128996000,
devLibsRequired : undefined
};
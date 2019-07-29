module.exports = { contents: "var _p = {};\nvar _v = function(exports){\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.default = {\n    name: 'toggle',\n    props: ['value', 'desc'],\n    data: function () {\n        return {};\n    },\n    methods: {\n        changeToggle: function () {\n            this.$emit('input', !this.value);\n        }\n    }\n};\n\n};\n_p.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"toggle\",class:{ \"is-active\": _vm.value },on:{\"click\":_vm.changeToggle}},[_vm._m(0),_c('div',{staticClass:\"toggle-text\"},[_vm._v(_vm._s(_vm.desc))])])}\n_p.staticRenderFns = [ function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"toggle-container\"},[_c('div',{staticClass:\"toggle-pin\"})])} ];\nvar _e = {}; _v(_e); Object.assign(_e.default.options||_e.default, _p)\nmodule.exports = _e\n    ",
dependencies: [],
sourceMap: {},
headerContent: undefined,
mtime: 1548128996000,
devLibsRequired : undefined
};
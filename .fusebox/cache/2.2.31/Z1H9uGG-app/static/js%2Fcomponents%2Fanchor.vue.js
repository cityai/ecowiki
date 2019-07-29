module.exports = { contents: "var _p = {};\nvar _v = function(exports){\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.default = {\n    name: 'anchor',\n    data: function () {\n        return {};\n    },\n    computed: {\n        anchorURL: function () {\n            return window.location.href.split('#')[0] + '#' + this.$store.state.anchor.hash;\n        },\n        isShown: function () {\n            return this.$store.state.anchor.shown;\n        }\n    },\n    methods: {\n        cancel: function () {\n            this.$store.dispatch('anchor/close');\n        },\n        clipboardSuccess: function () {\n            this.$store.dispatch('alert', {\n                style: 'blue',\n                icon: 'business_notes',\n                msg: this.$t('modal.anchorsuccess')\n            });\n            this.$store.dispatch('anchor/close');\n        },\n        clipboardError: function () {\n            this.$store.dispatch('alert', {\n                style: 'red',\n                icon: 'business_notes',\n                msg: this.$t('modal.anchorerror')\n            });\n            this.$refs.anchorURLinput.select();\n        }\n    }\n};\n\n};\n_p.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{\"duration\":400}},[_c('div',{directives:[{name:\"show\",rawName:\"v-show\",value:(_vm.isShown),expression:\"isShown\"}],staticClass:\"modal\"},[_c('transition',{attrs:{\"name\":\"modal-background\"}},[_c('div',{directives:[{name:\"show\",rawName:\"v-show\",value:(_vm.isShown),expression:\"isShown\"}],staticClass:\"modal-background\"})]),_c('div',{staticClass:\"modal-container\"},[_c('transition',{attrs:{\"name\":\"modal-content\"}},[_c('div',{directives:[{name:\"show\",rawName:\"v-show\",value:(_vm.isShown),expression:\"isShown\"}],staticClass:\"modal-content\"},[_c('header',{staticClass:\"is-blue\"},[_c('span',[_vm._v(_vm._s(_vm.$t('modal.anchortitle')))])]),_c('section',[_c('p',{staticClass:\"control is-fullwidth\"},[_c('input',{directives:[{name:\"model\",rawName:\"v-model\",value:(_vm.anchorURL),expression:\"anchorURL\"}],ref:\"anchorURLinput\",staticClass:\"input\",attrs:{\"type\":\"text\"},domProps:{\"value\":(_vm.anchorURL)},on:{\"input\":function($event){if($event.target.composing){ return; }_vm.anchorURL=$event.target.value}}})])]),_c('footer',[_c('a',{staticClass:\"button is-grey is-outlined\",on:{\"click\":_vm.cancel}},[_vm._v(_vm._s(_vm.$t('modal.discard')))]),_c('a',{directives:[{name:\"clipboard\",rawName:\"v-clipboard\",value:(_vm.anchorURL),expression:\"anchorURL\"}],staticClass:\"button is-blue\",on:{\"success\":_vm.clipboardSuccess,\"error\":_vm.clipboardError}},[_vm._v(_vm._s(_vm.$t('modal.copyclipboard')))])])])])],1)],1)])}\n_p.staticRenderFns = [  ];\nvar _e = {}; _v(_e); Object.assign(_e.default.options||_e.default, _p)\nmodule.exports = _e\n    ",
dependencies: [],
sourceMap: {},
headerContent: undefined,
mtime: 1548128996000,
devLibsRequired : undefined
};
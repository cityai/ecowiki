module.exports = { contents: "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n  namespaced: true,\n  state: {\n    shown: false,\n    hash: ''\n  },\n  getters: {},\n  mutations: {\n    anchorChange: function anchorChange(state, opts) {\n      state.shown = opts.shown === true;\n      state.hash = opts.hash || '';\n    }\n  },\n  actions: {\n    open: function open(_ref, hash) {\n      var commit = _ref.commit;\n\n      console.info('MIGUEL!');\n      commit('anchorChange', { shown: true, hash: hash });\n    },\n    close: function close(_ref2) {\n      var commit = _ref2.commit;\n\n      commit('anchorChange', { shown: false });\n    }\n  }\n};",
dependencies: [],
sourceMap: {},
headerContent: undefined,
mtime: 1548128996000,
devLibsRequired : undefined
};
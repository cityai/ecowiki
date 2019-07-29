module.exports = { contents: "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n  namespaced: true,\n  state: {\n    shown: false\n  },\n  getters: {},\n  mutations: {\n    shownChange: function shownChange(state, shownState) {\n      state.shown = shownState;\n    }\n  },\n  actions: {\n    open: function open(_ref) {\n      var commit = _ref.commit;\n\n      commit('shownChange', true);\n      wikijs.$emit('editorVideo/init');\n    },\n    close: function close(_ref2) {\n      var commit = _ref2.commit;\n      commit('shownChange', false);\n    }\n  }\n};",
dependencies: [],
sourceMap: {},
headerContent: undefined,
mtime: 1548128996000,
devLibsRequired : undefined
};
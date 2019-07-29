module.exports = { contents: "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n  namespaced: true,\n  state: {\n    shown: true,\n    msg: 'Loading...'\n  },\n  getters: {},\n  mutations: {\n    shownChange: function shownChange(state, shownState) {\n      state.shown = shownState;\n    },\n    msgChange: function msgChange(state, newText) {\n      state.msg = newText;\n    }\n  },\n  actions: {\n    complete: function complete(_ref) {\n      var commit = _ref.commit;\n      commit('shownChange', false);\n    }\n  }\n};",
dependencies: [],
sourceMap: {},
headerContent: undefined,
mtime: 1548128996000,
devLibsRequired : undefined
};
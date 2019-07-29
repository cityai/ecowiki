module.exports = { contents: "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n  namespaced: true,\n  state: {\n    busy: false,\n    insertContent: ''\n  },\n  getters: {},\n  mutations: {\n    busyChange: function busyChange(state, busyState) {\n      state.shown = busyState;\n    },\n    insertContentChange: function insertContentChange(state, newContent) {\n      state.insertContent = newContent;\n    }\n  },\n  actions: {\n    busyStart: function busyStart(_ref) {\n      var commit = _ref.commit;\n      commit('busyChange', true);\n    },\n    busyStop: function busyStop(_ref2) {\n      var commit = _ref2.commit;\n      commit('busyChange', false);\n    },\n    insert: function insert(_ref3, content) {\n      var commit = _ref3.commit;\n\n      commit('insertContentChange', content);\n      wikijs.$emit('editor/insert');\n    }\n  }\n};",
dependencies: [],
sourceMap: {},
headerContent: undefined,
mtime: 1548128996000,
devLibsRequired : undefined
};
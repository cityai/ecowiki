module.exports = { contents: "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar helpers = {\n  common: require('./common'),\n  form: require('./form'),\n  pages: require('./pages')\n};\n\nexports.default = {\n  install: function install(Vue) {\n    Vue.$helpers = helpers;\n    Object.defineProperties(Vue.prototype, {\n      $helpers: {\n        get: function get() {\n          return helpers;\n        }\n      }\n    });\n  }\n};",
dependencies: ["./common","./form","./pages"],
sourceMap: {},
headerContent: undefined,
mtime: 1548128996000,
devLibsRequired : undefined
};
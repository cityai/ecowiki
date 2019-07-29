module.exports = { contents: "'use strict';\n\nvar logic = document.documentElement.dataset.logic;\n\nswitch (logic) {\n  case 'error':\n    require('./scss/error.scss');\n    break;\n  case 'login':\n    require('./scss/login.scss');\n    require('./js/login.js');\n    break;\n  default:\n    require('./scss/app.scss');\n    require('./js/app.js');\n    break;\n}",
dependencies: ["./scss/error.scss","./scss/login.scss","./js/login.js","./scss/app.scss","./js/app.js"],
sourceMap: {},
headerContent: undefined,
mtime: 1548128996000,
devLibsRequired : undefined
};
module.exports = { contents: "'use strict';\n\nvar _filesize2 = require('filesize.js');\n\nvar _filesize3 = _interopRequireDefault(_filesize2);\n\nvar _toUpper = require('lodash/toUpper');\n\nvar _toUpper2 = _interopRequireDefault(_toUpper);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = {\n  filesize: function filesize(rawSize) {\n    return (0, _toUpper2.default)((0, _filesize3.default)(rawSize));\n  }\n};",
dependencies: ["filesize.js","lodash/toUpper"],
sourceMap: {},
headerContent: undefined,
mtime: 1548128996000,
devLibsRequired : undefined
};
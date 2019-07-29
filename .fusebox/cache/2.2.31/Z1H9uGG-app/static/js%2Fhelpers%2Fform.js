module.exports = { contents: "'use strict';\n\nmodule.exports = {\n  setInputSelection: function setInputSelection(input, startPos, endPos) {\n    input.focus();\n    if (typeof input.selectionStart !== 'undefined') {\n      input.selectionStart = startPos;\n      input.selectionEnd = endPos;\n    } else if (document.selection && document.selection.createRange) {\n      input.select();\n      var range = document.selection.createRange();\n      range.collapse(true);\n      range.moveEnd('character', endPos);\n      range.moveStart('character', startPos);\n      range.select();\n    }\n  }\n};",
dependencies: [],
sourceMap: {},
headerContent: undefined,
mtime: 1548128996000,
devLibsRequired : undefined
};
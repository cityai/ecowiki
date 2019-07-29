module.exports = { contents: "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n  name: 'source-view',\n  data: function data() {\n    return {};\n  },\n  mounted: function mounted() {\n    var self = this;\n    FuseBox.import('/js/ace/ace.js', function (ace) {\n      var scEditor = ace.edit('source-display');\n      scEditor.setTheme('ace/theme/dawn');\n      scEditor.getSession().setMode('ace/mode/markdown');\n      scEditor.setOption('fontSize', '14px');\n      scEditor.setOption('hScrollBarAlwaysVisible', false);\n      scEditor.setOption('wrap', true);\n      scEditor.setOption('showPrintMargin', false);\n      scEditor.setReadOnly(true);\n      scEditor.renderer.updateFull();\n      scEditor.renderer.on('afterRender', function () {\n        self.$store.dispatch('pageLoader/complete');\n      });\n    });\n  }\n};",
dependencies: [],
sourceMap: {},
headerContent: undefined,
mtime: 1548128996000,
devLibsRequired : undefined
};
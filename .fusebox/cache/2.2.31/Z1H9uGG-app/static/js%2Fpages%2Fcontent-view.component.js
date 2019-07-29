module.exports = { contents: "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n  name: 'content-view',\n  data: function data() {\n    return {};\n  },\n  mounted: function mounted() {\n    var self = this;\n    $('a.toc-anchor').each(function (i, elm) {\n      var hashText = $(elm).attr('href').slice(1);\n      $(elm).on('click', function (ev) {\n        ev.stopImmediatePropagation();\n        self.$store.dispatch('anchor/open', hashText);\n        return false;\n      });\n    });\n  }\n};",
dependencies: [],
sourceMap: {},
headerContent: undefined,
mtime: 1548128996000,
devLibsRequired : undefined
};
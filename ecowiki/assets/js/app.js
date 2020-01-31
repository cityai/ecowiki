(function(FuseBox){FuseBox.$fuse$=FuseBox;
var __process_env__ = {"NODE_ENV":"development"};
FuseBox.pkg("default", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

'use strict';

var logic = document.documentElement.dataset.logic;

switch (logic) {
  case 'error':
    require('./scss/error.scss');
    break;
  case 'login':
    require('./scss/login.scss');
    require('./js/login.js');
    break;
  default:
    require('./scss/app.scss');
    require('./js/app.js');
    break;
}
});
___scope___.file("scss/error.scss", function(exports, require, module, __filename, __dirname){

@charset "utf-8";

$primary: 'indigo';

@import "base/variables";
@import "base/colors";
@import "base/reset";
@import "base/mixins";
@import "base/fonts";
@import "base/base";

@import "libs/animate";

@import 'components/button';
@import 'components/grid';
@import 'components/typography';

@import 'pages/error';

});
___scope___.file("scss/login.scss", function(exports, require, module, __filename, __dirname){

@charset "utf-8";

$primary: 'indigo';

@import "base/variables";
@import "base/colors";
@import "base/reset";
@import "base/mixins";
@import "base/fonts";
@import "base/base";

@import "libs/animate";
@import 'pages/login';

});
___scope___.file("js/login.js", function(exports, require, module, __filename, __dirname){

'use strict';

$(function () {
  $('#login-user').focus();
});
});
___scope___.file("scss/app.scss", function(exports, require, module, __filename, __dirname){

@charset "utf-8";

$primary: 'indigo';

@import "base/variables";
@import "base/colors";
@import "base/reset";
@import "base/mixins";
@import "base/fonts";
@import "base/base";

@import "libs/animate";

@import 'components/alert';
@import 'components/button';
@import 'components/collapsable-nav';
@import 'components/color-picker';
@import 'components/footer';
@import 'components/form';
@import 'components/grid';
@import 'components/hero';
@import 'components/history';
@import 'components/markdown-content';
@import 'components/modal';
@import 'components/nav';
@import 'components/panel';
@import 'components/search';
@import 'components/sidebar';
@import 'components/table';
@import 'components/toggle';
@import 'components/typography';

@import 'libs/nucleo-icons';
@import 'libs/twemoji-awesome';
@import 'libs/jquery-contextmenu';
@import 'node_modules/highlight.js/styles/atom-one-dark';
@import 'node_modules/simplemde/dist/simplemde.min';
@import 'node_modules/diff2html/dist/diff2html.min';

@import 'components/editor';

@import 'layout/_header';
@import 'layout/_loader';
@import 'layout/_rtl';

@import 'pages/_welcome';

@import 'base/print';

});
___scope___.file("js/app.js", function(exports, require, module, __filename, __dirname){

'use strict';

/* global $, siteRoot */
/* eslint-disable no-new */

var _vue = require("vue/dist/vue.js");

var _vue2 = _interopRequireDefault(_vue);

var _vueResource = require("vue-resource/dist/vue-resource.js");

var _vueResource2 = _interopRequireDefault(_vueResource);

var _vueClipboards = require("vue-clipboards");

var _vueClipboards2 = _interopRequireDefault(_vueClipboards);

var _vueLodash = require("vue-lodash/dist/vue-lodash.min.js");

var _vueLodash2 = _interopRequireDefault(_vueLodash);

var _store = require("./store");

var _store2 = _interopRequireDefault(_store);

var _socketIoClient = require("socket.io-client/dist/socket.io.js");

var _socketIoClient2 = _interopRequireDefault(_socketIoClient);

var _i18next = require("i18next");

var _i18next2 = _interopRequireDefault(_i18next);

var _i18nextXhrBackend = require("i18next-xhr-backend");

var _i18nextXhrBackend2 = _interopRequireDefault(_i18nextXhrBackend);

var _vueI18next = require("@panter/vue-i18next");

var _vueI18next2 = _interopRequireDefault(_vueI18next);

require("jquery-contextmenu");

require("jquery-simple-upload");

require("jquery-smooth-scroll");

require("jquery-sticky");

var _helpers = require("./helpers");

var _helpers2 = _interopRequireDefault(_helpers);

var _lodash = require("./helpers/lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _alert = require("./components/alert.vue");

var _alert2 = _interopRequireDefault(_alert);

var _anchor = require("./components/anchor.vue");

var _anchor2 = _interopRequireDefault(_anchor);

var _colorPicker = require("./components/color-picker.vue");

var _colorPicker2 = _interopRequireDefault(_colorPicker);

var _editorCodeblock = require("./components/editor-codeblock.vue");

var _editorCodeblock2 = _interopRequireDefault(_editorCodeblock);

var _editorFile = require("./components/editor-file.vue");

var _editorFile2 = _interopRequireDefault(_editorFile);

var _editorVideo = require("./components/editor-video.vue");

var _editorVideo2 = _interopRequireDefault(_editorVideo);

var _history = require("./components/history.vue");

var _history2 = _interopRequireDefault(_history);

var _loadingSpinner = require("./components/loading-spinner.vue");

var _loadingSpinner2 = _interopRequireDefault(_loadingSpinner);

var _modalCreatePage = require("./components/modal-create-page.vue");

var _modalCreatePage2 = _interopRequireDefault(_modalCreatePage);

var _modalCreateUser = require("./components/modal-create-user.vue");

var _modalCreateUser2 = _interopRequireDefault(_modalCreateUser);

var _modalDeletePage = require("./components/modal-delete-page.vue");

var _modalDeletePage2 = _interopRequireDefault(_modalDeletePage);

var _modalDeleteUser = require("./components/modal-delete-user.vue");

var _modalDeleteUser2 = _interopRequireDefault(_modalDeleteUser);

var _modalDiscardPage = require("./components/modal-discard-page.vue");

var _modalDiscardPage2 = _interopRequireDefault(_modalDiscardPage);

var _modalMovePage = require("./components/modal-move-page.vue");

var _modalMovePage2 = _interopRequireDefault(_modalMovePage);

var _modalProfile2fa = require("./components/modal-profile-2fa.vue");

var _modalProfile2fa2 = _interopRequireDefault(_modalProfile2fa);

var _modalUpgradeSystem = require("./components/modal-upgrade-system.vue");

var _modalUpgradeSystem2 = _interopRequireDefault(_modalUpgradeSystem);

var _pageLoader = require("./components/page-loader.vue");

var _pageLoader2 = _interopRequireDefault(_pageLoader);

var _search = require("./components/search.vue");

var _search2 = _interopRequireDefault(_search);

var _toggle = require("./components/toggle.vue");

var _toggle2 = _interopRequireDefault(_toggle);

var _tree = require("./components/tree.vue");

var _tree2 = _interopRequireDefault(_tree);

var _adminEditUserComponent = require("./pages/admin-edit-user.component.js");

var _adminEditUserComponent2 = _interopRequireDefault(_adminEditUserComponent);

var _adminProfileComponent = require("./pages/admin-profile.component.js");

var _adminProfileComponent2 = _interopRequireDefault(_adminProfileComponent);

var _adminSettingsComponent = require("./pages/admin-settings.component.js");

var _adminSettingsComponent2 = _interopRequireDefault(_adminSettingsComponent);

var _adminThemeComponent = require("./pages/admin-theme.component.js");

var _adminThemeComponent2 = _interopRequireDefault(_adminThemeComponent);

var _contentViewComponent = require("./pages/content-view.component.js");

var _contentViewComponent2 = _interopRequireDefault(_contentViewComponent);

var _editorComponent = require("./components/editor.component.js");

var _editorComponent2 = _interopRequireDefault(_editorComponent);

var _sourceViewComponent = require("./pages/source-view.component.js");

var _sourceViewComponent2 = _interopRequireDefault(_sourceViewComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ====================================
// Initialize Vue Modules
// ====================================

_vue2.default.use(_vueResource2.default);

// ====================================
// Load Vue Components
// ====================================

// ====================================
// Load Helpers
// ====================================

_vue2.default.use(_vueClipboards2.default);
_vue2.default.use(_vueI18next2.default);
_vue2.default.use(_vueLodash2.default, _lodash2.default);
_vue2.default.use(_helpers2.default);

// ====================================
// Register Vue Components
// ====================================

_vue2.default.component('alert', _alert2.default);
_vue2.default.component('adminEditUser', _adminEditUserComponent2.default);
_vue2.default.component('adminProfile', _adminProfileComponent2.default);
_vue2.default.component('adminSettings', _adminSettingsComponent2.default);
_vue2.default.component('adminTheme', _adminThemeComponent2.default);
_vue2.default.component('anchor', _anchor2.default);
_vue2.default.component('colorPicker', _colorPicker2.default);
_vue2.default.component('contentView', _contentViewComponent2.default);
_vue2.default.component('editor', _editorComponent2.default);
_vue2.default.component('editorCodeblock', _editorCodeblock2.default);
_vue2.default.component('editorFile', _editorFile2.default);
_vue2.default.component('editorVideo', _editorVideo2.default);
_vue2.default.component('history', _history2.default);
_vue2.default.component('loadingSpinner', _loadingSpinner2.default);
_vue2.default.component('modalCreatePage', _modalCreatePage2.default);
_vue2.default.component('modalCreateUser', _modalCreateUser2.default);
_vue2.default.component('modalDeletePage', _modalDeletePage2.default);
_vue2.default.component('modalDeleteUser', _modalDeleteUser2.default);
_vue2.default.component('modalDiscardPage', _modalDiscardPage2.default);
_vue2.default.component('modalMovePage', _modalMovePage2.default);
_vue2.default.component('modalProfile2fa', _modalProfile2fa2.default);
_vue2.default.component('modalUpgradeSystem', _modalUpgradeSystem2.default);
_vue2.default.component('pageLoader', _pageLoader2.default);
_vue2.default.component('search', _search2.default);
_vue2.default.component('sourceView', _sourceViewComponent2.default);
_vue2.default.component('toggle', _toggle2.default);
_vue2.default.component('tree', _tree2.default);

// ====================================
// Load Localization strings
// ====================================

_i18next2.default.use(_i18nextXhrBackend2.default).init({
  backend: {
    loadPath: siteRoot + '/js/i18n/{{lng}}.json'
  },
  lng: siteLang,
  fallbackLng: siteLang
});

$(function () {
  // ====================================
  // Notifications
  // ====================================

  $(window).bind('beforeunload', function () {
    _store2.default.dispatch('startLoading');
  });
  $(document).ajaxSend(function () {
    _store2.default.dispatch('startLoading');
  }).ajaxComplete(function () {
    _store2.default.dispatch('stopLoading');
  });

  // ====================================
  // Establish WebSocket connection
  // ====================================

  var socket = (0, _socketIoClient2.default)(window.location.origin);
  window.socket = socket;

  // ====================================
  // Bootstrap Vue
  // ====================================

  var i18n = new _vueI18next2.default(_i18next2.default);
  window.wikijs = new _vue2.default({
    mixins: [_helpers2.default],
    components: {},
    store: _store2.default,
    i18n: i18n,
    el: '#root',
    methods: {
      changeTheme: function changeTheme(opts) {
        this.$el.className = "has-stickynav is-primary-" + opts.primary + " is-alternate-" + opts.alt;
        this.$refs.header.className = "nav is-" + opts.primary;
        this.$refs.footer.className = "footer is-" + opts.footer;
      }
    },
    mounted: function mounted() {
      $('a:not(.toc-anchor)').smoothScroll({ speed: 500, offset: -50 });
      $('#header').sticky({ topSpacing: 0 });
      $('.sidebar-pagecontents').sticky({ topSpacing: 15, bottomSpacing: 75 });
    }
  });
});
});
___scope___.file("js/store/index.js", function(exports, require, module, __filename, __dirname){

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require("vue/dist/vue.js");

var _vue2 = _interopRequireDefault(_vue);

var _vuex = require("vuex");

var _vuex2 = _interopRequireDefault(_vuex);

var _alert = require("./modules/alert");

var _alert2 = _interopRequireDefault(_alert);

var _anchor = require("./modules/anchor");

var _anchor2 = _interopRequireDefault(_anchor);

var _editor = require("./modules/editor");

var _editor2 = _interopRequireDefault(_editor);

var _editorCodeblock = require("./modules/editor-codeblock");

var _editorCodeblock2 = _interopRequireDefault(_editorCodeblock);

var _editorFile = require("./modules/editor-file");

var _editorFile2 = _interopRequireDefault(_editorFile);

var _editorVideo = require("./modules/editor-video");

var _editorVideo2 = _interopRequireDefault(_editorVideo);

var _modalCreatePage = require("./modules/modal-create-page");

var _modalCreatePage2 = _interopRequireDefault(_modalCreatePage);

var _modalCreateUser = require("./modules/modal-create-user");

var _modalCreateUser2 = _interopRequireDefault(_modalCreateUser);

var _modalDeleteUser = require("./modules/modal-delete-user");

var _modalDeleteUser2 = _interopRequireDefault(_modalDeleteUser);

var _modalDeletePage = require("./modules/modal-delete-page");

var _modalDeletePage2 = _interopRequireDefault(_modalDeletePage);

var _modalDiscardPage = require("./modules/modal-discard-page");

var _modalDiscardPage2 = _interopRequireDefault(_modalDiscardPage);

var _modalMovePage = require("./modules/modal-move-page");

var _modalMovePage2 = _interopRequireDefault(_modalMovePage);

var _modalProfile2fa = require("./modules/modal-profile-2fa");

var _modalProfile2fa2 = _interopRequireDefault(_modalProfile2fa);

var _modalUpgradeSystem = require("./modules/modal-upgrade-system");

var _modalUpgradeSystem2 = _interopRequireDefault(_modalUpgradeSystem);

var _pageLoader = require("./modules/page-loader");

var _pageLoader2 = _interopRequireDefault(_pageLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vuex2.default);

exports.default = new _vuex2.default.Store({
  state: {
    loading: false
  },
  mutations: {
    loadingChange: function loadingChange(state, loadingState) {
      state.loading = loadingState;
    }
  },
  actions: {
    startLoading: function startLoading(_ref) {
      var commit = _ref.commit;
      commit('loadingChange', true);
    },
    stopLoading: function stopLoading(_ref2) {
      var commit = _ref2.commit;
      commit('loadingChange', false);
    }
  },
  getters: {},
  modules: {
    alert: _alert2.default,
    anchor: _anchor2.default,
    editor: _editor2.default,
    editorCodeblock: _editorCodeblock2.default,
    editorFile: _editorFile2.default,
    editorVideo: _editorVideo2.default,
    modalCreatePage: _modalCreatePage2.default,
    modalCreateUser: _modalCreateUser2.default,
    modalDeletePage: _modalDeletePage2.default,
    modalDeleteUser: _modalDeleteUser2.default,
    modalDiscardPage: _modalDiscardPage2.default,
    modalMovePage: _modalMovePage2.default,
    modalProfile2fa: _modalProfile2fa2.default,
    modalUpgradeSystem: _modalUpgradeSystem2.default,
    pageLoader: _pageLoader2.default
  }
});
});
___scope___.file("js/store/modules/alert.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _debounce = require('lodash/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  state: {
    shown: false,
    style: 'green',
    icon: 'check',
    msg: ''
  },
  getters: {},
  mutations: {
    alertChange: function alertChange(state, opts) {
      state.shown = opts.shown === true;
      state.style = opts.style || 'green';
      state.icon = opts.icon || 'check';
      state.msg = opts.msg || '';
    }
  },
  actions: {
    alert: function alert(_ref, opts) {
      var commit = _ref.commit,
          dispatch = _ref.dispatch;

      opts.shown = true;
      commit('alertChange', opts);
      dispatch('alertDismiss');
    },

    alertDismiss: (0, _debounce2.default)(function (_ref2) {
      var commit = _ref2.commit;

      var opts = { shown: false };
      commit('alertChange', opts);
    }, 3000)
  }
};
});
___scope___.file("js/store/modules/anchor.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  namespaced: true,
  state: {
    shown: false,
    hash: ''
  },
  getters: {},
  mutations: {
    anchorChange: function anchorChange(state, opts) {
      state.shown = opts.shown === true;
      state.hash = opts.hash || '';
    }
  },
  actions: {
    open: function open(_ref, hash) {
      var commit = _ref.commit;

      console.info('MIGUEL!');
      commit('anchorChange', { shown: true, hash: hash });
    },
    close: function close(_ref2) {
      var commit = _ref2.commit;

      commit('anchorChange', { shown: false });
    }
  }
};
});
___scope___.file("js/store/modules/editor.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  namespaced: true,
  state: {
    busy: false,
    insertContent: ''
  },
  getters: {},
  mutations: {
    busyChange: function busyChange(state, busyState) {
      state.shown = busyState;
    },
    insertContentChange: function insertContentChange(state, newContent) {
      state.insertContent = newContent;
    }
  },
  actions: {
    busyStart: function busyStart(_ref) {
      var commit = _ref.commit;
      commit('busyChange', true);
    },
    busyStop: function busyStop(_ref2) {
      var commit = _ref2.commit;
      commit('busyChange', false);
    },
    insert: function insert(_ref3, content) {
      var commit = _ref3.commit;

      commit('insertContentChange', content);
      wikijs.$emit('editor/insert');
      console.log('Hello World');
    }
  }
};
});
___scope___.file("js/store/modules/editor-codeblock.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  namespaced: true,
  state: {
    shown: false,
    content: ''
  },
  getters: {},
  mutations: {
    shownChange: function shownChange(state, shownState) {
      state.shown = shownState;
    },
    contentChange: function contentChange(state, newContent) {
      state.content = newContent;
    }
  },
  actions: {
    open: function open(_ref, opts) {
      var commit = _ref.commit;

      commit('shownChange', true);
      commit('contentChange', opts.initialContent || '');
      wikijs.$emit('editorCodeblock/init');
    },
    close: function close(_ref2) {
      var commit = _ref2.commit;
      commit('shownChange', false);
    }
  }
};
});
___scope___.file("js/store/modules/editor-file.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  namespaced: true,
  state: {
    shown: false,
    mode: 'image'
  },
  getters: {},
  mutations: {
    shownChange: function shownChange(state, shownState) {
      state.shown = shownState;
    },
    modeChange: function modeChange(state, modeState) {
      state.mode = modeState;
    }
  },
  actions: {
    open: function open(_ref, opts) {
      var commit = _ref.commit;

      commit('shownChange', true);
      commit('modeChange', opts.mode);
      wikijs.$emit('editorFile/init');
    },
    close: function close(_ref2) {
      var commit = _ref2.commit;
      commit('shownChange', false);
    }
  }
};
});
___scope___.file("js/store/modules/editor-video.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  namespaced: true,
  state: {
    shown: false
  },
  getters: {},
  mutations: {
    shownChange: function shownChange(state, shownState) {
      state.shown = shownState;
    }
  },
  actions: {
    open: function open(_ref) {
      var commit = _ref.commit;

      commit('shownChange', true);
      wikijs.$emit('editorVideo/init');
    },
    close: function close(_ref2) {
      var commit = _ref2.commit;
      commit('shownChange', false);
    }
  }
};
});
___scope___.file("js/store/modules/modal-create-page.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  namespaced: true,
  state: {
    shown: false
  },
  getters: {},
  mutations: {
    shownChange: function shownChange(state, shownState) {
      state.shown = shownState;
    }
  },
  actions: {
    open: function open(_ref) {
      var commit = _ref.commit;
      commit('shownChange', true);
    },
    close: function close(_ref2) {
      var commit = _ref2.commit;
      commit('shownChange', false);
    }
  }
};
});
___scope___.file("js/store/modules/modal-create-user.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  namespaced: true,
  state: {
    shown: false
  },
  getters: {},
  mutations: {
    shownChange: function shownChange(state, shownState) {
      state.shown = shownState;
    }
  },
  actions: {
    open: function open(_ref) {
      var commit = _ref.commit;

      commit('shownChange', true);
      wikijs.$emit('modalCreateUser/init');
    },
    close: function close(_ref2) {
      var commit = _ref2.commit;
      commit('shownChange', false);
    }
  }
};
});
___scope___.file("js/store/modules/modal-delete-user.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  namespaced: true,
  state: {
    shown: false
  },
  getters: {},
  mutations: {
    shownChange: function shownChange(state, shownState) {
      state.shown = shownState;
    }
  },
  actions: {
    open: function open(_ref) {
      var commit = _ref.commit;
      commit('shownChange', true);
    },
    close: function close(_ref2) {
      var commit = _ref2.commit;
      commit('shownChange', false);
    }
  }
};
});
___scope___.file("js/store/modules/modal-delete-page.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  namespaced: true,
  state: {
    shown: false
  },
  getters: {},
  mutations: {
    shownChange: function shownChange(state, shownState) {
      state.shown = shownState;
    }
  },
  actions: {
    open: function open(_ref) {
      var commit = _ref.commit;
      commit('shownChange', true);
    },
    close: function close(_ref2) {
      var commit = _ref2.commit;
      commit('shownChange', false);
    }
  }
};
});
___scope___.file("js/store/modules/modal-discard-page.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  namespaced: true,
  state: {
    shown: false
  },
  getters: {},
  mutations: {
    shownChange: function shownChange(state, shownState) {
      state.shown = shownState;
    }
  },
  actions: {
    open: function open(_ref) {
      var commit = _ref.commit;

      console.log(commit, "HelloWorld1");
      commit('shownChange', true);
    },
    close: function close(_ref2) {
      var commit = _ref2.commit;
      console.log(commit, "HelloWorld");commit('shownChange', false);
    }
  }
};
});
___scope___.file("js/store/modules/modal-move-page.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  namespaced: true,
  state: {
    shown: false
  },
  getters: {},
  mutations: {
    shownChange: function shownChange(state, shownState) {
      state.shown = shownState;
    }
  },
  actions: {
    open: function open(_ref) {
      var commit = _ref.commit;
      commit('shownChange', true);
    },
    close: function close(_ref2) {
      var commit = _ref2.commit;
      commit('shownChange', false);
    }
  }
};
});
___scope___.file("js/store/modules/modal-profile-2fa.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  namespaced: true,
  state: {
    shown: false,
    step: 'confirm'
  },
  getters: {},
  mutations: {
    shownChange: function shownChange(state, shownState) {
      state.shown = shownState;
    },
    stepChange: function stepChange(state, stepState) {
      state.step = stepState;
    }
  },
  actions: {
    open: function open(_ref, opts) {
      var commit = _ref.commit;

      commit('shownChange', true);
      commit('stepChange', 'confirm');
    },
    close: function close(_ref2) {
      var commit = _ref2.commit;
      commit('shownChange', false);
    }
  }
};
});
___scope___.file("js/store/modules/modal-upgrade-system.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  namespaced: true,
  state: {
    shown: false,
    mode: 'upgrade',
    step: 'confirm'
  },
  getters: {},
  mutations: {
    shownChange: function shownChange(state, shownState) {
      state.shown = shownState;
    },
    modeChange: function modeChange(state, modeState) {
      state.mode = modeState;
    },
    stepChange: function stepChange(state, stepState) {
      state.step = stepState;
    }
  },
  actions: {
    open: function open(_ref, opts) {
      var commit = _ref.commit;

      commit('shownChange', true);
      commit('modeChange', opts.mode);
      commit('stepChange', 'confirm');
    },
    close: function close(_ref2) {
      var commit = _ref2.commit;
      commit('shownChange', false);
    }
  }
};
});
___scope___.file("js/store/modules/page-loader.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  namespaced: true,
  state: {
    shown: true,
    msg: 'Loading...'
  },
  getters: {},
  mutations: {
    shownChange: function shownChange(state, shownState) {
      state.shown = shownState;
    },
    msgChange: function msgChange(state, newText) {
      state.msg = newText;
    }
  },
  actions: {
    complete: function complete(_ref) {
      var commit = _ref.commit;
      commit('shownChange', false);
    }
  }
};
});
___scope___.file("js/helpers/index.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var helpers = {
  common: require('./common'),
  form: require('./form'),
  pages: require('./pages')
};

exports.default = {
  install: function install(Vue) {
    Vue.$helpers = helpers;
    Object.defineProperties(Vue.prototype, {
      $helpers: {
        get: function get() {
          return helpers;
        }
      }
    });
  }
};
});
___scope___.file("js/helpers/common.js", function(exports, require, module, __filename, __dirname){

'use strict';

var _filesize2 = require('filesize.js');

var _filesize3 = _interopRequireDefault(_filesize2);

var _toUpper = require('lodash/toUpper');

var _toUpper2 = _interopRequireDefault(_toUpper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  filesize: function filesize(rawSize) {
    return (0, _toUpper2.default)((0, _filesize3.default)(rawSize));
  }
};
});
___scope___.file("js/helpers/form.js", function(exports, require, module, __filename, __dirname){

'use strict';

module.exports = {
  setInputSelection: function setInputSelection(input, startPos, endPos) {
    input.focus();
    if (typeof input.selectionStart !== 'undefined') {
      input.selectionStart = startPos;
      input.selectionEnd = endPos;
    } else if (document.selection && document.selection.createRange) {
      input.select();
      var range = document.selection.createRange();
      range.collapse(true);
      range.moveEnd('character', endPos);
      range.moveStart('character', startPos);
      range.select();
    }
  }
};
});
___scope___.file("js/helpers/pages.js", function(exports, require, module, __filename, __dirname){

'use strict';

var _deburr = require('lodash/deburr');

var _deburr2 = _interopRequireDefault(_deburr);

var _filter = require('lodash/filter');

var _filter2 = _interopRequireDefault(_filter);

var _isEmpty = require('lodash/isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _join = require('lodash/join');

var _join2 = _interopRequireDefault(_join);

var _kebabCase = require('lodash/kebabCase');

var _kebabCase2 = _interopRequireDefault(_kebabCase);

var _map = require('lodash/map');

var _map2 = _interopRequireDefault(_map);

var _split = require('lodash/split');

var _split2 = _interopRequireDefault(_split);

var _trim = require('lodash/trim');

var _trim2 = _interopRequireDefault(_trim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  makeSafePath: function makeSafePath(rawPath) {
    var rawParts = (0, _split2.default)((0, _trim2.default)(rawPath), '/');
    rawParts = (0, _map2.default)(rawParts, function (r) {
      return (0, _kebabCase2.default)((0, _deburr2.default)((0, _trim2.default)(r)));
    });

    return (0, _join2.default)((0, _filter2.default)(rawParts, function (r) {
      return !(0, _isEmpty2.default)(r);
    }), '/');
  }
};
});
___scope___.file("js/helpers/lodash.js", function(exports, require, module, __filename, __dirname){

'use strict';

var _cloneDeep = require('lodash/cloneDeep');

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _concat = require('lodash/concat');

var _concat2 = _interopRequireDefault(_concat);

var _debounce = require('lodash/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _deburr = require('lodash/deburr');

var _deburr2 = _interopRequireDefault(_deburr);

var _delay = require('lodash/delay');

var _delay2 = _interopRequireDefault(_delay);

var _filter = require('lodash/filter');

var _filter2 = _interopRequireDefault(_filter);

var _find = require('lodash/find');

var _find2 = _interopRequireDefault(_find);

var _findKey = require('lodash/findKey');

var _findKey2 = _interopRequireDefault(_findKey);

var _forEach = require('lodash/forEach');

var _forEach2 = _interopRequireDefault(_forEach);

var _includes = require('lodash/includes');

var _includes2 = _interopRequireDefault(_includes);

var _isBoolean = require('lodash/isBoolean');

var _isBoolean2 = _interopRequireDefault(_isBoolean);

var _isEmpty = require('lodash/isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _isNil = require('lodash/isNil');

var _isNil2 = _interopRequireDefault(_isNil);

var _join = require('lodash/join');

var _join2 = _interopRequireDefault(_join);

var _kebabCase = require('lodash/kebabCase');

var _kebabCase2 = _interopRequireDefault(_kebabCase);

var _last = require('lodash/last');

var _last2 = _interopRequireDefault(_last);

var _map = require('lodash/map');

var _map2 = _interopRequireDefault(_map);

var _nth = require('lodash/nth');

var _nth2 = _interopRequireDefault(_nth);

var _pullAt = require('lodash/pullAt');

var _pullAt2 = _interopRequireDefault(_pullAt);

var _reject = require('lodash/reject');

var _reject2 = _interopRequireDefault(_reject);

var _slice = require('lodash/slice');

var _slice2 = _interopRequireDefault(_slice);

var _split = require('lodash/split');

var _split2 = _interopRequireDefault(_split);

var _startCase = require('lodash/startCase');

var _startCase2 = _interopRequireDefault(_startCase);

var _startsWith = require('lodash/startsWith');

var _startsWith2 = _interopRequireDefault(_startsWith);

var _toString = require('lodash/toString');

var _toString2 = _interopRequireDefault(_toString);

var _toUpper = require('lodash/toUpper');

var _toUpper2 = _interopRequireDefault(_toUpper);

var _trim = require('lodash/trim');

var _trim2 = _interopRequireDefault(_trim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  deburr: _deburr2.default,
  concat: _concat2.default,
  cloneDeep: _cloneDeep2.default,
  debounce: _debounce2.default,
  delay: _delay2.default,
  filter: _filter2.default,
  find: _find2.default,
  findKey: _findKey2.default,
  forEach: _forEach2.default,
  includes: _includes2.default,
  isBoolean: _isBoolean2.default,
  isEmpty: _isEmpty2.default,
  isNil: _isNil2.default,
  join: _join2.default,
  kebabCase: _kebabCase2.default,
  last: _last2.default,
  map: _map2.default,
  nth: _nth2.default,
  pullAt: _pullAt2.default,
  reject: _reject2.default,
  slice: _slice2.default,
  split: _split2.default,
  startCase: _startCase2.default,
  startsWith: _startsWith2.default,
  toString: _toString2.default,
  toUpper: _toUpper2.default,
  trim: _trim2.default
};
});
___scope___.file("js/components/alert.vue", function(exports, require, module, __filename, __dirname){

var _p = {};
var _v = function(exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: 'alert',
    data: function () {
        return {};
    },
    computed: {
        shown: function () { return this.$store.state.alert.shown; },
        style: function () { return 'is-' + this.$store.state.alert.style; },
        icon: function () { return 'nc-icon-outline ' + this.$store.state.alert.icon; },
        msg: function () { return this.$store.state.alert.msg; },
    }
};

};
_p.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"alert","enter-active-class":"animated zoomIn","leave-active-class":"animated fadeOutRight"}},[(_vm.shown)?_c('div',{staticClass:"alert",class:_vm.style},[_c('div',{staticClass:"alert-icon"},[_c('i',{class:_vm.icon})]),_c('div',{staticClass:"alert-msg"},[_vm._v(_vm._s(_vm.msg))])]):_vm._e()])}
_p.staticRenderFns = [  ];
var _e = {}; _v(_e); Object.assign(_e.default.options||_e.default, _p)
module.exports = _e
    
});
___scope___.file("js/components/anchor.vue", function(exports, require, module, __filename, __dirname){

var _p = {};
var _v = function(exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: 'anchor',
    data: function () {
        return {};
    },
    computed: {
        anchorURL: function () {
            return window.location.href.split('#')[0] + '#' + this.$store.state.anchor.hash;
        },
        isShown: function () {
            return this.$store.state.anchor.shown;
        }
    },
    methods: {
        cancel: function () {
            this.$store.dispatch('anchor/close');
        },
        clipboardSuccess: function () {
            this.$store.dispatch('alert', {
                style: 'blue',
                icon: 'business_notes',
                msg: this.$t('modal.anchorsuccess')
            });
            this.$store.dispatch('anchor/close');
        },
        clipboardError: function () {
            this.$store.dispatch('alert', {
                style: 'red',
                icon: 'business_notes',
                msg: this.$t('modal.anchorerror')
            });
            this.$refs.anchorURLinput.select();
        }
    }
};

};
_p.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"duration":400}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShown),expression:"isShown"}],staticClass:"modal"},[_c('transition',{attrs:{"name":"modal-background"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShown),expression:"isShown"}],staticClass:"modal-background"})]),_c('div',{staticClass:"modal-container"},[_c('transition',{attrs:{"name":"modal-content"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShown),expression:"isShown"}],staticClass:"modal-content"},[_c('header',{staticClass:"is-blue"},[_c('span',[_vm._v(_vm._s(_vm.$t('modal.anchortitle')))])]),_c('section',[_c('p',{staticClass:"control is-fullwidth"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.anchorURL),expression:"anchorURL"}],ref:"anchorURLinput",staticClass:"input",attrs:{"type":"text"},domProps:{"value":(_vm.anchorURL)},on:{"input":function($event){if($event.target.composing){ return; }_vm.anchorURL=$event.target.value}}})])]),_c('footer',[_c('a',{staticClass:"button is-grey is-outlined",on:{"click":_vm.cancel}},[_vm._v(_vm._s(_vm.$t('modal.discard')))]),_c('a',{directives:[{name:"clipboard",rawName:"v-clipboard",value:(_vm.anchorURL),expression:"anchorURL"}],staticClass:"button is-blue",on:{"success":_vm.clipboardSuccess,"error":_vm.clipboardError}},[_vm._v(_vm._s(_vm.$t('modal.copyclipboard')))])])])])],1)],1)])}
_p.staticRenderFns = [  ];
var _e = {}; _v(_e); Object.assign(_e.default.options||_e.default, _p)
module.exports = _e
    
});
___scope___.file("js/components/color-picker.vue", function(exports, require, module, __filename, __dirname){

var _p = {};
var _v = function(exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: 'color-picker',
    props: ['value'],
    data: function () {
        return {
            colors: [
                'red',
                'pink',
                'purple',
                'deep-purple',
                'indigo',
                'blue',
                'light-blue',
                'cyan',
                'teal',
                'green',
                'light-green',
                'lime',
                'yellow',
                'amber',
                'orange',
                'deep-orange',
                'brown',
                'grey',
                'blue-grey'
            ]
        };
    },
    methods: {
        setColor: function (color) {
            this.$emit('input', color);
        }
    }
};

};
_p.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"colorpicker"},_vm._l((_vm.colors),function(color){return _c('div',{staticClass:"colorpicker-choice",class:["is-" + color, color === _vm.value ? "is-active" : ""],on:{"click":function($event){_vm.setColor(color)}}})}))}
_p.staticRenderFns = [  ];
var _e = {}; _v(_e); Object.assign(_e.default.options||_e.default, _p)
module.exports = _e
    
});
___scope___.file("js/components/editor-codeblock.vue", function(exports, require, module, __filename, __dirname){

var _p = {};
var _v = function(exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var codeEditor;
var ace;
exports.default = {
    name: 'editor-codeblock',
    data: function () {
        return {
            modes: [],
            modeSelected: 'text',
            modelistLoaded: [],
            isLoading: false
        };
    },
    computed: {
        content: function () {
            return this.$store.state.editorCodeblock.content;
        },
        isShown: function () {
            return this.$store.state.editorCodeblock.shown;
        }
    },
    watch: {
        modeSelected: function (val, oldVal) {
            this.loadMode(val);
        }
    },
    methods: {
        init: function () {
            var self = this;
            self._.delay(function () {
                codeEditor = ace.edit('codeblock-editor');
                codeEditor.setTheme('ace/theme/tomorrow_night');
                codeEditor.getSession().setMode('ace/mode/' + self.modeSelected);
                codeEditor.setOption('fontSize', '14px');
                codeEditor.setOption('hScrollBarAlwaysVisible', false);
                codeEditor.setOption('wrap', true);
                codeEditor.setOption('useSoftTabs', true);
                codeEditor.setOption('tabSize', 2);
                codeEditor.setOption('showPrintMargin', false);
                codeEditor.setValue(self.content);
                codeEditor.focus();
                codeEditor.renderer.updateFull();
            }, 100);
        },
        loadMode: function (m) {
            var _this = this;
            var self = this;
            if (self._.includes(self.modelistLoaded, m)) {
                codeEditor.getSession().setMode('ace/mode/' + m);
            }
            else {
                self.isLoading = true;
                self.$http.get('/js/ace/mode-' + m + '.js').then(function (resp) {
                    if (resp.ok) {
                        eval(resp.bodyText);
                        self.modelistLoaded.push(m);
                        ace.acequire('ace/mode/' + m);
                        codeEditor.getSession().setMode('ace/mode/' + m);
                        self._.delay(function () { self.isLoading = false; }, 500);
                    }
                    else {
                        _this.$store.dispatch('alert', {
                            style: 'red',
                            icon: 'ui-2_square-remove-09',
                            msg: self.$t('editor.codeblockloadingerror')
                        });
                    }
                }).catch(function (err) {
                    _this.$store.dispatch('alert', {
                        style: 'red',
                        icon: 'ui-2_square-remove-09',
                        msg: 'Error: ' + err.body.msg
                    });
                });
            }
        },
        cancel: function () {
            codeEditor.destroy();
            this.$store.dispatch('editorCodeblock/close');
        },
        insertCode: function () {
            var codeBlockText = '\n```' + this.modeSelected + '\n' + codeEditor.getValue() + '\n```\n';
            this.$store.dispatch('editor/insert', codeBlockText);
            this.$store.dispatch('alert', {
                style: 'blue',
                icon: 'files_archive-3d-check',
                msg: this.$t('editor.codeblocksuccess')
            });
            this.cancel();
        }
    },
    mounted: function () {
        var _this = this;
        FuseBox.import('/js/ace/ace.js', function (acePkg) {
            ace = acePkg;
            _this.modes = ace.acequire('ace/ext/modelist').modesByName;
        });
        this.$root.$on('editorCodeblock/init', this.init);
    }
};

};
_p.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"duration":400}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShown),expression:"isShown"}],staticClass:"modal"},[_c('transition',{attrs:{"name":"modal-background"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShown),expression:"isShown"}],staticClass:"modal-background"})]),_c('div',{staticClass:"modal-container"},[_c('transition',{attrs:{"name":"modal-content"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShown),expression:"isShown"}],staticClass:"modal-content is-expanded"},[_c('header',{staticClass:"is-green"},[_c('span',[_vm._v(_vm._s(_vm.$t('editor.codeblocktitle')))]),_c('p',{staticClass:"modal-notify",class:{ "is-active": _vm.isLoading }},[_c('span',[_vm._v(_vm._s(_vm.$t('editor.codeblockloading', { name: _vm.modeSelected })))]),_c('i')])]),_c('section',{staticClass:"is-gapless"},[_c('div',{staticClass:"columns is-stretched"},[_c('div',{staticClass:"column is-one-quarter modal-sidebar is-green",staticStyle:{"max-width":"350px"}},[_c('div',{staticClass:"model-sidebar-header"},[_vm._v(_vm._s(_vm.$t('editor.codeblocklanguage')))]),_c('div',{staticClass:"model-sidebar-content"},[_c('p',{staticClass:"control is-fullwidth"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.modeSelected),expression:"modeSelected"}],on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.modeSelected=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((_vm.modes),function(mode){return _c('option',{domProps:{"value":mode.name}},[_vm._v(_vm._s(mode.caption))])}))])])]),_c('div',{staticClass:"column ace-container"},[_c('div',{attrs:{"id":"codeblock-editor"}})])])]),_c('footer',[_c('a',{staticClass:"button is-grey is-outlined",on:{"click":_vm.cancel}},[_vm._v(_vm._s(_vm.$t('editor.discard')))]),_c('a',{staticClass:"button is-green",on:{"click":_vm.insertCode}},[_vm._v(_vm._s(_vm.$t('editor.codeblockinsert')))])])])])],1)],1)])}
_p.staticRenderFns = [  ];
var _e = {}; _v(_e); Object.assign(_e.default.options||_e.default, _p)
module.exports = _e
    
});
___scope___.file("js/components/editor-file.vue", function(exports, require, module, __filename, __dirname){

var _p = {};
var _v = function(exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: 'editor-file',
    data: function () {
        return {
            isLoading: false,
            isLoadingText: '',
            newFolderName: '',
            newFolderShow: false,
            newFolderError: false,
            fetchFromUrlURL: '',
            fetchFromUrlShow: false,
            folders: [],
            currentFolder: '',
            currentFile: '',
            currentAlign: 'left',
            files: [],
            uploadSucceeded: false,
            postUploadChecks: 0,
            renameFileShow: false,
            renameFileId: '',
            renameFileFilename: '',
            deleteFileShow: false,
            deleteFileId: '',
            deleteFileFilename: ''
        };
    },
    computed: {
        isShown: function () {
            return this.$store.state.editorFile.shown;
        },
        mode: function () {
            return this.$store.state.editorFile.mode;
        }
    },
    methods: {
        init: function () {
            $(this.$refs.editorFileUploadInput).on('change', this.upload);
            this.refreshFolders();
        },
        cancel: function () {
            $(this.$refs.editorFileUploadInput).off('change', this.upload);
            this.$store.dispatch('editorFile/close');
        },
        filesize: function (rawSize) {
            return this.$helpers.common.filesize(rawSize);
        },
        selectFile: function (fileId) {
            this.currentFile = fileId;
        },
        insertFileLink: function () {
            var selFile = this._.find(this.files, ['_id', this.currentFile]);
            selFile.normalizedPath = (selFile.folder === 'f:') ? selFile.filename : selFile.folder.slice(2) + '/' + selFile.filename;
            selFile.titleGuess = this._.startCase(selFile.basename);
            var textToInsert = '';
            if (this.mode === 'image') {
                textToInsert = '![' + selFile.titleGuess + '](/uploads/' + selFile.normalizedPath + ' "' + selFile.titleGuess + '")';
                switch (this.currentAlign) {
                    case 'center':
                        textToInsert += '{.align-center}';
                        break;
                    case 'right':
                        textToInsert += '{.align-right}';
                        break;
                    case 'logo':
                        textToInsert += '{.pagelogo}';
                        break;
                }
            }
            else {
                textToInsert = '[' + selFile.titleGuess + '](/uploads/' + selFile.normalizedPath + ' "' + selFile.titleGuess + '")';
            }
            this.$store.dispatch('editor/insert', textToInsert);
            this.$store.dispatch('alert', {
                style: 'blue',
                icon: 'ui-1_check-square-09',
                msg: (this.mode === 'file') ? this.$t('editor.filesuccess') : this.$t('editor.imagesuccess')
            });
            this.cancel();
        },
        newFolder: function () {
            var self = this;
            this.newFolderName = '';
            this.newFolderError = false;
            this.newFolderShow = true;
            this._.delay(function () { self.$refs.editorFileNewFolderInput.focus(); }, 400);
        },
        newFolderDiscard: function () {
            this.newFolderShow = false;
        },
        newFolderCreate: function () {
            var self = this;
            var regFolderName = new RegExp('^[a-z0-9][a-z0-9-]*[a-z0-9]$');
            this.newFolderName = this._.kebabCase(this._.trim(this.newFolderName));
            if (this._.isEmpty(this.newFolderName) || !regFolderName.test(this.newFolderName)) {
                this.newFolderError = true;
                return;
            }
            this.newFolderDiscard();
            this.isLoadingText = this.$t('modal.newfolderloading');
            this.isLoading = true;
            this.$nextTick(function () {
                socket.emit('uploadsCreateFolder', { foldername: self.newFolderName }, function (data) {
                    self.folders = data;
                    self.currentFolder = self.newFolderName;
                    self.files = [];
                    self.isLoading = false;
                    self.$store.dispatch('alert', {
                        style: 'blue',
                        icon: 'files_folder-check',
                        msg: self.$t('modal.newfoldersuccess', { name: self.newFolderName })
                    });
                });
            });
        },
        fetchFromUrl: function () {
            var self = this;
            this.fetchFromUrlURL = '';
            this.fetchFromUrlShow = true;
            this._.delay(function () { self.$refs.editorFileFetchInput.focus(); }, 400);
        },
        fetchFromUrlDiscard: function () {
            this.fetchFromUrlShow = false;
        },
        fetchFromUrlGo: function () {
            var self = this;
            this.fetchFromUrlDiscard();
            this.isLoadingText = 'Fetching image...';
            this.isLoading = true;
            this.$nextTick(function () {
                socket.emit('uploadsFetchFileFromURL', { folder: self.currentFolder, fetchUrl: self.fetchFromUrlURL }, function (data) {
                    if (data.ok) {
                        self.waitChangeComplete(self.files.length, true);
                    }
                    else {
                        self.isLoading = false;
                        self.$store.dispatch('alert', {
                            style: 'red',
                            icon: 'ui-2_square-remove-09',
                            msg: self.$t('editor.fileuploaderror', { err: data.msg })
                        });
                    }
                });
            });
        },
        renameFile: function () {
            var self = this;
            var c = this._.find(this.files, ['_id', this.renameFileId]);
            this.renameFileFilename = c.basename || '';
            this.renameFileShow = true;
            this._.delay(function () {
                self.$refs.editorFileRenameInput.select();
            }, 100);
        },
        renameFileDiscard: function () {
            this.renameFileShow = false;
        },
        renameFileGo: function () {
            var self = this;
            this.renameFileDiscard();
            this.isLoadingText = this.$t('modal.renamefileloading');
            this.isLoading = true;
            this.$nextTick(function () {
                socket.emit('uploadsRenameFile', { uid: self.renameFileId, folder: self.currentFolder, filename: self.renameFileFilename }, function (data) {
                    if (data.ok) {
                        self.waitChangeComplete(self.files.length, false);
                    }
                    else {
                        self.isLoading = false;
                        self.$store.dispatch('alert', {
                            style: 'red',
                            icon: 'ui-2_square-remove-09',
                            msg: self.$t('modal.renamefileerror', { err: data.msg })
                        });
                    }
                });
            });
        },
        moveFile: function (uid, fld) {
            var self = this;
            this.isLoadingText = this.$t('editor.filemoveloading');
            this.isLoading = true;
            this.$nextTick(function () {
                socket.emit('uploadsMoveFile', { uid: uid, folder: fld }, function (data) {
                    if (data.ok) {
                        self.loadFiles();
                        self.$store.dispatch('alert', {
                            style: 'blue',
                            icon: 'files_check',
                            msg: self.$t('editor.filemovesuccess')
                        });
                    }
                    else {
                        self.isLoading = false;
                        self.$store.dispatch('alert', {
                            style: 'red',
                            icon: 'ui-2_square-remove-09',
                            msg: self.$t('editor.filemoveerror', { err: data.msg })
                        });
                    }
                });
            });
        },
        deleteFileWarn: function (show) {
            if (show) {
                var c = this._.find(this.files, ['_id', this.deleteFileId]);
                this.deleteFileFilename = c.filename || this.$t('editor.filedeletedefault');
            }
            this.deleteFileShow = show;
        },
        deleteFileGo: function () {
            var _this = this;
            var self = this;
            this.deleteFileWarn(false);
            this.isLoadingText = this.$t('editor.filedeleteloading');
            this.isLoading = true;
            this.$nextTick(function () {
                socket.emit('uploadsDeleteFile', { uid: _this.deleteFileId }, function (data) {
                    self.loadFiles();
                    self.$store.dispatch('alert', {
                        style: 'blue',
                        icon: 'ui-1_trash',
                        msg: self.$t('editor.filedeletesuccess')
                    });
                });
            });
        },
        selectFolder: function (fldName) {
            this.currentFolder = fldName;
            this.loadFiles();
        },
        refreshFolders: function () {
            var self = this;
            this.isLoadingText = this.$t('editor.foldersloading');
            this.isLoading = true;
            this.currentFolder = '';
            this.currentImage = '';
            this.$nextTick(function () {
                socket.emit('uploadsGetFolders', {}, function (data) {
                    self.folders = data;
                    self.loadFiles();
                });
            });
        },
        loadFiles: function (silent) {
            var self = this;
            if (!silent) {
                this.isLoadingText = this.$t('editor.fileloading');
                this.isLoading = true;
            }
            return new Promise(function (resolve, reject) {
                self.$nextTick(function () {
                    var loadAction = (self.mode === 'image') ? 'uploadsGetImages' : 'uploadsGetFiles';
                    socket.emit(loadAction, { folder: self.currentFolder }, function (data) {
                        self.files = data;
                        if (!silent) {
                            self.isLoading = false;
                        }
                        self.attachContextMenus();
                        resolve(true);
                    });
                });
            });
        },
        waitChangeComplete: function (oldAmount, expectChange) {
            var self = this;
            expectChange = (this._.isBoolean(expectChange)) ? expectChange : true;
            this.postUploadChecks++;
            this.isLoadingText = this.$t('editor.fileprocessing');
            this.$nextTick(function () {
                self.loadFiles(true).then(function () {
                    if ((self.files.length !== oldAmount) === expectChange) {
                        self.postUploadChecks = 0;
                        self.isLoading = false;
                    }
                    else if (self.postUploadChecks > 5) {
                        self.postUploadChecks = 0;
                        self.isLoading = false;
                        self.$store.dispatch('alert', {
                            style: 'red',
                            icon: 'ui-2_square-remove-09',
                            msg: self.$t('editor.fileerror')
                        });
                    }
                    else {
                        self._.delay(function () {
                            self.waitChangeComplete(oldAmount, expectChange);
                        }, 1500);
                    }
                });
            });
        },
        attachContextMenus: function () {
            var self = this;
            var moveFolders = this._.map(this.folders, function (f) {
                return {
                    name: (f !== '') ? f : '/ (root)',
                    icon: 'nc-icon-outline files_folder-15',
                    callback: function (key, opt) {
                        var moveFileId = self._.toString($(opt.$trigger).data('uid'));
                        var moveFileDestFolder = self._.nth(self.folders, key);
                        self.moveFile(moveFileId, moveFileDestFolder);
                    }
                };
            });
            $.contextMenu('destroy', '.editor-modal-choices > figure');
            $.contextMenu({
                selector: '.editor-modal-choices > figure',
                appendTo: '.editor-modal-choices',
                position: function (opt, x, y) {
                    $(opt.$trigger).addClass('is-contextopen');
                    var trigPos = $(opt.$trigger).position();
                    var trigDim = { w: $(opt.$trigger).width() / 5, h: $(opt.$trigger).height() / 2 };
                    opt.$menu.css({ top: trigPos.top + trigDim.h, left: trigPos.left + trigDim.w });
                },
                events: {
                    hide: function (opt) {
                        $(opt.$trigger).removeClass('is-contextopen');
                    }
                },
                items: {
                    rename: {
                        name: self.$t('editor.filerenameaction'),
                        icon: 'nc-icon-outline files_vector',
                        callback: function (key, opt) {
                            self.renameFileId = self._.toString(opt.$trigger[0].dataset.uid);
                            self.renameFile();
                        }
                    },
                    move: {
                        name: self.$t('editor.filemoveaction'),
                        icon: 'fa-folder-open-o',
                        items: moveFolders
                    },
                    delete: {
                        name: self.$t('editor.filedeleteaction'),
                        icon: 'icon-trash2',
                        callback: function (key, opt) {
                            self.deleteFileId = self._.toString(opt.$trigger[0].dataset.uid);
                            self.deleteFileWarn(true);
                        }
                    }
                }
            });
        },
        upload: function () {
            var self = this;
            var curFileAmount = this.files.length;
            var uplUrl = (self.mode === 'image') ? '/uploads/img' : '/uploads/file';
            $(this.$refs.editorFileUploadInput).simpleUpload(uplUrl, {
                name: (self.mode === 'image') ? 'imgfile' : 'binfile',
                data: {
                    folder: self.currentFolder
                },
                limit: 20,
                expect: 'json',
                allowedExts: (self.mode === 'image') ? ['jpg', 'jpeg', 'gif', 'png', 'webp'] : undefined,
                allowedTypes: (self.mode === 'image') ? ['image/png', 'image/jpeg', 'image/gif', 'image/webp'] : undefined,
                maxFileSize: (self.mode === 'image') ? 3145728 : 0,
                init: function (totalUploads) {
                    self.uploadSucceeded = false;
                    self.isLoadingText = 'Preparing to upload...';
                    self.isLoading = true;
                },
                progress: function (progress) {
                    self.isLoadingText = 'Uploading...' + Math.round(progress) + '%';
                },
                success: function (data) {
                    if (data.ok) {
                        var failedUpls = self._.filter(data.results, ['ok', false]);
                        if (failedUpls.length) {
                            self._.forEach(failedUpls, function (u) {
                                self.$store.dispatch('alert', {
                                    style: 'red',
                                    icon: 'ui-2_square-remove-09',
                                    msg: self.$t('editor.fileuploaderror', { err: u.msg })
                                });
                            });
                            if (failedUpls.length < data.results.length) {
                                self.uploadSucceeded = true;
                            }
                        }
                        else {
                            self.uploadSucceeded = true;
                            self.$store.dispatch('alert', {
                                style: 'blue',
                                icon: 'arrows-1_cloud-upload-96',
                                msg: self.$t('editor.fileuploadsuccess')
                            });
                        }
                    }
                    else {
                        self.$store.dispatch('alert', {
                            style: 'red',
                            icon: 'ui-2_square-remove-09',
                            msg: self.$t('editor.fileuploaderror', { err: data.msg })
                        });
                    }
                },
                error: function (error) {
                    self.$store.dispatch('alert', {
                        style: 'red',
                        icon: 'ui-2_square-remove-09',
                        msg: self.$t('editor.fileuploaderror', { err: error.message })
                    });
                },
                finish: function () {
                    if (self.uploadSucceeded) {
                        self.waitChangeComplete(curFileAmount, true);
                    }
                    else {
                        self.isLoading = false;
                    }
                }
            });
        }
    },
    mounted: function () {
        this.$root.$on('editorFile/init', this.init);
    }
};

};
_p.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"duration":400}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShown),expression:"isShown"}],staticClass:"modal"},[_c('transition',{attrs:{"name":"modal-background"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShown),expression:"isShown"}],staticClass:"modal-background"})]),_c('div',{staticClass:"modal-container"},[_c('transition',{attrs:{"name":"modal-content"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShown),expression:"isShown"}],staticClass:"modal-content is-expanded"},[_c('header',{staticClass:"is-green"},[_c('span',[_vm._v(_vm._s((_vm.mode === 'file') ? _vm.$t('editor.filetitle') : _vm.$t('editor.imagetitle')))]),_c('p',{staticClass:"modal-notify",class:{ "is-active": _vm.isLoading }},[_c('span',[_vm._v(_vm._s(_vm.isLoadingText))]),_c('i')])]),_c('div',{staticClass:"modal-toolbar is-green"},[_c('a',{staticClass:"button",on:{"click":_vm.newFolder}},[_c('i',{staticClass:"nc-icon-outline files_folder-14"}),_c('span',[_vm._v(_vm._s(_vm.$t('editor.newfolder')))])]),_c('a',{staticClass:"button",attrs:{"id":"btn-editor-file-upload"}},[_c('i',{staticClass:"nc-icon-outline arrows-1_cloud-upload-94"}),_c('span',[_vm._v(_vm._s((_vm.mode === 'file') ? _vm.$t('editor.fileupload') : _vm.$t('editor.imageupload')))]),_c('label',[_c('input',{ref:"editorFileUploadInput",attrs:{"type":"file","multiple":"multiple","disabled":_vm.isLoading}})])]),(_vm.mode === "image")?_c('a',{staticClass:"button",on:{"click":_vm.fetchFromUrl}},[_c('i',{staticClass:"nc-icon-outline arrows-1_cloud-download-93"}),_c('span',[_vm._v("Fetch from URL")])]):_vm._e()]),_c('section',{staticClass:"is-gapless"},[_c('div',{staticClass:"columns is-stretched"},[_c('div',{staticClass:"column is-one-quarter modal-sidebar is-green",staticStyle:{"max-width":"350px"}},[_c('div',{staticClass:"model-sidebar-header"},[_vm._v(_vm._s(_vm.$t('editor.folders')))]),_c('ul',{staticClass:"model-sidebar-list"},_vm._l((_vm.folders),function(fld){return _c('li',[_c('a',{class:{ "is-active": _vm.currentFolder === fld },on:{"click":function($event){_vm.selectFolder(fld)}}},[_c('i',{staticClass:"nc-icon-outline files_folder-17"}),_c('span',[_vm._v("/ "+_vm._s(fld))])])])})),(_vm.mode === "image")?_c('div',{staticClass:"model-sidebar-header"},[_vm._v("Alignment")]):_vm._e(),(_vm.mode === "image")?_c('div',{staticClass:"model-sidebar-content"},[_c('p',{staticClass:"control is-fullwidth"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.currentAlign),expression:"currentAlign"}],on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.currentAlign=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":"left"}},[_vm._v(_vm._s(_vm.$t('editor.imagealignleft')))]),_c('option',{attrs:{"value":"center"}},[_vm._v(_vm._s(_vm.$t('editor.imagealigncenter')))]),_c('option',{attrs:{"value":"right"}},[_vm._v(_vm._s(_vm.$t('editor.imagealignright')))]),_c('option',{attrs:{"value":"logo"}},[_vm._v(_vm._s(_vm.$t('editor.imagealignlogo')))])])])]):_vm._e()]),(_vm.mode === "file")?_c('div',{staticClass:"column editor-modal-choices editor-modal-file-choices"},[_vm._l((_vm.files),function(fl){return _c('figure',{class:{ "is-active": _vm.currentFile === fl._id },attrs:{"data-uid":fl._id},on:{"click":function($event){_vm.selectFile(fl._id)}}},[_c('i',{staticClass:"icon-file"}),_c('span',[_c('strong',[_vm._v(_vm._s(fl.filename))])]),_c('span',[_vm._v(_vm._s(fl.mime))]),_c('span',[_vm._v(_vm._s(_vm.filesize(fl.filesize)))])])}),_c('em',{directives:[{name:"show",rawName:"v-show",value:(_vm.files.length < 1),expression:"files.length < 1"}]},[_c('i',{staticClass:"icon-marquee-minus"}),_vm._v(_vm._s(_vm.$t('editor.filefolderempty')))])],2):_vm._e(),(_vm.mode === "image")?_c('div',{staticClass:"column editor-modal-choices editor-modal-image-choices"},[_vm._l((_vm.files),function(img){return _c('figure',{class:{ "is-active": _vm.currentFile === img._id },attrs:{"data-uid":img._id},on:{"click":function($event){_vm.selectFile(img._id)}}},[_c('img',{attrs:{"src":"/uploads/t/" + img._id + ".png"}}),_c('span',[_c('strong',[_vm._v(_vm._s(img.basename))])]),_c('span',[_vm._v(_vm._s(_vm.filesize(img.filesize)))])])}),_c('em',{directives:[{name:"show",rawName:"v-show",value:(_vm.files.length < 1),expression:"files.length < 1"}]},[_c('i',{staticClass:"icon-marquee-minus"}),_vm._v(_vm._s(_vm.$t('editor.filefolderempty')))])],2):_vm._e()])]),_c('footer',[_c('a',{staticClass:"button is-grey is-outlined",on:{"click":_vm.cancel}},[_vm._v(_vm._s(_vm.$t('editor.discard')))]),_c('a',{staticClass:"button is-green",on:{"click":_vm.insertFileLink}},[_vm._v(_vm._s((_vm.mode === 'file') ? _vm.$t('editor.fileinsert') : _vm.$t('editor.imageinsert')))])])])])],1),_c('transition',{attrs:{"duration":400}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.newFolderShow),expression:"newFolderShow"}],staticClass:"modal is-superimposed"},[_c('transition',{attrs:{"name":"modal-background"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.newFolderShow),expression:"newFolderShow"}],staticClass:"modal-background"})]),_c('div',{staticClass:"modal-container"},[_c('transition',{attrs:{"name":"modal-content"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.newFolderShow),expression:"newFolderShow"}],staticClass:"modal-content"},[_c('header',{staticClass:"is-light-blue"},[_vm._v(_vm._s(_vm.$t('modal.newfoldertitle')))]),_c('section',[_c('label',{staticClass:"label"},[_vm._v(_vm._s(_vm.$t('modal.newfoldername')))]),_c('p',{staticClass:"control is-fullwidth"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.newFolderName),expression:"newFolderName"}],ref:"editorFileNewFolderInput",staticClass:"input",attrs:{"type":"text","placeholder":_vm.$t("modal.newfoldernameplaceholder")},domProps:{"value":(_vm.newFolderName)},on:{"keyup":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13)){ return null; }_vm.newFolderCreate($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"esc",27)){ return null; }_vm.newFolderDiscard($event)}],"input":function($event){if($event.target.composing){ return; }_vm.newFolderName=$event.target.value}}}),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.newFolderError),expression:"newFolderError"}],staticClass:"help is-danger"},[_vm._v(_vm._s(_vm.$t('modal.newfolderinvalid')))])])]),_c('footer',[_c('a',{staticClass:"button is-grey is-outlined",on:{"click":_vm.newFolderDiscard}},[_vm._v(_vm._s(_vm.$t('modal.discard')))]),_c('a',{staticClass:"button is-light-blue",on:{"click":_vm.newFolderCreate}},[_vm._v(_vm._s(_vm.$t('modal.create')))])])])])],1)],1)]),_c('transition',{attrs:{"duration":400}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.fetchFromUrlShow),expression:"fetchFromUrlShow"}],staticClass:"modal is-superimposed"},[_c('transition',{attrs:{"name":"modal-background"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.fetchFromUrlShow),expression:"fetchFromUrlShow"}],staticClass:"modal-background"})]),_c('div',{staticClass:"modal-container"},[_c('transition',{attrs:{"name":"modal-content"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.fetchFromUrlShow),expression:"fetchFromUrlShow"}],staticClass:"modal-content"},[_c('header',{staticClass:"is-light-blue"},[_vm._v("Fetch Image from URL")]),_c('section',[_c('label',{staticClass:"label"},[_vm._v("Enter full URL path to the image:")]),_c('p',{staticClass:"control is-fullwidth"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.fetchFromUrlURL),expression:"fetchFromUrlURL"}],ref:"editorFileFetchInput",staticClass:"input",attrs:{"type":"text","placeholder":"http://www.example.com/some-image.png"},domProps:{"value":(_vm.fetchFromUrlURL)},on:{"keyup":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13)){ return null; }_vm.fetchFromUrlGo($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"esc",27)){ return null; }_vm.fetchFromUrlDiscard($event)}],"input":function($event){if($event.target.composing){ return; }_vm.fetchFromUrlURL=$event.target.value}}}),_c('span',{staticClass:"help is-danger is-hidden"},[_vm._v("This URL path is invalid!")])])]),_c('footer',[_c('a',{staticClass:"button is-grey is-outlined",on:{"click":_vm.fetchFromUrlDiscard}},[_vm._v("Discard")]),_c('a',{staticClass:"button is-light-blue",on:{"click":_vm.fetchFromUrlGo}},[_vm._v("Fetch")])])])])],1)],1)]),_c('transition',{attrs:{"duration":400}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.renameFileShow),expression:"renameFileShow"}],staticClass:"modal is-superimposed"},[_c('transition',{attrs:{"name":"modal-background"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.renameFileShow),expression:"renameFileShow"}],staticClass:"modal-background"})]),_c('div',{staticClass:"modal-container"},[_c('transition',{attrs:{"name":"modal-content"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.renameFileShow),expression:"renameFileShow"}],staticClass:"modal-content"},[_c('header',{staticClass:"is-indigo"},[_vm._v(_vm._s(_vm.$t('modal.renamefiletitle')))]),_c('section',[_c('label',{staticClass:"label"},[_vm._v(_vm._s(_vm.$t('modal.renamefilename')))]),_c('p',{staticClass:"control is-fullwidth"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.renameFileFilename),expression:"renameFileFilename"}],ref:"editorFileRenameInput",staticClass:"input",attrs:{"id":"txt-editor-file-rename","type":"text","placeholder":_vm.$t("modal.renamefilenameplaceholder")},domProps:{"value":(_vm.renameFileFilename)},on:{"keyup":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13)){ return null; }_vm.renameFileGo($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"esc",27)){ return null; }_vm.renameFileDiscard($event)}],"input":function($event){if($event.target.composing){ return; }_vm.renameFileFilename=$event.target.value}}}),_c('span',{staticClass:"help is-danger is-hidden"},[_vm._v(_vm._s(_vm.$t('modal.renamefileinvalid')))])])]),_c('footer',[_c('a',{staticClass:"button is-grey is-outlined",on:{"click":_vm.renameFileDiscard}},[_vm._v(_vm._s(_vm.$t('modal.discard')))]),_c('a',{staticClass:"button is-light-blue",on:{"click":_vm.renameFileGo}},[_vm._v(_vm._s(_vm.$t('modal.renamefile')))])])])])],1)],1)]),_c('transition',{attrs:{"duration":400}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.deleteFileShow),expression:"deleteFileShow"}],staticClass:"modal is-superimposed"},[_c('transition',{attrs:{"name":"modal-background"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.deleteFileShow),expression:"deleteFileShow"}],staticClass:"modal-background"})]),_c('div',{staticClass:"modal-container"},[_c('transition',{attrs:{"name":"modal-content"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.deleteFileShow),expression:"deleteFileShow"}],staticClass:"modal-content"},[_c('header',{staticClass:"is-red"},[_vm._v(_vm._s(_vm.$t('modal.deletefiletitle')))]),_c('section',[_c('span',[_vm._v(_vm._s(_vm.$t('modal.deletefilewarn'))+" "),_c('strong',[_vm._v(_vm._s(_vm.deleteFileFilename))]),_vm._v("?")])]),_c('footer',[_c('a',{staticClass:"button is-grey is-outlined",on:{"click":function($event){_vm.deleteFileWarn(false)}}},[_vm._v(_vm._s(_vm.$t('modal.discard')))]),_c('a',{staticClass:"button is-red",on:{"click":_vm.deleteFileGo}},[_vm._v(" "+_vm._s(_vm.$t('modal.delete')))])])])])],1)],1)])],1)])}
_p.staticRenderFns = [  ];
var _e = {}; _v(_e); Object.assign(_e.default.options||_e.default, _p)
module.exports = _e
    
});
___scope___.file("js/components/editor-video.vue", function(exports, require, module, __filename, __dirname){

var _p = {};
var _v = function(exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var videoRules = {
    'youtube': new RegExp(/(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|&v(?:i)?=))([^#&?]*).*/, 'i'),
    'vimeo': new RegExp(/vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^/]*)\/videos\/|album\/(?:\d+)\/video\/|)(\d+)(?:$|\/|\?)/, 'i'),
    'dailymotion': new RegExp(/(?:dailymotion\.com(?:\/embed)?(?:\/video|\/hub)|dai\.ly)\/([0-9a-z]+)(?:[-_0-9a-zA-Z]+(?:#video=)?([a-z0-9]+)?)?/, 'i')
};
exports.default = {
    name: 'editor-video',
    data: function () {
        return {
            link: '',
            isInvalid: false
        };
    },
    computed: {
        isShown: function () {
            return this.$store.state.editorVideo.shown;
        }
    },
    methods: {
        init: function () {
            var self = this;
            self.isInvalid = false;
            self._.delay(function () {
                self.$refs.editorVideoInput.focus();
            }, 100);
        },
        cancel: function () {
            this.$store.dispatch('editorVideo/close');
        },
        insertVideo: function () {
            var self = this;
            if (this._.isEmpty(self.link) || self.link.length < 5) {
                this.isInvalid = true;
                return;
            }
            var videoType = this._.findKey(videoRules, function (vr) {
                return vr.test(self.link);
            });
            if (this._.isNil(videoType)) {
                videoType = 'video';
            }
            var videoText = '[video](' + this.link + '){.' + videoType + '}\n';
            this.$store.dispatch('editor/insert', videoText);
            this.$store.dispatch('alert', {
                style: 'blue',
                icon: 'media-1_action-74',
                msg: self.$t('editor.videosuccess')
            });
            this.cancel();
        }
    },
    mounted: function () {
        this.$root.$on('editorVideo/init', this.init);
    }
};

};
_p.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"duration":400}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShown),expression:"isShown"}],staticClass:"modal"},[_c('transition',{attrs:{"name":"modal-background"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShown),expression:"isShown"}],staticClass:"modal-background"})]),_c('div',{staticClass:"modal-container"},[_c('transition',{attrs:{"name":"modal-content"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShown),expression:"isShown"}],staticClass:"modal-content"},[_c('header',{staticClass:"is-green"},[_c('span',[_vm._v(_vm._s(_vm.$t('editor.videotitle')))])]),_c('section',[_c('label',{staticClass:"label"}),_c('p',{staticClass:"control is-fullwidth"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.link),expression:"link"}],ref:"editorVideoInput",staticClass:"input",attrs:{"type":"text","placeholder":"https://www.youtube.com/watch?v=xxxxxxxxxxx"},domProps:{"value":(_vm.link)},on:{"keyup":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13)){ return null; }_vm.insertVideo($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"esc",27)){ return null; }_vm.cancel($event)}],"input":function($event){if($event.target.composing){ return; }_vm.link=$event.target.value}}}),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.isInvalid),expression:"isInvalid"}],staticClass:"help is-red"},[_vm._v(_vm._s(_vm.$t('editor.videonotsupported')))])]),_c('div',{staticClass:"note"},[_vm._v(_vm._s(_vm.$t('editor.videosupportedtitle'))),_c('ul',[_c('li',[_c('i',{staticClass:"icon-youtube-play"}),_c('span',[_vm._v("Youtube")])]),_c('li',[_c('i',{staticClass:"icon-vimeo"}),_c('span',[_vm._v("Vimeo")])]),_c('li',[_c('i',{staticClass:"nc-icon-outline media-1_play-69"}),_c('span',[_vm._v("Dailymotion")])]),_c('li',[_c('i',{staticClass:"icon-video"}),_c('span',[_vm._v(_vm._s(_vm.$t('editor.videoanymp4file')))])])])])]),_c('footer',[_c('a',{staticClass:"button is-grey is-outlined",on:{"click":_vm.cancel}},[_vm._v(_vm._s(_vm.$t('editor.discard')))]),_c('a',{staticClass:"button is-green",on:{"click":_vm.insertVideo}},[_vm._v(_vm._s(_vm.$t('editor.videoinsert')))])])])])],1)],1)])}
_p.staticRenderFns = [  ];
var _e = {}; _v(_e); Object.assign(_e.default.options||_e.default, _p)
module.exports = _e
    
});
___scope___.file("js/components/history.vue", function(exports, require, module, __filename, __dirname){

var _p = {};
var _v = function(exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var diffui;
var diffuiIsReady = false;
exports.default = {
    name: 'history',
    props: ['currentPath', 'historyData'],
    data: function () {
        return {
            versions: [],
            current: {},
            diffui: {},
            sidebyside: true
        };
    },
    watch: {
        sidebyside: function () {
            this.draw();
        }
    },
    methods: {
        compareWith: function () {
            this.$store.dispatch('alert', {
                style: 'purple',
                icon: 'objects_astronaut',
                msg: 'Sorry, this function is not available. Coming soon!'
            });
        },
        view: function () {
            this.$store.dispatch('alert', {
                style: 'purple',
                icon: 'objects_astronaut',
                msg: 'Sorry, this function is not available. Coming soon!'
            });
        },
        revertToVersion: function () {
            this.$store.dispatch('alert', {
                style: 'purple',
                icon: 'objects_astronaut',
                msg: 'Sorry, this function is not available. Coming soon!'
            });
        },
        draw: function () {
            if (diffuiIsReady) {
                diffui.draw('#diff', {
                    inputFormat: 'diff',
                    outputFormat: this.sidebyside ? 'side-by-side' : 'line-by-line',
                    matching: 'words',
                    synchronisedScroll: true
                });
            }
        },
        changeCommit: function (cm) {
            var self = this;
            diffuiIsReady = false;
            self.current = cm;
            self.$http.post(siteRoot + '/hist', {
                path: self.currentPath,
                commit: cm.commit
            }).then(function (resp) {
                return resp.json();
            }).then(function (resp) {
                diffui = new Diff2HtmlUI({ diff: resp.diff });
                diffuiIsReady = true;
                self.draw();
            }).catch(function (err) {
                console.log(err);
                self.$store.dispatch('alert', {
                    style: 'red',
                    icon: 'ui-2_square-remove-09',
                    msg: 'Error: ' + err.body.error
                });
            });
        }
    },
    mounted: function () {
        this.versions = JSON.parse(this.historyData);
        this.changeCommit(this.versions[0]);
    }
};

};
_p.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container is-fluid"},[_c('div',{staticClass:"columns is-gapless"},[_c('div',{staticClass:"column is-narrow is-hidden-touch sidebar"},[_c('aside',{staticClass:"stickyscroll"},[_c('div',{staticClass:"sidebar-label"},[_c('span',[_vm._v(_vm._s(_vm.$t('history.pastversions')))])]),_c('ul',{staticClass:"sidebar-menu"},_vm._l((_vm.versions),function(item){return _c('li',[_c('a',{staticClass:"is-multiline",class:{ "is-active": item.commit === _vm.current.commit },attrs:{"title":item.dateFull},on:{"click":function($event){_vm.changeCommit(item)}}},[_c('span',[_vm._v(_vm._s(item.dateCalendar))]),_c('span',{staticClass:"is-small"},[_vm._v(_vm._s(item.commitAbbr))])])])}))])]),_c('div',{staticClass:"column"},[_c('div',{staticClass:"history"},[_c('div',{staticClass:"history-title"},[_vm._v(_vm._s(_vm.currentPath))]),_c('div',{staticClass:"history-info"},[_c('div',{staticClass:"columns"},[_c('div',{staticClass:"column history-info-meta"},[_c('p',[_c('i',{staticClass:"nc-icon-outline ui-1_calendar-check-62"}),_c('span',[_vm._v(_vm._s(_vm.$t('history.timestamp'))+": "),_c('strong',[_vm._v(_vm._s(_vm.current.dateFull))])])]),_c('p',[_c('i',{staticClass:"nc-icon-outline i nc-icon-outline users_man-23"}),_c('span',[_vm._v(_vm._s(_vm.$t('history.author'))+": "),_c('strong',[_vm._v(_vm._s(_vm.current.name)+" <"+_vm._s(_vm.current.email)+">")])])]),_c('p',[_c('i',{staticClass:"nc-icon-outline media-1_flash-21"}),_c('span',[_vm._v(_vm._s(_vm.$t('history.commit'))+": "),_c('strong',[_vm._v(_vm._s(_vm.current.commit))])])])]),_c('div',{staticClass:"column history-info-actions"},[_c('div',{staticClass:"button-group"},[_c('button',{staticClass:"button is-blue-grey",on:{"click":_vm.compareWith}},[_c('i',{staticClass:"nc-icon-outline design_path-intersect"}),_c('span',[_vm._v(_vm._s(_vm.$t('history.comparewith')))])]),_c('button',{staticClass:"button is-blue-grey",on:{"click":_vm.view}},[_c('i',{staticClass:"nc-icon-outline ui-1_eye-17"}),_c('span',[_vm._v(_vm._s(_vm.$t('history.view')))])]),_c('button',{staticClass:"button is-blue-grey",on:{"click":_vm.revertToVersion}},[_c('i',{staticClass:"nc-icon-outline arrows-4_undo-29"}),_c('span',[_vm._v(_vm._s(_vm.$t('history.reverttoversion')))])])]),_c('toggle',{staticClass:"is-dark",attrs:{"desc":_vm.$t("history.sidebyside")},model:{value:(_vm.sidebyside),callback:function ($$v) {_vm.sidebyside=$$v},expression:"sidebyside"}})],1)])]),_c('div',{staticClass:"history-diff",attrs:{"id":"diff"}})])])])])}
_p.staticRenderFns = [  ];
var _e = {}; _v(_e); Object.assign(_e.default.options||_e.default, _p)
module.exports = _e
    
});
___scope___.file("js/components/loading-spinner.vue", function(exports, require, module, __filename, __dirname){

var _p = {};
var _v = function(exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vuex_1 = require("vuex");
exports.default = {
    name: 'loading-spinner',
    computed: vuex_1.mapState(['loading'])
};

};
_p.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('i',{staticClass:"nav-item",class:{ "is-active": _vm.loading },attrs:{"id":"notifload"}})}
_p.staticRenderFns = [  ];
var _e = {}; _v(_e); Object.assign(_e.default.options||_e.default, _p)
module.exports = _e
    
});
___scope___.file("js/components/modal-create-page.vue", function(exports, require, module, __filename, __dirname){

var _p = {};
var _v = function(exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: 'modal-create-page',
    props: ['basepath'],
    data: function () {
        return {
            currentPath: '',
            userPath: '',
            isLoading: false,
            isInvalid: false
        };
    },
    computed: {
        isShown: function () {
            if (this.$store.state.modalCreatePage.shown) {
                this.makeSelection();
            }
            return this.$store.state.modalCreatePage.shown;
        }
    },
    methods: {
        makeSelection: function () {
            var self = this;
            self._.delay(function () {
                var startPos = (self.currentPath.length > 0) ? self.currentPath.length + 1 : 0;
                self.$helpers.form.setInputSelection(self.$refs.createPageInput, startPos, self.userPath.length);
            }, 100);
        },
        cancel: function () {
            this.$store.dispatch('modalCreatePage/close');
        },
        create: function () {
            this.isInvalid = false;
            var newDocPath = this.$helpers.pages.makeSafePath(this.userPath);
            if (this._.isEmpty(newDocPath)) {
                this.isInvalid = true;
            }
            else {
                this.isLoading = true;
                window.location.assign('/create/' + newDocPath);
            }
        }
    },
    mounted: function () {
        this.currentPath = (this.basepath === 'home') ? '' : this.basepath;
        this.userPath = (this._.isEmpty(this.currentPath)) ? 'new-page' : this.currentPath + '/new-page';
    }
};

};
_p.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"duration":400}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShown),expression:"isShown"}],staticClass:"modal"},[_c('transition',{attrs:{"name":"modal-background"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShown),expression:"isShown"}],staticClass:"modal-background"})]),_c('div',{staticClass:"modal-container"},[_c('transition',{attrs:{"name":"modal-content"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShown),expression:"isShown"}],staticClass:"modal-content"},[_c('header',{staticClass:"is-light-blue"},[_vm._v(_vm._s(_vm.$t('modal.createpagetitle')))]),_c('section',[_c('label',{staticClass:"label"},[_vm._v(_vm._s(_vm.$t('modal.createpagepath')))]),_c('p',{staticClass:"control is-fullwidth",class:{ "is-loading": _vm.isLoading }},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.userPath),expression:"userPath"}],ref:"createPageInput",staticClass:"input",attrs:{"type":"text","placeholder":"page-name"},domProps:{"value":(_vm.userPath)},on:{"keyup":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13)){ return null; }_vm.create($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"esc",27)){ return null; }_vm.cancel($event)}],"input":function($event){if($event.target.composing){ return; }_vm.userPath=$event.target.value}}}),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.isInvalid),expression:"isInvalid"}],staticClass:"help is-red"},[_vm._v(_vm._s(_vm.$t('modal.createpageinvalid')))])])]),_c('footer',[_c('a',{staticClass:"button is-grey is-outlined",on:{"click":_vm.cancel}},[_vm._v(_vm._s(_vm.$t('modal.discard')))]),_c('a',{staticClass:"button is-light-blue",on:{"click":_vm.create}},[_vm._v(_vm._s(_vm.$t('modal.create')))])])])])],1)],1)])}
_p.staticRenderFns = [  ];
var _e = {}; _v(_e); Object.assign(_e.default.options||_e.default, _p)
module.exports = _e
    
});
___scope___.file("js/components/modal-create-user.vue", function(exports, require, module, __filename, __dirname){

var _p = {};
var _v = function(exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: 'modal-create-user',
    data: function () {
        return {
            email: '',
            provider: 'local',
            password: '',
            name: '',
            isLoading: false
        };
    },
    computed: {
        isShown: function () {
            return this.$store.state.modalCreateUser.shown;
        }
    },
    methods: {
        init: function () {
            var self = this;
            self._.delay(function () {
                self.$refs.createUserEmailInput.focus();
            }, 100);
        },
        cancel: function () {
            this.$store.dispatch('modalCreateUser/close');
            this.email = '';
            this.provider = 'local';
        },
        create: function () {
            var _this = this;
            var self = this;
            this.isLoading = true;
            this.$http.post('/admin/users/create', {
                email: this.email,
                provider: this.provider,
                password: this.password,
                name: this.name
            }).then(function (resp) {
                return resp.json();
            }).then(function (resp) {
                _this.isLoading = false;
                if (resp.ok) {
                    _this.cancel();
                    window.location.reload(true);
                }
                else {
                    self.$store.dispatch('alert', {
                        style: 'red',
                        icon: 'ui-2_square-remove-09',
                        msg: resp.msg
                    });
                }
            }).catch(function (err) {
                _this.isLoading = false;
                self.$store.dispatch('alert', {
                    style: 'red',
                    icon: 'ui-2_square-remove-09',
                    msg: 'Error: ' + err.body.msg
                });
            });
        }
    },
    mounted: function () {
        this.$root.$on('modalCreateUser/init', this.init);
    }
};

};
_p.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"duration":400}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShown),expression:"isShown"}],staticClass:"modal"},[_c('transition',{attrs:{"name":"modal-background"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShown),expression:"isShown"}],staticClass:"modal-background"})]),_c('div',{staticClass:"modal-container"},[_c('transition',{attrs:{"name":"modal-content"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShown),expression:"isShown"}],staticClass:"modal-content"},[_c('header',{staticClass:"is-blue"},[_c('span',[_vm._v(_vm._s(_vm.$t('modal.createusertitle')))]),_c('p',{staticClass:"modal-notify",class:{ "is-active": _vm.isLoading }},[_c('i')])]),_c('section',[_c('label',{staticClass:"label"},[_vm._v(_vm._s(_vm.$t('modal.createuseremail')))]),_c('p',{staticClass:"control is-fullwidth"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.email),expression:"email"}],ref:"createUserEmailInput",staticClass:"input",attrs:{"type":"text","placeholder":_vm.$t("modal.createuseremailplaceholder")},domProps:{"value":(_vm.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.email=$event.target.value}}})])]),_c('section',[_c('label',{staticClass:"label"},[_vm._v(_vm._s(_vm.$t('modal.createuserprovider')))]),_c('p',{staticClass:"control is-fullwidth"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.provider),expression:"provider"}],on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.provider=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":"local"}},[_vm._v("Local Database")]),_c('option',{attrs:{"value":"windowslive"}},[_vm._v("Microsoft Account")]),_c('option',{attrs:{"value":"google"}},[_vm._v("Google ID")]),_c('option',{attrs:{"value":"facebook"}},[_vm._v("Facebook")]),_c('option',{attrs:{"value":"github"}},[_vm._v("GitHub")]),_c('option',{attrs:{"value":"slack"}},[_vm._v("Slack")])])])]),(_vm.provider=="local")?_c('section',[_c('label',{staticClass:"label"},[_vm._v(_vm._s(_vm.$t('modal.createuserpassword')))]),_c('p',{staticClass:"control is-fullwidth"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.password),expression:"password"}],staticClass:"input",attrs:{"type":"password","placeholder":""},domProps:{"value":(_vm.password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.password=$event.target.value}}})])]):_vm._e(),(_vm.provider=="local")?_c('section',[_c('label',{staticClass:"label"},[_vm._v(_vm._s(_vm.$t('modal.createusername')))]),_c('p',{staticClass:"control is-fullwidth"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.name),expression:"name"}],staticClass:"input",attrs:{"type":"text","placeholder":_vm.$t("modal.createusernameplaceholder")},domProps:{"value":(_vm.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.name=$event.target.value}}})])]):_vm._e(),_c('footer',[_c('a',{staticClass:"button is-grey is-outlined",on:{"click":_vm.cancel}},[_vm._v(_vm._s(_vm.$t('modal.discard')))]),(_vm.provider=="local")?_c('a',{staticClass:"button",class:{ "is-disabled": _vm.isLoading, "is-blue": !_vm.loading },attrs:{"disabled":_vm.isLoading},on:{"click":_vm.create}},[_vm._v(_vm._s(_vm.$t('modal.createuser')))]):_vm._e(),(_vm.provider!="local")?_c('a',{staticClass:"button",class:{ "is-disabled": _vm.isLoading, "is-blue": !_vm.loading },attrs:{"disabled":_vm.isLoading},on:{"click":_vm.create}},[_vm._v(_vm._s(_vm.$t('modal.createuserauthorize')))]):_vm._e()])])])],1)],1)])}
_p.staticRenderFns = [  ];
var _e = {}; _v(_e); Object.assign(_e.default.options||_e.default, _p)
module.exports = _e
    
});
___scope___.file("js/components/modal-delete-page.vue", function(exports, require, module, __filename, __dirname){

var _p = {};
var _v = function(exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: 'modal-delete-page',
    props: ['currentPath'],
    data: function () {
        return {
            isLoading: false
        };
    },
    computed: {
        isShown: function () {
            return this.$store.state.modalDeletePage.shown;
        }
    },
    methods: {
        discard: function () {
            this.isLoading = false;
            this.$store.dispatch('modalDeletePage/close');
        },
        deletePage: function () {
            var self = this;
            this.isLoading = true;
            this.$http.delete(window.location.href).then(function (resp) {
                return resp.json();
            }).then(function (resp) {
                if (resp.ok) {
                    window.location.assign('/');
                }
                else {
                    self.isLoading = false;
                    self.$store.dispatch('alert', {
                        style: 'red',
                        icon: 'ui-2_square-remove-09',
                        msg: resp.msg
                    });
                }
            }).catch(function (err) {
                self.isLoading = false;
                self.$store.dispatch('alert', {
                    style: 'red',
                    icon: 'ui-2_square-remove-09',
                    msg: 'Error: ' + err.body.msg
                });
            });
        }
    }
};

};
_p.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"duration":400}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShown),expression:"isShown"}],staticClass:"modal"},[_c('transition',{attrs:{"name":"modal-background"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShown),expression:"isShown"}],staticClass:"modal-background"})]),_c('div',{staticClass:"modal-container"},[_c('transition',{attrs:{"name":"modal-content"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShown),expression:"isShown"}],staticClass:"modal-content"},[_c('header',{staticClass:"is-red"},[_c('span',[_vm._v(_vm._s(_vm.$t('modal.deletepagetitle')))]),_c('p',{staticClass:"modal-notify",class:{ "is-active": _vm.isLoading }},[_c('i')])]),_c('section',[_c('span',[_vm._v(_vm._s(_vm.$t('modal.deletepagewarning')))])]),_c('footer',[_c('a',{staticClass:"button is-grey is-outlined",on:{"click":_vm.discard}},[_vm._v(_vm._s(_vm.$t('modal.discard')))]),_c('a',{staticClass:"button is-red",on:{"click":_vm.deletePage}},[_vm._v(_vm._s(_vm.$t('modal.delete')))])])])])],1)],1)])}
_p.staticRenderFns = [  ];
var _e = {}; _v(_e); Object.assign(_e.default.options||_e.default, _p)
module.exports = _e
    
});
___scope___.file("js/components/modal-delete-user.vue", function(exports, require, module, __filename, __dirname){

var _p = {};
var _v = function(exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: 'modal-delete-user',
    props: ['currentUser'],
    data: function () {
        return {
            isLoading: false
        };
    },
    computed: {
        isShown: function () {
            return this.$store.state.modalDeleteUser.shown;
        }
    },
    methods: {
        cancel: function () {
            this.isLoading = false;
            this.$store.dispatch('modalDeleteUser/close');
        },
        deleteUser: function () {
            var self = this;
            this.isLoading = true;
            this.$http.delete('/admin/users/' + this.currentUser).then(function (resp) {
                return resp.json();
            }).then(function (resp) {
                if (resp.ok) {
                    window.location.assign('/admin/users');
                }
                else {
                    self.isLoading = false;
                    self.$store.dispatch('alert', {
                        style: 'red',
                        icon: 'ui-2_square-remove-09',
                        msg: resp.msg
                    });
                }
            }).catch(function (err) {
                self.isLoading = false;
                self.$store.dispatch('alert', {
                    style: 'red',
                    icon: 'ui-2_square-remove-09',
                    msg: 'Error: ' + err.body.msg
                });
            });
        }
    }
};

};
_p.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"duration":400}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShown),expression:"isShown"}],staticClass:"modal"},[_c('transition',{attrs:{"name":"modal-background"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShown),expression:"isShown"}],staticClass:"modal-background"})]),_c('div',{staticClass:"modal-container"},[_c('transition',{attrs:{"name":"modal-content"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShown),expression:"isShown"}],staticClass:"modal-content"},[_c('header',{staticClass:"is-red"},[_c('span',[_vm._v(_vm._s(_vm.$t('modal.deleteusertitle')))]),_c('p',{staticClass:"modal-notify",class:{ "is-active": _vm.isLoading }},[_c('i')])]),_c('section',[_c('span',[_vm._v(_vm._s(_vm.$t('modal.deleteuserwarning')))])]),_c('footer',[_c('a',{staticClass:"button is-grey is-outlined",on:{"click":_vm.cancel}},[_vm._v(_vm._s(_vm.$t('modal.abort')))]),_c('a',{staticClass:"button is-red",on:{"click":_vm.deleteUser}},[_vm._v(_vm._s(_vm.$t('modal.delete')))])])])])],1)],1)])}
_p.staticRenderFns = [  ];
var _e = {}; _v(_e); Object.assign(_e.default.options||_e.default, _p)
module.exports = _e
    
});
___scope___.file("js/components/modal-discard-page.vue", function(exports, require, module, __filename, __dirname){

var _p = {};
var _v = function(exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: 'modal-discard-page',
    props: ['mode', 'currentPath'],
    data: function () {
        return {};
    },
    computed: {
        isShown: function () {
            return this.$store.state.modalDiscardPage.shown;
        }
    },
    methods: {
        stay: function () {
            this.$store.dispatch('modalDiscardPage/close');
        },
        discard: function () {
            if (this.mode === 'create') {
                window.location.assign('/');
            }
            else {
                window.location.assign('/' + this.currentPath);
            }
        }
    }
};

};
_p.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"duration":400}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShown),expression:"isShown"}],staticClass:"modal"},[_c('transition',{attrs:{"name":"modal-background"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShown),expression:"isShown"}],staticClass:"modal-background"})]),_c('div',{staticClass:"modal-container"},[_c('transition',{attrs:{"name":"modal-content"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShown),expression:"isShown"}],staticClass:"modal-content"},[_c('header',{staticClass:"is-orange"},[_vm._v(_vm._s(_vm.$t('modal.discardpagetitle')))]),_c('section',[(_vm.mode === "create")?_c('span',[_vm._v(_vm._s(_vm.$t('modal.discardpagecreate')))]):_c('span',[_vm._v(_vm._s(_vm.$t('modal.discardpageedit')))])]),_c('footer',[_c('a',{staticClass:"button is-grey is-outlined",on:{"click":_vm.stay}},[_vm._v(_vm._s(_vm.$t('modal.discardpagestay')))]),_c('a',{staticClass:"button is-orange",on:{"click":_vm.discard}},[_vm._v(_vm._s(_vm.$t('modal.discard')))])])])])],1)],1)])}
_p.staticRenderFns = [  ];
var _e = {}; _v(_e); Object.assign(_e.default.options||_e.default, _p)
module.exports = _e
    
});
___scope___.file("js/components/modal-move-page.vue", function(exports, require, module, __filename, __dirname){

var _p = {};
var _v = function(exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: 'modal-move-page',
    props: ['currentPath'],
    data: function () {
        return {
            movePath: '',
            isLoading: false,
            isInvalid: false
        };
    },
    computed: {
        isShown: function () {
            if (this.$store.state.modalMovePage.shown) {
                this.movePath = this.currentPath;
                this.makeSelection();
            }
            return this.$store.state.modalMovePage.shown;
        }
    },
    methods: {
        makeSelection: function () {
            var self = this;
            self._.delay(function () {
                var startPos = (self._.includes(self.currentPath, '/')) ? self._.lastIndexOf(self.movePath, '/') + 1 : 0;
                self.$helpers.form.setInputSelection(self.$refs.movePageInput, startPos, self.movePath.length);
            }, 100);
        },
        cancel: function () {
            this.$store.dispatch('modalMovePage/close');
        },
        move: function () {
            var _this = this;
            this.isInvalid = false;
            var newDocPath = this.$helpers.pages.makeSafePath(this.movePath);
            if (this._.isEmpty(newDocPath) || newDocPath === this.currentPath || newDocPath === 'home') {
                this.isInvalid = true;
            }
            else {
                this.isLoading = true;
                this.$http.put(window.location.href, {
                    move: newDocPath
                }).then(function (resp) {
                    return resp.json();
                }).then(function (resp) {
                    if (resp.ok) {
                        window.location.assign('/' + newDocPath);
                    }
                    else {
                        _this.loading = false;
                        self.$store.dispatch('alert', {
                            style: 'red',
                            icon: 'ui-2_square-remove-09',
                            msg: resp.msg
                        });
                    }
                }).catch(function (err) {
                    _this.loading = false;
                    self.$store.dispatch('alert', {
                        style: 'red',
                        icon: 'ui-2_square-remove-09',
                        msg: 'Error: ' + err.body.msg
                    });
                });
            }
        }
    }
};

};
_p.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"duration":400}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShown),expression:"isShown"}],staticClass:"modal"},[_c('transition',{attrs:{"name":"modal-background"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShown),expression:"isShown"}],staticClass:"modal-background"})]),_c('div',{staticClass:"modal-container"},[_c('transition',{attrs:{"name":"modal-content"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShown),expression:"isShown"}],staticClass:"modal-content"},[_c('header',{staticClass:"is-indigo"},[_vm._v(_vm._s(_vm.$t('modal.movepagetitle')))]),_c('section',[_c('label',{staticClass:"label"},[_vm._v(_vm._s(_vm.$t('modal.movepagepath')))]),_c('p',{staticClass:"control is-fullwidth",class:{ "is-loading": _vm.isLoading }},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.movePath),expression:"movePath"}],ref:"movePageInput",staticClass:"input",attrs:{"type":"text","placeholder":_vm.$t("modal.movepageplaceholder")},domProps:{"value":(_vm.movePath)},on:{"keyup":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13)){ return null; }_vm.move($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"esc",27)){ return null; }_vm.cancel($event)}],"input":function($event){if($event.target.composing){ return; }_vm.movePath=$event.target.value}}}),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.isInvalid),expression:"isInvalid"}],staticClass:"help is-red"},[_vm._v(_vm._s(_vm.$t('modal.movepageinvalid')))]),_c('span',{staticClass:"note"},[_vm._v(_vm._s(_vm.$t('modal.movepagewarning')))])])]),_c('footer',[_c('a',{staticClass:"button is-grey is-outlined",on:{"click":_vm.cancel}},[_vm._v(_vm._s(_vm.$t('modal.discard')))]),_c('a',{staticClass:"button is-indigo",on:{"click":_vm.move}},[_vm._v(_vm._s(_vm.$t('modal.move')))])])])])],1)],1)])}
_p.staticRenderFns = [  ];
var _e = {}; _v(_e); Object.assign(_e.default.options||_e.default, _p)
module.exports = _e
    
});
___scope___.file("js/components/modal-profile-2fa.vue", function(exports, require, module, __filename, __dirname){

var _p = {};
var _v = function(exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: 'modal-profile-2fa',
    data: function () {
        return {
            isLoading: false,
            error: ''
        };
    },
    computed: {
        isShown: function () {
            return this.$store.state.modalProfile2fa.shown;
        },
        step: function () {
            return this.$store.state.modalProfile2fa.step;
        }
    },
    methods: {
        cancel: function () {
            this.isLoading = false;
            this.$store.dispatch('modalProfile2fa/close');
        },
        confirm: function () {
            var _this = this;
            this.$http.post('/admin/profile/2fa', {
                action: 'setup'
            }).then(function (resp) {
                _this.$store.commit('modalProfile2fa/stepChange', 'qr');
            }).catch(function (err) {
                _this.$store.commit('modalProfile2fa/stepChange', 'error');
                _this.error = err.body.msg;
            });
        }
    }
};

};
_p.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"duration":400}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShown),expression:"isShown"}],staticClass:"modal"},[_c('transition',{attrs:{"name":"modal-background"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShown),expression:"isShown"}],staticClass:"modal-background"})]),_c('div',{staticClass:"modal-container"},[_c('transition',{attrs:{"name":"modal-content"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShown),expression:"isShown"}],staticClass:"modal-content"},[(_vm.step === "qr")?[_c('header',{staticClass:"is-blue"},[_vm._v("Setup your 2FA app")]),_c('section',{staticClass:"modal-loading"},[_c('i'),_c('span',[_vm._v("Wiki.js "+_vm._s(_vm.mode)+" in progress...")]),_c('em',[_vm._v("Please wait")])])]:_vm._e(),(_vm.step === "error")?[_c('header',{staticClass:"is-red"},[_vm._v("Error")]),_c('section',{staticClass:"modal-loading"},[_c('span',[_vm._v(_vm._s(_vm.error))])]),_c('footer',[_c('a',{staticClass:"button is-grey is-outlined",on:{"click":_vm.cancel}},[_vm._v("Discard")])])]:_vm._e(),(_vm.step === "confirm")?[_c('header',{staticClass:"is-blue"},[_vm._v("Two-Factor Authentication")]),_c('section',[_c('label',{staticClass:"label"},[_vm._v("Do you want to enable 2FA?")]),_c('span',{staticClass:"note"},[_vm._v("Two-Factor Authentication (2FA) provides an extra layer of security for your account. Upon login, you will be prompted to enter a token generated by a 2FA app (e.g. Authy, Google Authenticator, etc.).")])]),_c('footer',[_c('a',{staticClass:"button is-grey is-outlined",on:{"click":_vm.cancel}},[_vm._v("Discard")]),_c('a',{staticClass:"button is-blue",on:{"click":_vm.confirm}},[_vm._v("Setup")])])]:_vm._e()],2)])],1)],1)])}
_p.staticRenderFns = [  ];
var _e = {}; _v(_e); Object.assign(_e.default.options||_e.default, _p)
module.exports = _e
    
});
___scope___.file("js/components/modal-upgrade-system.vue", function(exports, require, module, __filename, __dirname){

var _p = {};
var _v = function(exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: 'modal-upgrade-system',
    data: function () {
        return {
            isLoading: false
        };
    },
    computed: {
        isShown: function () {
            return this.$store.state.modalUpgradeSystem.shown;
        },
        mode: function () {
            return this.$store.state.modalUpgradeSystem.mode;
        },
        step: function () {
            return this.$store.state.modalUpgradeSystem.step;
        }
    },
    methods: {
        upgradeCancel: function () {
            this.isLoading = false;
            this.$store.dispatch('modalUpgradeSystem/close');
        },
        upgradeStart: function () {
            var _this = this;
            this.$store.commit('modalUpgradeSystem/stepChange', 'running');
            this.$http.post('/admin/system/install', {
                mode: this.mode
            }).then(function (resp) {
            }).catch(function (err) {
                _this.$store.commit('modalUpgradeSystem/stepChange', 'error');
                _this.error = err.body;
            });
        }
    }
};

};
_p.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"duration":400}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShown),expression:"isShown"}],staticClass:"modal"},[_c('transition',{attrs:{"name":"modal-background"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShown),expression:"isShown"}],staticClass:"modal-background"})]),_c('div',{staticClass:"modal-container"},[_c('transition',{attrs:{"name":"modal-content"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShown),expression:"isShown"}],staticClass:"modal-content"},[(_vm.step === "running")?[_c('header',{staticClass:"is-blue"},[_vm._v("Install")]),_c('section',{staticClass:"modal-loading"},[_c('i'),_c('span',[_vm._v("Wiki.js "+_vm._s(_vm.mode)+" in progress...")]),_c('em',[_vm._v("Please wait")])])]:_vm._e(),(_vm.step === "error")?[_c('header',{staticClass:"is-red"},[_vm._v("Installation Error")]),_c('section',{staticClass:"modal-loading"},[_c('span',[_vm._v(_vm._s(_vm.error))])]),_c('footer',[_c('a',{staticClass:"button is-grey is-outlined",on:{"click":_vm.upgradeCancel}},[_vm._v("Abort")]),_c('a',{staticClass:"button is-deep-orange",on:{"click":_vm.upgradeStart}},[_vm._v("Try Again")])])]:_vm._e(),(_vm.step === "confirm")?[_c('header',{staticClass:"is-deep-orange"},[_vm._v("Are you sure?")]),_c('section',[_c('label',{staticClass:"label"},[_vm._v("You are about to "+_vm._s(_vm.mode)+" Wiki.js.")]),_c('span',{staticClass:"note"},[_vm._v("You will not be able to access your wiki during the operation. Content will not be affected. However, it is your responsibility to ensure you have a backup in the unexpected event content gets lost or corrupted.")])]),_c('footer',[_c('a',{staticClass:"button is-grey is-outlined",on:{"click":_vm.upgradeCancel}},[_vm._v("Abort")]),_c('a',{staticClass:"button is-deep-orange",on:{"click":_vm.upgradeStart}},[_vm._v("Start")])])]:_vm._e()],2)])],1)],1)])}
_p.staticRenderFns = [  ];
var _e = {}; _v(_e); Object.assign(_e.default.options||_e.default, _p)
module.exports = _e
    
});
___scope___.file("js/components/page-loader.vue", function(exports, require, module, __filename, __dirname){

var _p = {};
var _v = function(exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: 'page-loader',
    props: ['text'],
    data: function () {
        return {};
    },
    computed: {
        msg: function () { return this.$store.state.pageLoader.msg; },
        isShown: function () { return this.$store.state.pageLoader.shown; }
    },
    mounted: function () {
        this.$store.commit('pageLoader/msgChange', this.text);
    }
};

};
_p.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"page-loader"}},[(_vm.isShown)?_c('div',{staticClass:"page-loader"},[_c('i'),_c('span',[_vm._v(_vm._s(_vm.msg))])]):_vm._e()])}
_p.staticRenderFns = [  ];
var _e = {}; _v(_e); Object.assign(_e.default.options||_e.default, _p)
module.exports = _e
    
});
___scope___.file("js/components/search.vue", function(exports, require, module, __filename, __dirname){

var _p = {};
var _v = function(exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    data: function () {
        return {
            searchq: '',
            searchres: [],
            searchsuggest: [],
            searchload: 0,
            searchactive: false,
            searchmoveidx: 0,
            searchmovekey: '',
            searchmovearr: []
        };
    },
    watch: {
        searchq: function (val, oldVal) {
            var self = this;
            self.searchmoveidx = 0;
            if (val.length >= 3) {
                self.searchactive = true;
                self.searchload++;
                socket.emit('search', { terms: val }, function (data) {
                    self.searchres = self._.map(data.match, function (m) {
                        m.entryPath = siteRoot + "/" + m.entryPath;
                        return m;
                    });
                    self.searchsuggest = data.suggest;
                    self.searchmovearr = self._.concat([], self.searchres, self.searchsuggest);
                    if (self.searchload > 0) {
                        self.searchload--;
                    }
                });
            }
            else {
                self.searchactive = false;
                self.searchres = [];
                self.searchsuggest = [];
                self.searchmovearr = [];
                self.searchload = 0;
            }
        },
        searchmoveidx: function (val, oldVal) {
            if (val > 0) {
                this.searchmovekey = (this.searchmovearr[val - 1])
                    ? 'res.' + this.searchmovearr[val - 1].entryPath
                    : 'sug.' + this.searchmovearr[val - 1];
            }
            else {
                this.searchmovekey = '';
            }
        }
    },
    methods: {
        useSuggestion: function (sug) {
            this.searchq = sug;
        },
        closeSearch: function () {
            this.searchq = '';
        },
        moveSelectSearch: function () {
            if (this.searchmoveidx < 1) {
                return;
            }
            var i = this.searchmoveidx - 1;
            if (this.searchmovearr[i]) {
                window.location.assign(this.searchmovearr[i].entryPath);
            }
            else {
                this.searchq = this.searchmovearr[i];
            }
        },
        moveDownSearch: function () {
            if (this.searchmoveidx < this.searchmovearr.length) {
                this.searchmoveidx++;
            }
        },
        moveUpSearch: function () {
            if (this.searchmoveidx > 0) {
                this.searchmoveidx--;
            }
        }
    },
    mounted: function () {
        var self = this;
        $('main').on('click', self.closeSearch);
    }
};

};
_p.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"nav-item"},[_c('p',{staticClass:"control",class:{ "is-loading": _vm.searchload > 0 }},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.searchq),expression:"searchq"}],staticClass:"input",attrs:{"id":"search-input","type":"text","autofocus":"autofocus","debounce":"400","placeholder":_vm.$t("search.placeholder")},domProps:{"value":(_vm.searchq)},on:{"keyup":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"esc",27)){ return null; }_vm.closeSearch($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"down",40)){ return null; }_vm.moveDownSearch($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"up",38)){ return null; }_vm.moveUpSearch($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13)){ return null; }_vm.moveSelectSearch($event)}],"input":function($event){if($event.target.composing){ return; }_vm.searchq=$event.target.value}}})]),_c('transition',{attrs:{"name":"searchresults"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.searchactive),expression:"searchactive"}],staticClass:"searchresults"},[_c('p',{staticClass:"searchresults-label"},[_vm._v(_vm._s(_vm.$t('search.results')))]),_c('ul',{staticClass:"searchresults-list"},[(_vm.searchres.length === 0)?_c('li',[_c('a',[_c('em',[_vm._v(_vm._s(_vm.$t('search.nomatch')))])])]):_vm._e(),_vm._l((_vm.searchres),function(sres){return _c('li',{class:{ "is-active": _vm.searchmovekey === "res." + sres.entryPath }},[_c('a',{attrs:{"href":sres.entryPath}},[_vm._v(_vm._s(sres.title))])])})],2),(_vm.searchsuggest.length > 0)?_c('p',{staticClass:"searchresults-label"},[_vm._v(_vm._s(_vm.$t('search.didyoumean')))]):_vm._e(),(_vm.searchsuggest.length > 0)?_c('ul',{staticClass:"searchresults-list"},_vm._l((_vm.searchsuggest),function(sug){return _c('li',{class:{ "is-active": _vm.searchmovekey === "sug." + sug }},[_c('a',{on:{"click":function($event){_vm.useSuggestion(sug)}}},[_vm._v(_vm._s(sug))])])})):_vm._e()])])],1)}
_p.staticRenderFns = [  ];
var _e = {}; _v(_e); Object.assign(_e.default.options||_e.default, _p)
module.exports = _e
    
});
___scope___.file("js/components/toggle.vue", function(exports, require, module, __filename, __dirname){

var _p = {};
var _v = function(exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: 'toggle',
    props: ['value', 'desc'],
    data: function () {
        return {};
    },
    methods: {
        changeToggle: function () {
            this.$emit('input', !this.value);
        }
    }
};

};
_p.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"toggle",class:{ "is-active": _vm.value },on:{"click":_vm.changeToggle}},[_vm._m(0),_c('div',{staticClass:"toggle-text"},[_vm._v(_vm._s(_vm.desc))])])}
_p.staticRenderFns = [ function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"toggle-container"},[_c('div',{staticClass:"toggle-pin"})])} ];
var _e = {}; _v(_e); Object.assign(_e.default.options||_e.default, _p)
module.exports = _e
    
});
___scope___.file("js/components/tree.vue", function(exports, require, module, __filename, __dirname){

var _p = {};
var _v = function(exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: 'tree',
    data: function () {
        return {
            tree: []
        };
    },
    methods: {
        fetch: function (basePath) {
            var self = this;
            self.$store.dispatch('startLoading');
            self.$nextTick(function () {
                socket.emit('treeFetch', { basePath: basePath }, function (data) {
                    if (self.tree.length > 0) {
                        var branch = self._.last(self.tree);
                        branch.hasChildren = true;
                        self._.find(branch.pages, { _id: basePath }).isActive = true;
                    }
                    self.tree.push({
                        hasChildren: false,
                        pages: data
                    });
                    self.$store.dispatch('stopLoading');
                });
            });
        },
        goto: function (entryPath) {
            window.location.assign(siteRoot + '/' + entryPath);
        },
        unfold: function (entryPath) {
            var self = this;
            var lastIndex = 0;
            self._.forEach(self.tree, function (branch) {
                lastIndex++;
                if (self._.find(branch.pages, { _id: entryPath }) !== undefined) {
                    return false;
                }
            });
            self.tree = self._.slice(self.tree, 0, lastIndex);
            var branch = self._.last(self.tree);
            branch.hasChildren = false;
            branch.pages.forEach(function (page) {
                page.isActive = false;
            });
        },
        mainAction: function (page) {
            var self = this;
            if (page.isActive) {
                self.unfold(page._id);
            }
            else if (page.isDirectory) {
                self.fetch(page._id);
            }
            else {
                self.goto(page._id);
            }
        }
    },
    mounted: function () {
        var basePath = window.location.pathname.slice(0, -4);
        if (basePath.length > 1) {
            basePath = basePath.slice(1);
        }
        this.fetch(basePath);
    }
};

};
_p.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"has-collapsable-nav"},_vm._l((_vm.tree),function(treeItem){return _c('ul',{staticClass:"collapsable-nav",class:{ "has-children": treeItem.hasChildren }},_vm._l((treeItem.pages),function(page){return _c('li',{class:{ "is-active": page.isActive }},[_c('a',{on:{"click":function($event){_vm.mainAction(page)}}},[(page._id !== "home")?[_c('i',{class:{ "icon-folder2": page.isDirectory, "icon-file-text-o": !page.isDirectory }}),_c('span',[_vm._v(_vm._s(page.title))])]:[_c('i',{staticClass:"icon-home"}),_c('span',[_vm._v(_vm._s(_vm.$t('nav.home')))])]],2),(page.isDirectory && page.isEntry)?_c('a',{staticClass:"is-pagelink",on:{"click":function($event){_vm.goto(page._id)}}},[_c('i',{staticClass:"icon-file-text-o"}),_c('i',{staticClass:"icon-arrow-right2"})]):_vm._e()])}))}))}
_p.staticRenderFns = [  ];
var _e = {}; _v(_e); Object.assign(_e.default.options||_e.default, _p)
module.exports = _e
    
});
___scope___.file("js/pages/admin-edit-user.component.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'admin-edit-user',
  props: ['usrdata'],
  data: function data() {
    return {
      id: '',
      email: '',
      password: '********',
      name: '',
      rights: [],
      roleoverride: 'none'
    };
  },

  methods: {
    addRightsRow: function addRightsRow() {
      this.rights.push({
        role: 'write',
        path: '/',
        exact: false,
        deny: false
      });
    },
    removeRightsRow: function removeRightsRow(idx) {
      this._.pullAt(this.rights, idx);
      this.$forceUpdate();
    },
    saveUser: function saveUser() {
      var self = this;
      var formattedRights = this._.cloneDeep(this.rights);
      switch (this.roleoverride) {
        case 'admin':
          formattedRights.push({
            role: 'admin',
            path: '/',
            exact: false,
            deny: false
          });
          break;
      }
      this.$http.post(window.location.href, {
        password: this.password,
        name: this.name,
        rights: JSON.stringify(formattedRights)
      }).then(function (resp) {
        self.$store.dispatch('alert', {
          style: 'green',
          icon: 'check',
          msg: 'Changes have been applied successfully.'
        });
      }).catch(function (err) {
        self.$store.dispatch('alert', {
          style: 'red',
          icon: 'square-cross',
          msg: 'Error: ' + err.body.msg
        });
      });
    }
  },
  mounted: function mounted() {
    var usr = JSON.parse(this.usrdata);
    this.id = usr._id;
    this.email = usr.email;
    this.name = usr.name;

    if (this._.find(usr.rights, { role: 'admin' })) {
      this.rights = this._.reject(usr.rights, ['role', 'admin']);
      this.roleoverride = 'admin';
    } else {
      this.rights = usr.rights;
    }
  }
};
});
___scope___.file("js/pages/admin-profile.component.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'admin-profile',
  props: ['email', 'name', 'provider', 'tfaIsActive'],
  data: function data() {
    return {
      password: '********',
      passwordVerify: '********'
    };
  },

  computed: {
    tfaStatus: function tfaStatus() {
      return this.tfaIsActive ? this.$t('profile.tfaenabled') : this.$t('profile.tfadisabled');
    }
  },
  methods: {
    saveUser: function saveUser() {
      var self = this;
      if (this.password !== this.passwordVerify) {
        return self.$store.dispatch('alert', {
          style: 'red',
          icon: 'square-cross',
          msg: 'The passwords don\'t match. Try again.'
        });
      }
      this.$http.post(window.location.href, {
        password: this.password,
        name: this.name
      }).then(function (resp) {
        self.$store.dispatch('alert', {
          style: 'green',
          icon: 'check',
          msg: 'Changes have been applied successfully.'
        });
      }).catch(function (err) {
        self.$store.dispatch('alert', {
          style: 'red',
          icon: 'square-cross',
          msg: 'Error: ' + err.body.msg
        });
      });
    }
  }
};
});
___scope___.file("js/pages/admin-settings.component.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'admin-settings',
  data: function data() {
    return {};
  },

  methods: {
    flushcache: function flushcache() {
      window.alert('Coming soon!');
    },
    resetaccounts: function resetaccounts() {
      window.alert('Coming soon!');
    },
    flushsessions: function flushsessions() {
      window.alert('Coming soon!');
    }
  }
};
});
___scope___.file("js/pages/admin-theme.component.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'admin-theme',
  props: ['themedata'],
  data: function data() {
    return {
      primary: 'indigo',
      alt: 'blue-grey',
      footer: 'blue-grey',
      codedark: 'true',
      codecolorize: 'true'
    };
  },

  watch: {
    primary: function primary(val) {
      this.$root.changeTheme(this.$data);
    },
    alt: function alt(val) {
      this.$root.changeTheme(this.$data);
    },
    footer: function footer(val) {
      this.$root.changeTheme(this.$data);
    }
  },
  methods: {
    saveTheme: function saveTheme() {
      var self = this;
      this.$http.post(window.location.href, self.$data).then(function (resp) {
        self.$store.dispatch('alert', {
          style: 'green',
          icon: 'check',
          msg: 'Theme settings have been applied successfully.'
        });
      }).catch(function (err) {
        self.$store.dispatch('alert', {
          style: 'red',
          icon: 'square-cross',
          msg: 'Error: ' + err.body.msg
        });
      });
    },
    resetTheme: function resetTheme() {
      this.primary = 'indigo';
      this.alt = 'blue-grey';
      this.footer = 'blue-grey';
      this.codedark = 'true';
      this.codecolorize = 'true';
    }
  },
  mounted: function mounted() {
    var theme = JSON.parse(this.themedata);
    this.primary = theme.primary;
    this.alt = theme.alt;
    this.footer = theme.footer;
    this.codedark = theme.code.dark.toString();
    this.codecolorize = theme.code.colorize.toString();
  }
};
});
___scope___.file("js/pages/content-view.component.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'content-view',
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    var self = this;
    $('a.toc-anchor').each(function (i, elm) {
      var hashText = $(elm).attr('href').slice(1);
      $(elm).on('click', function (ev) {
        ev.stopImmediatePropagation();
        self.$store.dispatch('anchor/open', hashText);
        return false;
      });
    });
  }
};
});
___scope___.file("js/components/editor.component.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var mde = void 0;

exports.default = {
  name: 'editor',
  props: ['currentPath'],
  data: function data() {
    return {};
  },

  computed: {
    insertContent: function insertContent() {
      return this.$store.state.editor.insertContent;
    }
  },
  methods: {
    insert: function insert(content) {
      if (mde.codemirror.doc.somethingSelected()) {
        mde.codemirror.execCommand('singleSelection');
      }
      mde.codemirror.doc.replaceSelection(this.insertContent);
    },
    save: function save() {
      var self = this;
      this.$http.put(window.location.href, {
        markdown: mde.value()
      }).then(function (resp) {
        return resp.json();
      }).then(function (resp) {
        if (resp.ok) {
          window.location.assign(siteRoot + '/' + self.currentPath);
        } else {
          self.$store.dispatch('alert', {
            style: 'red',
            icon: 'ui-2_square-remove-09',
            msg: resp.msg
          });
        }
      }).catch(function (err) {
        self.$store.dispatch('alert', {
          style: 'red',
          icon: 'ui-2_square-remove-09',
          msg: 'Error: ' + err.body.msg
        });
      });
    }
  },
  mounted: function mounted() {
    var _this = this;

    var self = this;
    FuseBox.import('/js/simplemde/simplemde.min.js', function (SimpleMDE) {
      mde = new SimpleMDE({
        autofocus: true,
        autoDownloadFontAwesome: false,
        element: _this.$refs.editorTextArea,
        placeholder: 'Enter Markdown formatted content here...',
        spellChecker: false,
        status: false,
        toolbar: [{
          name: 'bold',
          action: SimpleMDE.toggleBold,
          className: 'icon-bold',
          title: 'Bold'
        }, {
          name: 'italic',
          action: SimpleMDE.toggleItalic,
          className: 'icon-italic',
          title: 'Italic'
        }, {
          name: 'strikethrough',
          action: SimpleMDE.toggleStrikethrough,
          className: 'icon-strikethrough',
          title: 'Strikethrough'
        }, '|', {
          name: 'heading-1',
          action: SimpleMDE.toggleHeading1,
          className: 'icon-header fa-header-x fa-header-1',
          title: 'Header (Level 1)'
        }, {
          name: 'heading-2',
          action: SimpleMDE.toggleHeading2,
          className: 'icon-header fa-header-x fa-header-2',
          title: 'Header (Level 2)'
        }, {
          name: 'heading-3',
          action: SimpleMDE.toggleHeading3,
          className: 'icon-header fa-header-x fa-header-3',
          title: 'Header (Level 3)'
        }, {
          name: 'quote',
          action: SimpleMDE.toggleBlockquote,
          className: 'nc-icon-outline text_quote',
          title: 'Quote'
        }, '|', {
          name: 'unordered-list',
          action: SimpleMDE.toggleUnorderedList,
          className: 'nc-icon-outline text_list-bullet',
          title: 'Bullet List'
        }, {
          name: 'ordered-list',
          action: SimpleMDE.toggleOrderedList,
          className: 'nc-icon-outline text_list-numbers',
          title: 'Numbered List'
        }, '|', {
          name: 'link',
          action: function action(editor) {
            window.alert('Coming soon!');
          },
          className: 'nc-icon-outline ui-2_link-68',
          title: 'Insert Link'
        }, {
          name: 'image',
          action: function action(editor) {
            self.$store.dispatch('editorFile/open', { mode: 'image' });
          },
          className: 'nc-icon-outline design_image',
          title: 'Insert Image'
        }, {
          name: 'file',
          action: function action(editor) {
            self.$store.dispatch('editorFile/open', { mode: 'file' });
          },
          className: 'nc-icon-outline files_zip-54',
          title: 'Insert File'
        }, {
          name: 'video',
          action: function action(editor) {
            self.$store.dispatch('editorVideo/open');
          },
          className: 'nc-icon-outline media-1_video-64',
          title: 'Insert Video Player'
        }, '|', {
          name: 'inline-code',
          action: function action(editor) {
            if (!editor.codemirror.doc.somethingSelected()) {
              return self.$store.dispatch('alert', {
                style: 'orange',
                icon: 'design_drag',
                msg: 'Invalid selection. Select at least 1 character.'
              });
            }
            var curSel = editor.codemirror.doc.getSelections();
            curSel = self._.map(curSel, function (s) {
              return '`' + s + '`';
            });
            editor.codemirror.doc.replaceSelections(curSel);
          },
          className: 'nc-icon-outline arrows-4_enlarge-46',
          title: 'Inline Code'
        }, {
          name: 'code-block',
          action: function action(editor) {
            self.$store.dispatch('editorCodeblock/open', {
              initialContent: mde.codemirror.doc.somethingSelected() ? mde.codemirror.doc.getSelection() : ''
            });
          },
          className: 'nc-icon-outline design_code',
          title: 'Code Block'
        }, '|', {
          name: 'table',
          action: function action(editor) {
            window.alert('Coming soon!');
          },
          className: 'nc-icon-outline ui-2_grid-square',
          title: 'Insert Table'
        }, {
          name: 'horizontal-rule',
          action: SimpleMDE.drawHorizontalRule,
          className: 'nc-icon-outline design_distribute-vertical',
          title: 'Horizontal Rule'
        }],
        shortcuts: {
          'toggleBlockquote': null,
          'toggleFullScreen': null,
          'toggleOrderedList': null,
          'toggleCodeBlock': null
        }
      });

      $(window).bind('keydown', function (ev) {
        if ((ev.ctrlKey || ev.metaKey) && !ev.altKey) {
          switch (String.fromCharCode(ev.which).toLowerCase()) {
            case 's':
              ev.preventDefault();
              self.save();
              break;
          }
        }
      });

      _this.$root.$on('editor/save', _this.save);
      _this.$root.$on('editor/insert', _this.insert);

      _this.$store.dispatch('pageLoader/complete');
    });
  }
};
});
___scope___.file("js/pages/source-view.component.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'source-view',
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    var self = this;
    FuseBox.import('/js/ace/ace.js', function (ace) {
      var scEditor = ace.edit('source-display');
      scEditor.setTheme('ace/theme/dawn');
      scEditor.getSession().setMode('ace/mode/markdown');
      scEditor.setOption('fontSize', '14px');
      scEditor.setOption('hScrollBarAlwaysVisible', false);
      scEditor.setOption('wrap', true);
      scEditor.setOption('showPrintMargin', false);
      scEditor.setReadOnly(true);
      scEditor.renderer.updateFull();
      scEditor.renderer.on('afterRender', function () {
        self.$store.dispatch('pageLoader/complete');
      });
    });
  }
};
});
});
FuseBox.target = "browser"

FuseBox.import("default/index.js");
FuseBox.main("default/index.js");
})
(FuseBox)
(function(FuseBox){FuseBox.$fuse$=FuseBox;
var __process_env__ = {"NODE_ENV":"development"};
FuseBox.pkg("default", {}, function(___scope___){
___scope___.file("configure.js", function(exports, require, module, __filename, __dirname){

'use strict';

require('./scss/configure.scss');
require('./js/configure.js');
});
___scope___.file("scss/configure.scss", function(exports, require, module, __filename, __dirname){

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
@import 'components/footer';
@import 'components/form';
@import 'components/grid';
@import 'components/modal';
@import 'components/nav';
@import 'components/panel';
@import 'components/typography';

.welcome {
	text-align: center;
	padding: 50px 0 15px 0;
	color: mc('grey', '700');

	h2 {
		margin: 0;
	}

}

i.icon-loader {
  display: inline-block;
  color: mc('indigo', '500')
}
i.icon-check {
  color: mc('green', '500')
}
i.icon-square-cross {
  color: mc('red', '500')
}
i.icon-warning-outline {
  color: mc('orange', '500')
}

.tst-welcome-leave-active, .tst-welcome-enter-active {
  transition: all .5s;
  overflow-y: hidden;
}
.tst-welcome-leave, .tst-welcome-enter-to {
  opacity: 1;
  max-height: 200px;
}
.tst-welcome-leave-to, .tst-welcome-enter {
  opacity: 0;
  max-height: 0;
  padding-top: 0;
}

.progress-bar {
  width: 150px;
  height: 10px;
  background-color: mc('indigo', '50');
  border:1px solid mc('indigo', '100');
  border-radius: 3px;
  position: absolute;
  left: 15px;
  top: 21px;
  padding: 1px;

  > div {
    width: 5px;
    height: 6px;
    background-color: mc('indigo', '200');
    border-radius: 2px;
    transition: all 1s ease;
  }

}

});
___scope___.file("js/configure.js", function(exports, require, module, __filename, __dirname){

'use strict';

/* global appconfig, runmode */

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _vue = require("vue/dist/vue.js");

var _vue2 = _interopRequireDefault(_vue);

var _veeValidate = require("vee-validate");

var _veeValidate2 = _interopRequireDefault(_veeValidate);

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_veeValidate2.default, {
  enableAutoClasses: true,
  classNames: {
    touched: 'is-touched', // the control has been blurred
    untouched: 'is-untouched', // the control hasn't been blurred
    valid: 'is-valid', // model is valid
    invalid: 'is-invalid', // model is invalid
    pristine: 'is-pristine', // control has not been interacted with
    dirty: 'is-dirty' // control has been interacted with
  }
});

(0, _jquery2.default)(document).ready(function ($) {
  new _vue2.default({ // eslint-disable-line no-new
    el: 'main',
    data: {
      loading: false,
      state: 'welcome',
      syscheck: {
        ok: false,
        error: '',
        results: []
      },
      dbcheck: {
        ok: false,
        error: ''
      },
      gitcheck: {
        ok: false,
        error: ''
      },
      final: {
        ok: false,
        error: '',
        results: []
      },
      conf: {
        title: appconfig.title || 'Wiki',
        host: appconfig.host || 'http://',
        port: appconfig.port || 80,
        lang: appconfig.lang || 'en',
        public: appconfig.public === true,
        db: appconfig.db || 'mongodb://localhost:27017/wiki',
        pathData: './data',
        pathRepo: './repo',
        gitUseRemote: appconfig.git !== false,
        gitUrl: '',
        gitBranch: 'master',
        gitAuthType: 'ssh',
        gitAuthSSHKey: '',
        gitAuthUser: '',
        gitAuthPass: '',
        gitAuthSSL: true,
        gitShowUserEmail: true,
        gitServerEmail: '',
        adminEmail: '',
        adminPassword: '',
        adminPasswordConfirm: ''
      },
      considerations: {
        https: false,
        port: false,
        localhost: false
      }
    },
    computed: {
      currentProgress: function currentProgress() {
        var perc = '0%';
        switch (this.state) {
          case 'welcome':
            perc = '0%';
            break;
          case 'syscheck':
            perc = this.syscheck.ok ? '15%' : '5%';
            break;
          case 'general':
            perc = '20%';
            break;
          case 'considerations':
            perc = '30%';
            break;
          case 'db':
            perc = '35%';
            break;
          case 'dbcheck':
            perc = this.dbcheck.ok ? '50%' : '40%';
            break;
          case 'paths':
            perc = '55%';
            break;
          case 'git':
            perc = '60%';
            break;
          case 'gitcheck':
            perc = this.gitcheck.ok ? '75%' : '65%';
            break;
          case 'admin':
            perc = '80%';
            break;
        }
        return perc;
      }
    },
    mounted: function mounted() {
      if (appconfig.paths) {
        this.conf.pathData = appconfig.paths.data || './data';
        this.conf.pathRepo = appconfig.paths.repo || './repo';
      }
      if (appconfig.git !== false && _lodash2.default.isPlainObject(appconfig.git)) {
        this.conf.gitUrl = appconfig.git.url || '';
        this.conf.gitBranch = appconfig.git.branch || 'master';
        this.conf.gitShowUserEmail = appconfig.git.showUserEmail !== false;
        this.conf.gitServerEmail = appconfig.git.serverEmail || '';
        if (_lodash2.default.isPlainObject(appconfig.git.auth)) {
          this.conf.gitAuthType = appconfig.git.auth.type || 'ssh';
          this.conf.gitAuthSSHKey = appconfig.git.auth.privateKey || '';
          this.conf.gitAuthUser = appconfig.git.auth.username || '';
          this.conf.gitAuthPass = appconfig.git.auth.password || '';
          this.conf.gitAuthSSL = appconfig.git.auth.sslVerify !== false;
        }
      }
    },
    methods: {
      proceedToWelcome: function proceedToWelcome(ev) {
        this.state = 'welcome';
        this.loading = false;
      },
      proceedToSyscheck: function proceedToSyscheck(ev) {
        var self = this;
        this.state = 'syscheck';
        this.loading = true;
        self.syscheck = {
          ok: false,
          error: '',
          results: []
        };

        _lodash2.default.delay(function () {
          _axios2.default.post('/syscheck').then(function (resp) {
            if (resp.data.ok === true) {
              self.syscheck.ok = true;
              self.syscheck.results = resp.data.results;
            } else {
              self.syscheck.ok = false;
              self.syscheck.error = resp.data.error;
            }
            self.loading = false;
            self.$nextTick();
          }).catch(function (err) {
            window.alert(err.message);
          });
        }, 1000);
      },
      proceedToGeneral: function proceedToGeneral(ev) {
        var self = this;
        self.state = 'general';
        self.loading = false;
        self.$nextTick(function () {
          self.$validator.validateAll('general');
        });
      },
      proceedToConsiderations: function proceedToConsiderations(ev) {
        this.considerations = {
          https: !_lodash2.default.startsWith(this.conf.host, 'https'),
          port: false, // TODO
          localhost: _lodash2.default.includes(this.conf.host, 'localhost')
        };
        this.state = 'considerations';
        this.loading = false;
      },
      proceedToDb: function proceedToDb(ev) {
        var self = this;
        if (runmode.staticMongo) {
          return self.proceedToDbcheck();
        }
        self.state = 'db';
        self.loading = false;
        self.$nextTick(function () {
          self.$validator.validateAll('db');
        });
      },
      proceedToDbcheck: function proceedToDbcheck(ev) {
        var self = this;
        this.state = 'dbcheck';
        this.loading = true;
        self.dbcheck = {
          ok: false,
          error: ''
        };

        _lodash2.default.delay(function () {
          _axios2.default.post('/dbcheck', {
            db: self.conf.db
          }).then(function (resp) {
            if (resp.data.ok === true) {
              self.dbcheck.ok = true;
            } else {
              self.dbcheck.ok = false;
              self.dbcheck.error = resp.data.error;
            }
            self.loading = false;
            self.$nextTick();
          }).catch(function (err) {
            window.alert(err.message);
          });
        }, 1000);
      },
      proceedToPaths: function proceedToPaths(ev) {
        var self = this;
        self.state = 'paths';
        self.loading = false;
        self.$nextTick(function () {
          self.$validator.validateAll('paths');
        });
      },
      proceedToGit: function proceedToGit(ev) {
        var self = this;
        self.state = 'git';
        self.loading = false;
        self.$nextTick(function () {
          self.$validator.validateAll('git');
        });
      },
      proceedToGitCheck: function proceedToGitCheck(ev) {
        var self = this;
        this.state = 'gitcheck';
        this.loading = true;
        self.gitcheck = {
          ok: false,
          results: [],
          error: ''
        };

        _lodash2.default.delay(function () {
          _axios2.default.post('/gitcheck', self.conf).then(function (resp) {
            if (resp.data.ok === true) {
              self.gitcheck.ok = true;
              self.gitcheck.results = resp.data.results;
            } else {
              self.gitcheck.ok = false;
              self.gitcheck.error = resp.data.error;
            }
            self.loading = false;
            self.$nextTick();
          }).catch(function (err) {
            window.alert(err.message);
          });
        }, 1000);
      },
      proceedToAdmin: function proceedToAdmin(ev) {
        var self = this;
        self.state = 'admin';
        self.loading = false;
        self.$nextTick(function () {
          self.$validator.validateAll('admin');
        });
      },
      proceedToFinal: function proceedToFinal(ev) {
        var self = this;
        self.state = 'final';
        self.loading = true;
        self.final = {
          ok: false,
          error: '',
          results: []
        };

        _lodash2.default.delay(function () {
          _axios2.default.post('/finalize', self.conf).then(function (resp) {
            if (resp.data.ok === true) {
              self.final.ok = true;
              self.final.results = resp.data.results;
            } else {
              self.final.ok = false;
              self.final.error = resp.data.error;
            }
            self.loading = false;
            self.$nextTick();
          }).catch(function (err) {
            window.alert(err.message);
          });
        }, 1000);
      },
      finish: function finish(ev) {
        var self = this;
        self.state = 'restart';

        _lodash2.default.delay(function () {
          _axios2.default.post('/restart', {}).then(function (resp) {
            _lodash2.default.delay(function () {
              window.location.assign(self.conf.host);
            }, 30000);
          }).catch(function (err) {
            window.alert(err.message);
          });
        }, 1000);
      }
    }
  });
});
});
});
FuseBox.target = "browser"

FuseBox.import("default/configure.js");
FuseBox.main("default/configure.js");
})
(function(e){function r(e){var r=e.charCodeAt(0),n=e.charCodeAt(1);if((d||58!==n)&&(r>=97&&r<=122||64===r)){if(64===r){var t=e.split("/"),i=t.splice(2,t.length).join("/");return[t[0]+"/"+t[1],i||void 0]}var o=e.indexOf("/");if(o===-1)return[e];var a=e.substring(0,o),u=e.substring(o+1);return[a,u]}}function n(e){return e.substring(0,e.lastIndexOf("/"))||"./"}function t(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];for(var n=[],t=0,i=arguments.length;t<i;t++)n=n.concat(arguments[t].split("/"));for(var o=[],t=0,i=n.length;t<i;t++){var a=n[t];a&&"."!==a&&(".."===a?o.pop():o.push(a))}return""===n[0]&&o.unshift(""),o.join("/")||(o.length?"/":".")}function i(e){var r=e.match(/\.(\w{1,})$/);return r&&r[1]?e:e+".js"}function o(e){if(d){var r,n=document,t=n.getElementsByTagName("head")[0];/\.css$/.test(e)?(r=n.createElement("link"),r.rel="stylesheet",r.type="text/css",r.href=e):(r=n.createElement("script"),r.type="text/javascript",r.src=e,r.async=!0),t.insertBefore(r,t.firstChild)}}function a(e,r){for(var n in e)e.hasOwnProperty(n)&&r(n,e[n])}function u(e){return{server:require(e)}}function f(e,n){var o=n.path||"./",a=n.pkg||"default",f=r(e);if(f&&(o="./",a=f[0],n.v&&n.v[a]&&(a=a+"@"+n.v[a]),e=f[1]),e)if(126===e.charCodeAt(0))e=e.slice(2,e.length),o="./";else if(!d&&(47===e.charCodeAt(0)||58===e.charCodeAt(1)))return u(e);var s=m[a];if(!s){if(d&&"electron"!==h.target)throw"Package not found "+a;return u(a+(e?"/"+e:""))}e=e?e:"./"+s.s.entry;var l,c=t(o,e),v=i(c),p=s.f[v];return!p&&v.indexOf("*")>-1&&(l=v),p||l||(v=t(c,"/","index.js"),p=s.f[v],p||(v=c+".js",p=s.f[v]),p||(p=s.f[c+".jsx"]),p||(v=c+"/index.jsx",p=s.f[v])),{file:p,wildcard:l,pkgName:a,versions:s.v,filePath:c,validPath:v}}function s(e,r,n){if(void 0===n&&(n={}),!d)return r(/\.(js|json)$/.test(e)?v.require(e):"");if(n&&n.ajaxed===e)return console.error(e,"does not provide a module");var i=new XMLHttpRequest;i.onreadystatechange=function(){if(4==i.readyState)if(200==i.status){var n=i.getResponseHeader("Content-Type"),o=i.responseText;/json/.test(n)?o="module.exports = "+o:/javascript/.test(n)||(o="module.exports = "+JSON.stringify(o));var a=t("./",e);h.dynamic(a,o),r(h.import(e,{ajaxed:e}))}else console.error(e,"not found on request"),r(void 0)},i.open("GET",e,!0),i.send()}function l(e,r){var n=g[e];if(n)for(var t in n){var i=n[t].apply(null,r);if(i===!1)return!1}}function c(e,r){if(void 0===r&&(r={}),58===e.charCodeAt(4)||58===e.charCodeAt(5))return o(e);var t=f(e,r);if(t.server)return t.server;var i=t.file;if(t.wildcard){var a=new RegExp(t.wildcard.replace(/\*/g,"@").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&").replace(/@@/g,".*").replace(/@/g,"[a-z0-9$_-]+"),"i"),u=m[t.pkgName];if(u){var p={};for(var g in u.f)a.test(g)&&(p[g]=c(t.pkgName+"/"+g));return p}}if(!i){var h="function"==typeof r,x=l("async",[e,r]);if(x===!1)return;return s(e,function(e){return h?r(e):null},r)}var _=t.pkgName;if(i.locals&&i.locals.module)return i.locals.module.exports;var w=i.locals={},y=n(t.validPath);w.exports={},w.module={exports:w.exports},w.require=function(e,r){return c(e,{pkg:_,path:y,v:t.versions})},d||!v.require.main?w.require.main={filename:"./",paths:[]}:w.require.main=v.require.main;var j=[w.module.exports,w.require,w.module,t.validPath,y,_];return l("before-import",j),i.fn.apply(0,j),l("after-import",j),w.module.exports}if(e.FuseBox)return e.FuseBox;var d="undefined"!=typeof window&&window.navigator,v=d?window:global;d&&(v.global=window),e=d&&"undefined"==typeof __fbx__dnm__?e:module.exports;var p=d?window.__fsbx__=window.__fsbx__||{}:v.$fsbx=v.$fsbx||{};d||(v.require=require);var m=p.p=p.p||{},g=p.e=p.e||{},h=function(){function r(){}return r.global=function(e,r){return void 0===r?v[e]:void(v[e]=r)},r.import=function(e,r){return c(e,r)},r.on=function(e,r){g[e]=g[e]||[],g[e].push(r)},r.exists=function(e){try{var r=f(e,{});return void 0!==r.file}catch(e){return!1}},r.remove=function(e){var r=f(e,{}),n=m[r.pkgName];n&&n.f[r.validPath]&&delete n.f[r.validPath]},r.main=function(e){return this.mainFile=e,r.import(e,{})},r.expose=function(r){var n=function(n){var t=r[n].alias,i=c(r[n].pkg);"*"===t?a(i,function(r,n){return e[r]=n}):"object"==typeof t?a(t,function(r,n){return e[n]=i[r]}):e[t]=i};for(var t in r)n(t)},r.dynamic=function(r,n,t){this.pkg(t&&t.pkg||"default",{},function(t){t.file(r,function(r,t,i,o,a){var u=new Function("__fbx__dnm__","exports","require","module","__filename","__dirname","__root__",n);u(!0,r,t,i,o,a,e)})})},r.flush=function(e){var r=m.default;for(var n in r.f)e&&!e(n)||delete r.f[n].locals},r.pkg=function(e,r,n){if(m[e])return n(m[e].s);var t=m[e]={};return t.f={},t.v=r,t.s={file:function(e,r){return t.f[e]={fn:r}}},n(t.s)},r.addPlugin=function(e){this.plugins.push(e)},r.packages=m,r.isBrowser=d,r.isServer=!d,r.plugins=[],r}();return d||(v.FuseBox=h),e.FuseBox=h}(this))
ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,n){"use strict";var i=e("../lib/oop"),o=e("./text_highlight_rules").TextHighlightRules,r=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@[\\w\\d_]+"},r.getTagRule(),{defaultToken:"comment.doc",caseInsensitive:!0}]}};i.inherits(r,o),r.getTagRule=function(e){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},r.getStartRule=function(e){return{token:"comment.doc",regex:"\\/\\*(?=\\*)",next:e}},r.getEndRule=function(e){return{token:"comment.doc",regex:"\\*\\/",next:e}},t.DocCommentHighlightRules=r}),ace.define("ace/mode/golang_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(e,t,n){var i=e("../lib/oop"),o=e("./doc_comment_highlight_rules").DocCommentHighlightRules,r=e("./text_highlight_rules").TextHighlightRules,a=function(){var e=this.createKeywordMapper({keyword:"else|break|case|return|goto|if|const|select|continue|struct|default|switch|for|range|func|import|package|chan|defer|fallthrough|go|interface|map|range|select|type|var","constant.language":"nil|true|false|iota","support.function":"new|close|cap|copy|panic|panicln|print|println|len|make|delete|real|recover|imag|append","support.type":"string|uint8|uint16|uint32|uint64|int8|int16|int32|int64|float32|float64|complex64|complex128|byte|rune|uint|int|uintptr|bool|error"},""),t="\\\\(?:[0-7]{3}|x\\h{2}|u{4}|U\\h{6}|[abfnrtv'\"\\\\])".replace(/\\h/g,"[a-fA-F\\d]");this.$rules={start:[{token:"comment",regex:"\\/\\/.*$"},o.getStartRule("doc-start"),{token:"comment.start",regex:"\\/\\*",next:"comment"},{token:"string",regex:/"(?:[^"\\]|\\.)*?"/},{token:"string",regex:"`",next:"bqstring"},{token:"constant.numeric",regex:"'(?:[^\\'\ud800-\udbff]|[\ud800-\udbff][\udc00-\udfff]|"+t.replace('"',"")+")'"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:["keyword","text","entity.name.function"],regex:"(func)(\\s+)([a-zA-Z_$][a-zA-Z0-9_$]*)\\b"},{token:function(t){return"("==t[t.length-1]?[{type:e(t.slice(0,-1))||"support.function",value:t.slice(0,-1)},{type:"paren.lparen",value:t.slice(-1)}]:e(t)||"identifier"},regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b\\(?"},{token:"keyword.operator",regex:"!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|==|=|!=|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^="},{token:"punctuation.operator",regex:"\\?|\\:|\\,|\\;|\\."},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],comment:[{token:"comment.end",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}],bqstring:[{token:"string",regex:"`",next:"start"},{defaultToken:"string"}]},this.embedRules(o,"doc-",[o.getEndRule("start")])};i.inherits(a,r),t.GolangHighlightRules=a}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(e,t,n){"use strict";var i=e("../range").Range,o=function(){};(function(){this.checkOutdent=function(e,t){return!!/^\s+$/.test(e)&&/^\s*\}/.test(t)},this.autoOutdent=function(e,t){var n=e.getLine(t).match(/^(\s*\})/);if(!n)return 0;var o=n[1].length,r=e.findMatchingBracket({row:t,column:o});if(!r||r.row==t)return 0;var a=this.$getIndent(e.getLine(r.row));e.replace(new i(t,0,t,o-1),a)},this.$getIndent=function(e){return e.match(/^\s*/)[0]}}).call(o.prototype),t.MatchingBraceOutdent=o}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(e,t,n){"use strict";var i=e("../../lib/oop"),o=e("../../range").Range,r=e("./fold_mode").FoldMode,a=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};i.inherits(a,r),function(){this.foldingStartMarker=/(\{|\[)[^\}\]]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var i=e.getLine(n);if(this.singleLineBlockCommentRe.test(i)&&!this.startRegionRe.test(i)&&!this.tripleStarBlockCommentRe.test(i))return"";var o=this._getFoldWidgetBase(e,t,n);return!o&&this.startRegionRe.test(i)?"start":o},this.getFoldWidgetRange=function(e,t,n,i){var o=e.getLine(n);if(this.startRegionRe.test(o))return this.getCommentRegionBlock(e,o,n);var r=o.match(this.foldingStartMarker);if(r){g=r.index;if(r[1])return this.openingBracketBlock(e,r[1],n,g);var a=e.getCommentFoldRange(n,g+r[0].length,1);return a&&!a.isMultiLine()&&(i?a=this.getSectionRange(e,n):"all"!=t&&(a=null)),a}if("markbegin"!==t&&(r=o.match(this.foldingStopMarker))){var g=r.index+r[0].length;return r[1]?this.closingBracketBlock(e,r[1],n,g):e.getCommentFoldRange(n,g,-1)}},this.getSectionRange=function(e,t){for(var n=e.getLine(t),i=n.search(/\S/),r=t,a=n.length,g=t+=1,c=e.getLength();++t<c;){var s=(n=e.getLine(t)).search(/\S/);if(-1!==s){if(i>s)break;var l=this.getFoldWidgetRange(e,"all",t);if(l){if(l.start.row<=r)break;if(l.isMultiLine())t=l.end.row;else if(i==s)break}g=t}}return new o(r,a,g,e.getLine(g).length)},this.getCommentRegionBlock=function(e,t,n){for(var i=t.search(/\s*$/),r=e.getLength(),a=n,g=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,c=1;++n<r;){t=e.getLine(n);var s=g.exec(t);if(s&&(s[1]?c--:c++,!c))break}var l=n;if(l>a)return new o(a,i,l,t.length)}}.call(a.prototype)}),ace.define("ace/mode/golang",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/golang_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"],function(e,t,n){var i=e("../lib/oop"),o=e("./text").Mode,r=e("./golang_highlight_rules").GolangHighlightRules,a=e("./matching_brace_outdent").MatchingBraceOutdent,g=e("./behaviour/cstyle").CstyleBehaviour,c=e("./folding/cstyle").FoldMode,s=function(){this.HighlightRules=r,this.$outdent=new a,this.foldingRules=new c,this.$behaviour=new g};i.inherits(s,o),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(e,t,n){var i=this.$getIndent(t),o=this.getTokenizer().getLineTokens(t,e),r=o.tokens;o.state;return r.length&&"comment"==r[r.length-1].type?i:("start"==e&&t.match(/^.*[\{\(\[]\s*$/)&&(i+=n),i)},this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)},this.$id="ace/mode/golang"}.call(s.prototype),t.Mode=s});
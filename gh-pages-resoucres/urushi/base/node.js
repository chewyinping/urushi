define("node",[],function(){"use strict";function e(e){return e&&!isNaN(e.nodeType)}function n(n){return e(n)&&document.ELEMENT_NODE===n.nodeType}function t(n){return e(n)&&document.TEXT_NODE===n.nodeType}function o(n){return e(n)&&document.COMMENT_NODE===n.nodeType}function r(n){return e(n)&&document.DOCUMENT_FRAGMENT_NODE===n.nodeType}function i(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function d(e,d){var u,f,l,c,s;if(!n(e))throw new Error("Not element node.");if(void 0===d||null===d)return!1;if(d instanceof Array||d instanceof jQuery){if(!d.length)return!1}else if(d instanceof NodeList){if(!d.length)return!1;d=Array.prototype.slice.call(d)}else{if(""===d)return!1;d=r(d)?Array.prototype.slice.call(d.childNodes):[d]}for(i(e),u=0,f=d.length;f>u;u++)if(l=d[u],n(l)||t(l)||o(l)||r(l))e.appendChild(l);else if(l instanceof jQuery)for(c=0,s=l.length;s>c;c++)e.appendChild(l[c]);else e.appendChild(document.createTextNode(""+l));return!0}var u={};return u.isNode=e,u.isElementNode=n,u.isTextNode=t,u.isCommentNode=o,u.isFragmentNode=r,u.setDomContents=d,u.clearDomContents=i,u});
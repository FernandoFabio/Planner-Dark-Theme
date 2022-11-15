console.log("content");
var s = document.createElement('idioma');
s.src = chrome.runtime.getURL('idioma.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);
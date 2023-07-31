// ==UserScript==
// @name         github-close-404
// @namespace    https://github.com/mefengl
// @version      0.0.3
// @description  Auto-closes GitHub repo pages that return a 404 error.
// @author       mefengl
// @match        https://github.com/*/*
// @license      MIT
// @grant        none
// @updateURL    https://github.com/mefengl/userscript-github-close-404/raw/main/github-close-404.usr.js
// ==/UserScript==

(function () {
  'use strict';

  var errorImage = document.querySelector('img[alt="404 “This is not the web page you are looking for”"]');
  if (errorImage) {
    window.close();
  }
})();

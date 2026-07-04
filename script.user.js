// ==UserScript==
// @name         Unmute Images on GitHub
// @namespace    https://greasyfork.org/users/1002054-igorskyflyer
// @version      1.0.0
// @description  A UserScript that removes the muted background color from images on GitHub.
// @author       igorskyflyer
// @match        https://github.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @run-at       document-start
// @grant        none
// @compatible   chrome
// @compatible   firefox
// @compatible   opera
// @compatible   safari
// @compatible   edge
// @license      GPL-3.0-or-later
// @homepageURL  https://github.com/igorskyflyer/userscript-github-unmute-images
// @supportURL   https://greasyfork.org/users/1002054-igorskyflyer
// ==/UserScript==

// @ts-nocheck

;(() => {
  const style = document.createElement('style')

  style.textContent = 'img.js-gh-image-fallback { background-color: transparent !important; }'
  document.documentElement.appendChild(style)
})()

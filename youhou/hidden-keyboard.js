// ==UserScript==
// @name        TypingClub 隐藏键盘（原vip功能）
// @namespace   https://github.com/nelvko/script/blob/master/youhou/hidden-keyboard.js
// @match        *://*.edclub.com/sportal/*
// @match        *://*.typingclub.com/sportal/*
// @grant       none
// @version     1.0
// @author      nelvko
// @license MIT
// @description 闯关时隐藏下面的键盘
// @icon https://static.typingclub.com/m/favicon.png
// @updateURL https://raw.githubusercontent.com/nelvko/script/refs/heads/master/youhou/hidden-keyboard.js
// @downloadURL https://raw.githubusercontent.com/nelvko/script/refs/heads/master/youhou/hidden-keyboard.js
// ==/UserScript==
(function () {
    'use strict';
    const observer = new MutationObserver((mutations, observer) => {
        const keyboard = document.getElementsByClassName("keyboard-plugin");
        const ad = document.getElementById("adslot_video")
        // console.log("keyboard", keyboard);
        // console.log("ad", ad);

        if (keyboard && keyboard[0]) {
            keyboard[0].style.setProperty('visibility', 'hidden', 'important');
        }
        if (ad) {
            ad.style.setProperty('visibility', 'hidden', 'important');
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
})();

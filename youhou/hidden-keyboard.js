// ==UserScript==
// @name        hidden-keyboard
// @namespace   https://github.com/nelvko/script/youhou/hidden-keyboard.js
// @match        *://www.edclub.com/sportal/*
// @match        *://www.typingclub.com/sportal/*
// @grant       none
// @version     1.0
// @author      nelvko
// @description 2024/10/17 16:56:20
// ==/UserScript==
(function () {
    'use strict';
    // 创建一个 MutationObserver 来监听元素的加载
    const observer = new MutationObserver(() => {
        const keyboard = document.getElementsByClassName("keyboard-plugin");
        const ad = document.getElementById("adslot_video")
        // console.log("keyboard", keyboard);
        // console.log("ad", ad);

        if (keyboard && keyboard[0]) {
            keyboard[0].style.setProperty('visibility', 'hidden', 'important');
        }
        if (ad) {
            ad.style.setProperty('visibility', 'hidden', 'important');
            // observer.disconnect();
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();

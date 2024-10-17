// ==UserScript==
// @name        隐藏键盘
// @namespace   https://github.com/nelvko/script/blob/master/youhou/hidden-keyboard.js
// @match        *://www.edclub.com/sportal/*
// @match        *://www.typingclub.com/sportal/*
// @grant       none
// @version     1.0
// @author      nelvko
// @description 闯关时隐藏下面的键盘（原vip功能）
// @updateURL https://raw.githubusercontent.com/nelvko/script/refs/heads/master/youhou/hidden-keyboard.js
// @downloadURL https://raw.githubusercontent.com/nelvko/script/refs/heads/master/youhou/hidden-keyboard.js
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

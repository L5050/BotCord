
"use strict";

const { remote } = require('electron');

document.getElementById("minimize").addEventListener("click", function (e) {
    var window = remote.getCurrentWindow();
    window.minimize();
});

document.getElementById("screenSnap").addEventListener("click", function (e) {
    var window = remote.getCurrentWindow();
    if (!window.isMaximized()) {
        window.maximize();
    } else {
        window.unmaximize();
    }
});

document.getElementById("exit").addEventListener("click", function (e) {
    var window = remote.getCurrentWindow();
    window.close();
});

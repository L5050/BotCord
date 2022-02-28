
"use strict";

const electron = require('electron');
const { app, BrowserWindow } = electron;
const path = require('path');
const url = require('url');
const pack = require('./package.json');

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 1300,
        height: 750,
        frame: false,
        backgroundColor: '#FFF',
        webPreferences: {
            nodeIntegration: true, // Use node in the render js files
            contextIsolation: false, // Makes node in the render js files work in newer electron versions
            enableRemoteModule: true // Allow the remote module to be used in the render js files
        },
        icon: __dirname + '/resources/icons/logo.png',
    });

    win.loadURL(
        url.pathToFileURL(path.join(__dirname, 'dontOpenMe.html')).toString()
    );

    // win.webContents.on('new-window', (e, url) => {
    //     e.preventDefault();
    //     electron.shell.openExternal(url.replace(/\/$/, ''));
    // });
    win.webContents.setWindowOpenHandler(({ url }) => {
        electron.shell.openExternal(url.replace(/\/$/, ''));
        return { action: 'allow' }
    });

    // win.webContents.on('did-create-window', child => {
    //     // For example...
    //     child.webContents('will-navigate', e => {
    //         e.preventDefault()
    //     })
    // })

    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});

app.on('web-contents-created', (e, contents) => {
    contents.on('new-window', newEvent => {
        console.log("Blocked by 'new-window'")
        newEvent.preventDefault();
    });

    contents.on('will-navigate', newEvent => {
        console.log("Blocked by 'will-navigate'")
        newEvent.preventDefault()
    });

    contents.setWindowOpenHandler(({ url }) => {
        setImmediate(() => {
            shell.openExternal(url);
        });
        return { action: 'allow' }
    })
});

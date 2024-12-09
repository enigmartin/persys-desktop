const { contextBridge, ipcRenderer } = require('electron/renderer')
const fs=require('fs');
const os=require('os');
const buffer=require('buffer');

//import { contextBridge, ipcRenderer } from 'electron/renderer';
//import fs from 'fs';
//import os from 'os';
//import buffer from 'buffer';

const launch=(file)=>{
    ipcRenderer.send('launch-program',file);
};
const logout=(file)=>{
    ipcRenderer.send('logout',file);
};
const paper=(file)=>{
    ipcRenderer.send('open-paper',file);
};
const player=(media)=>{
    ipcRenderer.send('open-player',media);
};
const gallery=(content)=>{
    ipcRenderer.send('open-gallery',content);
};
const cinema=(content)=>{
    ipcRenderer.send('open-cinema',content);
};
const chat=(content)=>{
    ipcRenderer.send('open-chat',content);
};
const files=(content)=>{
    ipcRenderer.send('open-files',content);
};
const library=(content)=>{
    ipcRenderer.send('open-library',content);
};
const todo=(content)=>{
    ipcRenderer.send('open-todo',content);
};
const cardclip=(content)=>{
    ipcRenderer.send('open-cardclip',content);
};
const options=(content)=>{
    ipcRenderer.send('open-options',content);
};
const monitor=(content)=>{
    ipcRenderer.send('open-monitor',content);
};
const closeSidebar=(content)=>{
    ipcRenderer.send('set-closeSidebar',content);
};
const openSidebar=(content)=>{
    ipcRenderer.send('set-openSidebar',content);
};
const setCookie=(content)=>{
    ipcRenderer.send('set-cookie',content);
};
const getCookies=(content)=>{
    ipcRenderer.send('get-cookies',content);
};
const rag=(content)=>{
    ipcRenderer.send('open-rag',content);
};
const plaintext=(content)=>{
    ipcRenderer.send('open-plaintext',content);
};

//
ipcRenderer.on('player-media',(event,media)=>{
    contextBridge.exposeInMainWorld('player', {
        media
    });
});
ipcRenderer.on('paper-content',(event,content)=>{
    contextBridge.exposeInMainWorld('paper', {
        content
    });
});
ipcRenderer.on('gallery-content',(event,content)=>{
    contextBridge.exposeInMainWorld('gallery', {
        content
    });
});
ipcRenderer.on('cinema-content',(event,content)=>{
    contextBridge.exposeInMainWorld('cinema', {
        content
    });
});
ipcRenderer.on('chat-content',(event,content)=>{
    contextBridge.exposeInMainWorld('chat', {
        content
    });
});
ipcRenderer.on('library-content',(event,content)=>{
    contextBridge.exposeInMainWorld('library', {
        content
    });
});
ipcRenderer.on('todo-content',(event,content)=>{
    contextBridge.exposeInMainWorld('todo', {
        content
    });
});
ipcRenderer.on('cardclip-content',(event,content)=>{
    contextBridge.exposeInMainWorld('cardclip', {
        content
    });
});
ipcRenderer.on('options-content',(event,content)=>{
    contextBridge.exposeInMainWorld('options', {
        content
    });
});
ipcRenderer.on('cookie-content',(event,content)=>{
    contextBridge.exposeInMainWorld('cookies', {
        content
    });
});
ipcRenderer.on('rag-content',(event,content)=>{
    contextBridge.exposeInMainWorld('rag', {
        content
    });
});
ipcRenderer.on('plaintext-content',(event,content)=>{
    contextBridge.exposeInMainWorld('plaintext', {
        content
    });
});
//

contextBridge.exposeInMainWorld('persys', {
    fs,
    os,
    buffer,
    launch,
    logout,
    paper,
    player,
    gallery,
    cinema,
    chat,
    files,
    library,
    todo,
    cardclip,
    options,
    monitor,
    closeSidebar,
    openSidebar,
    setCookie,
    getCookies,
    rag,
    plaintext
})


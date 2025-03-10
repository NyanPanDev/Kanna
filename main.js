const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1024,
        height: 860,
    })

    win.loadFile('src/index.html')
}

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})  
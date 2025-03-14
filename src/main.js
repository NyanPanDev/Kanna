const { app, BrowserWindow, Tray, Menu, ipcMain, nativeTheme, nativeImage } = require('electron')
const path = require('node:path')

let tray

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1024,
        height: 860,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        },
        icon: './README_icon.jpg'

    })

    win.loadFile(path.join(__dirname, 'index.html'))
}

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.whenReady().then(() => {
    const icon = nativeImage.createFromPath('./README_icon.jpg')
    tray = new Tray(icon)

    const contextMenu = Menu.buildFromTemplate([
      { label: 'Item1', type: 'radio' },
      { label: 'Item2', type: 'radio' },
      { label: 'Item3', type: 'radio', checked: true },
      { label: 'Item4', type: 'radio' }
    ])
    
    tray.setContextMenu(contextMenu)
    tray.setToolTip('This is my application')
    tray.setTitle('This is my title')
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})  
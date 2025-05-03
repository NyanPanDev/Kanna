import { BrowserWindow, shell, app, ipcMain } from 'electron'
import { join } from 'path'
import { registerWindowIPC } from '@/lib/window/ipcEvents'
import appIcon from '@/resources/build/kanna.png?asset'
import { CancelError, download } from 'electron-dl'

export function createAppWindow(): void {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 1200,
    show: false,
    backgroundColor: '#1c1c1c',
    icon: appIcon,
    frame: false,
    titleBarStyle: 'hiddenInset',
    title: 'Kanna',
    maximizable: false,
    resizable: false,
    webPreferences: {
      preload: join(__dirname, '../preload/preload.js'),
      sandbox: false,
      webSecurity: false,
      nodeIntegration: true,
      contextIsolation: false,
    },
  })

  // Register IPC events for the main window.
  registerWindowIPC(mainWindow)

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (!app.isPackaged && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }

  // Handle the download event
  ipcMain.on('download-image', async (event, url: string) => {
    try {
      if (mainWindow) {
        console.log("downloading image " + url)
        await download(mainWindow, url, {
          saveAs: true,
          showProgressBar: true,
        });
      }
    } catch (error) {
      if (error instanceof CancelError) {
        console.log("User has cancelled the download")
      } else {
        console.error("Error during download: {}", error)
      }
    }
  });

}

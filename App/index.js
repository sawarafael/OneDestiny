const {
  app,
  BrowserWindow,
  ipcMain,
  Menu
} = require('electron');
const path = require('path');
let mainWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    resizable: true,
    fullscreen: false,
    autoHideMenuBar: false,
    frame: true,
    backgroundColor: '#1F2250',
    icon: __dirname + './assets/imgs/favicon.png',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // and load the index.html of the app.
  mainWindow.loadFile('./public/pages/login.html');

  mainWindow.on('closed', function () {

    mainWindow = null;
  });
}

app.on('ready', createWindow);


app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});



app.on('activate', function () {

  if (mainWindow === null) createWindow();

});
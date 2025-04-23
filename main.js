const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // Charge d'abord index.html
  win.loadFile(path.join(__dirname, 'pages', 'index.html'));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// ✅ نافذة الأنشطة
ipcMain.on('open-activites', () => {
  const activitesWindow = new BrowserWindow({
    width: 700,
    height: 600,
    title: "Activités",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  activitesWindow.loadFile('pages/activites.html');
});

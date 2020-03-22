const remote = require("electron").remote;

// When document has loaded, initialise
document.onreadystatechange = () => {
  if (document.readyState == "complete") {
    handleWindowControls();
  }
};

const customTitlebar = require("custom-electron-titlebar");

new customTitlebar.Titlebar({
  backgroundColor: customTitlebar.Color.fromHex("#06022b"),
});


function handleWindowControls() {
  let win = remote.getCurrentWindow();
  // Make minimise/maximise/restore/close buttons work when they are clicked
  document.getElementById("min-button").addEventListener("click", event => {
    win.minimize();
  });

  document.getElementById("max-button").addEventListener("click", event => {
    win.maximize();
  });

  document.getElementById("restore-button").addEventListener("click", event => {
    win.unmaximize();
  });

  document.getElementById("close-button").addEventListener("click", event => {
    win.close();
  });

  // Toggle maximise/restore buttons when maximisation/unmaximisation occurs
  toggleMaxRestoreButtons();
  win.on("maximize", toggleMaxRestoreButtons);
  win.on("unmaximize", toggleMaxRestoreButtons);

  function toggleMaxRestoreButtons() {
    if (win.isMaximized()) {
      document.body.classList.add("maximized");
    } else {
      document.body.classList.remove("maximized");
    }
  }
}

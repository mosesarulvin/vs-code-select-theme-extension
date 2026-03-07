# Select Theme VS Code Extension

A simple and convenient VS Code extension that allows you to quickly browse and switch between all your installed color themes.

---

## 🚀 Features

- **Quick theme switching:** Instantly open the theme picker from the top-right color palette icon
- **Current theme indicator:** The status bar always shows your current theme name
- **Easy access:** Command Palette and toolbar icon
- **Auto-updates:** Status bar updates automatically when you change themes

---

## 🛠️ How to Install

1. Download or clone this repository
2. Open the folder in VS Code
3. Run `npm install` to install dependencies
4. Package the extension:
   ```sh
   npx vsce package --allow-missing-repository --no-dependencies
   ```
5. In VS Code, go to Extensions (Ctrl+Shift+X), click the `...` menu, choose **Install from VSIX...**, and select the generated `.vsix` file

---

## 🧑‍💻 How to Run & Debug (Development)

1. Open the project folder in VS Code
2. Press `F5` to launch an **Extension Development Host**
3. In the new window, use the color palette icon or Command Palette to test the extension
4. Use the debug console to see logs

---

## 🎨 How to Use

- **Toolbar Icon:** Click the color palette icon (🎨) in the top-right corner of the editor to open the theme picker
- **Command Palette:** Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac), type `Select Theme`, and press Enter
- **Status Bar:** The current theme name is always shown in the bottom right. Click it to manually refresh if needed

---

## 📝 Release Notes

### 0.0.1
- Initial release of Select Theme extension

---

## ℹ️ Troubleshooting
- If the status bar does not update, click it to refresh
- Some theme names may not appear if using an older VS Code version (see extension logs for details)

---

**Enjoy switching themes instantly!**

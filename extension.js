const vscode = require('vscode');

function activate(context) {
    console.log('Theme Selector Extension Activated');
    
    // --- STATUS BAR ITEM ---
    const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    statusBarItem.tooltip = 'Click to select theme';
    statusBarItem.command = 'select-theme.selectTheme';
    
    // Function to update status bar with appropriate icon
    function updateStatusBar() {
        const config = vscode.workspace.getConfiguration();
        const currentTheme = config.get('workbench.colorTheme');
        const autoDetect = config.get('window.autoDetectColorScheme');
        
        let icon = '🔴';
        if (autoDetect) {
            icon = '🟢';
        }

        statusBarItem.text = `${icon} ${currentTheme}`;
    }
    
    updateStatusBar();
    statusBarItem.show();

    // --- THEME CHANGE LISTENER ---
    console.log('Registering theme change listener...');
    const configListener = vscode.workspace.onDidChangeConfiguration(event => {
        if (event.affectsConfiguration('workbench.colorTheme') || event.affectsConfiguration('window.autoDetectColorScheme')) {
            console.log('Theme or auto-detect setting changed!');
            updateStatusBar();
        }
    });

    // --- COMMAND 1: Open Theme Picker ---
    const customToggle = vscode.commands.registerCommand('select-theme.selectTheme', async function () {
        try {
            await vscode.commands.executeCommand('workbench.action.selectTheme');
        } catch (error) {
            console.error('THEME PICKER ERROR:', error);
            vscode.window.showErrorMessage('Failed to open theme picker');
        }
    });

    // --- COMMAND 2: Toggle Between Light/Dark Default Themes ---
    const standardToggle = vscode.commands.registerCommand('select-theme.standardTheme', async function () {
        try {
            const config = vscode.workspace.getConfiguration();
            const currentTheme = config.get('workbench.colorTheme');
            const autoDetect = config.get('window.autoDetectColorScheme');

            const lightTheme = 'Default Light+';
            const darkTheme = 'Default Dark+';
            
            const newTheme = currentTheme === lightTheme ? darkTheme : lightTheme;

            if (autoDetect) {
                await config.update('window.autoDetectColorScheme', false, vscode.ConfigurationTarget.Global);
            }
            
            await config.update('workbench.colorTheme', newTheme, vscode.ConfigurationTarget.Global);
            console.log('Theme toggled to:', newTheme);
            
        } catch (error) {
            console.error('THEME TOGGLE ERROR:', error);
            vscode.window.showErrorMessage('Failed to toggle theme');
        }
    });

    // --- COMMAND 3: Toggle Auto-Detect Color Scheme ---
    const toggleAutoDetect = vscode.commands.registerCommand('select-theme.toggleAutoDetect', async function () {
        try {
            const config = vscode.workspace.getConfiguration();
            const currentAutoDetect = config.get('window.autoDetectColorScheme');
            
            // Toggle the setting
            const newAutoDetect = !currentAutoDetect;
            await config.update('window.autoDetectColorScheme', newAutoDetect, vscode.ConfigurationTarget.Global);
            
            const status = newAutoDetect ? 'enabled' : 'disabled';
            const icon = newAutoDetect ? '🟢' : '🔴';
            
            vscode.window.showInformationMessage(`${icon} Auto-detect color scheme ${status}`);
            console.log(`Auto-detect ${status}`);
            
        } catch (error) {
            console.error('AUTO-DETECT TOGGLE ERROR:', error);
            vscode.window.showErrorMessage('Failed to toggle auto-detect');
        }
    });

    context.subscriptions.push(customToggle, standardToggle, toggleAutoDetect, statusBarItem, configListener);
    console.log('All commands registered');
}

function deactivate() {
    console.log('Theme Selector Extension Deactivated');
}

module.exports = {
    activate,
    deactivate
};
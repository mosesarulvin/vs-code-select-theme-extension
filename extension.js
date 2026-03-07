const vscode = require('vscode');

function activate(context) {

    let disposable = vscode.commands.registerCommand('select-theme.selectTheme', async function () {

        // Open the theme picker
        await vscode.commands.executeCommand('workbench.action.selectTheme');

        return;

    });

    context.subscriptions.push(disposable);
}

function deactivate() { }

module.exports = {
    activate,
    deactivate
};
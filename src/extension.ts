
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const config = vscode.workspace.getConfiguration('global-variable-hover');
  const enable = config.get<boolean>('enabled');
  if (!enable) {
    return;
  }
  registerHoverProvider(context)

}
function registerHoverProvider(context : vscode.ExtensionContext) {
   context.subscriptions.push(
    vscode.languages.registerHoverProvider('*', {
      provideHover(document, position, token) { 
        const wordRange = document.getWordRangeAtPosition(position);
        if(!wordRange) return ;
        const word = document.getText(wordRange);
        const config = vscode.workspace.getConfiguration("global-variable-hover").get<Record<string, string>>("config");
        if(!config) return;
        const hoverValue = config[word];
        if (!hoverValue) return null;
        const markdownString = new vscode.MarkdownString();
        markdownString.appendText(hoverValue)
        return new vscode.Hover(markdownString, wordRange);
      }
    })
   )
}
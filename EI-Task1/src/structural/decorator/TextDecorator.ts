import { TextEditor } from './TextEditor';

export abstract class TextDecorator implements TextEditor {
    protected editor: TextEditor;

    constructor(editor: TextEditor) {
        this.editor = editor;
    }

    public abstract render(): string;
}

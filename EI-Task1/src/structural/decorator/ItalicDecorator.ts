import { TextDecorator } from './TextDecorator';

export class ItalicDecorator extends TextDecorator {
    public render(): string {
        return `<i>${this.editor.render()}</i>`;
    }
}

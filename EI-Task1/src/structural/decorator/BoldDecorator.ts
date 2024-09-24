import { TextDecorator } from './TextDecorator';

export class BoldDecorator extends TextDecorator {
    public render(): string {
        return `<b>${this.editor.render()}</b>`;
    }
}

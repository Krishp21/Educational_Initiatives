import { TextEditor } from "./TextEditor";

export class PlainTextEditor implements TextEditor {
    private text: string;

    constructor(text: string) {
        this.text = text;
    }

    public render(): string {
        return this.text;
    }
}

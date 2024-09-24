import { PlainTextEditor } from './PlainTextEditor';
import { BoldDecorator } from './BoldDecorator';
import { ItalicDecorator } from './ItalicDecorator';
import { TextEditor } from './TextEditor'; // Ensure correct import

export function decoratorUseCase1(): void {
    let editor: TextEditor = new PlainTextEditor('Hello, World!');
    console.log('Plain Text:', editor.render());

    editor = new BoldDecorator(editor);
    console.log('Bold Text:', editor.render());

    editor = new ItalicDecorator(editor);
    console.log('Bold & Italic Text:', editor.render());
}

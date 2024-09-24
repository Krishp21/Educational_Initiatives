"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decoratorUseCase1 = decoratorUseCase1;
const PlainTextEditor_1 = require("./PlainTextEditor");
const BoldDecorator_1 = require("./BoldDecorator");
const ItalicDecorator_1 = require("./ItalicDecorator");
function decoratorUseCase1() {
    let editor = new PlainTextEditor_1.PlainTextEditor('Hello, World!');
    console.log('Plain Text:', editor.render());
    editor = new BoldDecorator_1.BoldDecorator(editor);
    console.log('Bold Text:', editor.render());
    editor = new ItalicDecorator_1.ItalicDecorator(editor);
    console.log('Bold & Italic Text:', editor.render());
}

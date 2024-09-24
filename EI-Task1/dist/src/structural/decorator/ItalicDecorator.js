"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItalicDecorator = void 0;
const TextDecorator_1 = require("./TextDecorator");
class ItalicDecorator extends TextDecorator_1.TextDecorator {
    render() {
        return `<i>${this.editor.render()}</i>`;
    }
}
exports.ItalicDecorator = ItalicDecorator;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoldDecorator = void 0;
const TextDecorator_1 = require("./TextDecorator");
class BoldDecorator extends TextDecorator_1.TextDecorator {
    render() {
        return `<b>${this.editor.render()}</b>`;
    }
}
exports.BoldDecorator = BoldDecorator;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlainTextEditor = void 0;
class PlainTextEditor {
    constructor(text) {
        this.text = text;
    }
    render() {
        return this.text;
    }
}
exports.PlainTextEditor = PlainTextEditor;

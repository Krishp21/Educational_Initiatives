"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegacySystemAdapter = void 0;
const LegacySystem_1 = require("./LegacySystem");
class LegacySystemAdapter {
    constructor() {
        this.legacySystem = new LegacySystem_1.LegacySystem();
    }
    processData(data) {
        // Adapt the interface
        this.legacySystem.legacyOperation(data);
    }
}
exports.LegacySystemAdapter = LegacySystemAdapter;

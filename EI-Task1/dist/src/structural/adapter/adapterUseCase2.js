"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adapterUseCase2 = adapterUseCase2;
const LegacySystemAdapter_1 = require("./LegacySystemAdapter");
function adapterUseCase2() {
    const adapter = new LegacySystemAdapter_1.LegacySystemAdapter();
    adapter.processData('Sample Data for Legacy System');
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickSort = void 0;
class QuickSort {
    sort(data) {
        if (data.length <= 1)
            return data;
        const pivot = data[data.length - 1];
        const left = []; // Explicitly typed as number[]
        const right = [];
        for (let i = 0; i < data.length - 1; i++) {
            data[i] < pivot ? left.push(data[i]) : right.push(data[i]);
        }
        return [...this.sort(left), pivot, ...this.sort(right)];
    }
}
exports.QuickSort = QuickSort;

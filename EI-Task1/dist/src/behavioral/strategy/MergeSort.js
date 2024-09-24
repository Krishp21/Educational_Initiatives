"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeSort = void 0;
class MergeSort {
    sort(data) {
        if (data.length <= 1)
            return data;
        const mid = Math.floor(data.length / 2);
        const left = this.sort(data.slice(0, mid));
        const right = this.sort(data.slice(mid));
        return this.merge(left, right);
    }
    merge(left, right) {
        const result = [];
        let i = 0, j = 0;
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                result.push(left[i++]);
            }
            else {
                result.push(right[j++]);
            }
        }
        return result.concat(left.slice(i)).concat(right.slice(j));
    }
}
exports.MergeSort = MergeSort;

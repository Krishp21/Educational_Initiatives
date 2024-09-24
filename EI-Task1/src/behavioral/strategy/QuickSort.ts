import { SortingStrategy } from './SortingStrategy';

export class QuickSort implements SortingStrategy {
    public sort(data: number[]): number[] {
        if (data.length <= 1) return data;
        const pivot = data[data.length - 1];
        const left: number[] = []; // Explicitly typed as number[]
        const right: number[] = [];

        for (let i = 0; i < data.length - 1; i++) {
            data[i] < pivot ? left.push(data[i]) : right.push(data[i]);
        }
        return [...this.sort(left), pivot, ...this.sort(right)];
    }
}

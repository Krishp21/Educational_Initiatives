import { SortingStrategy } from './SortingStrategy';
import { QuickSort } from './QuickSort';
import { MergeSort } from './MergeSort';
import { Logger, LogLevel } from '../../utils/Logger';
import { ExceptionHandler } from '../../utils/ExceptionHandler';

export class DataProcessor {
    private logger: Logger;
    private exceptionHandler: ExceptionHandler;

    constructor() {
        this.logger = Logger.getInstance();
        this.exceptionHandler = new ExceptionHandler();
    }

    public sortData(strategy: SortingStrategy, data: number[]): number[] {
        try {
            this.logger.log(`Sorting data using ${strategy.constructor.name}.`, LogLevel.INFO);
            const sortedData = strategy.sort(data);
            this.logger.log(`Data sorted successfully.`, LogLevel.INFO);
            return sortedData;
        } catch (error) {
            this.exceptionHandler.handleError(error as Error);
            return [];
        }
    }
}

export function strategyUseCase2(): void {
    const processor = new DataProcessor();
    const data = [5, 3, 8, 4, 2];

    const quickSort = new QuickSort();
    const sortedWithQuickSort = processor.sortData(quickSort, data);
    console.log('QuickSort Result:', sortedWithQuickSort);

    const mergeSort = new MergeSort();
    const sortedWithMergeSort = processor.sortData(mergeSort, data);
    console.log('MergeSort Result:', sortedWithMergeSort);
}

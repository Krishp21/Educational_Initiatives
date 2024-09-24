"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataProcessor = void 0;
exports.strategyUseCase2 = strategyUseCase2;
const QuickSort_1 = require("./QuickSort");
const MergeSort_1 = require("./MergeSort");
const Logger_1 = require("../../utils/Logger");
const ExceptionHandler_1 = require("../../utils/ExceptionHandler");
class DataProcessor {
    constructor() {
        this.logger = Logger_1.Logger.getInstance();
        this.exceptionHandler = new ExceptionHandler_1.ExceptionHandler();
    }
    sortData(strategy, data) {
        try {
            this.logger.log(`Sorting data using ${strategy.constructor.name}.`, Logger_1.LogLevel.INFO);
            const sortedData = strategy.sort(data);
            this.logger.log(`Data sorted successfully.`, Logger_1.LogLevel.INFO);
            return sortedData;
        }
        catch (error) {
            this.exceptionHandler.handleError(error);
            return [];
        }
    }
}
exports.DataProcessor = DataProcessor;
function strategyUseCase2() {
    const processor = new DataProcessor();
    const data = [5, 3, 8, 4, 2];
    const quickSort = new QuickSort_1.QuickSort();
    const sortedWithQuickSort = processor.sortData(quickSort, data);
    console.log('QuickSort Result:', sortedWithQuickSort);
    const mergeSort = new MergeSort_1.MergeSort();
    const sortedWithMergeSort = processor.sortData(mergeSort, data);
    console.log('MergeSort Result:', sortedWithMergeSort);
}

import { observerUseCase1 } from './src/behavioral/observer/observerUseCase1';
import {observerUseCase2 } from './src/behavioral/observer/observerUseCase2';

import { strategyUseCase1} from './src/behavioral/strategy/strategyUseCase1';
import {strategyUseCase2 } from './src/behavioral/strategy/strategyUseCase2';

import { singletonUseCase1 } from './src/creational/singleton/singletonUseCase1';
import { singletonUseCase2 } from './src/creational/singleton/singletonUseCase2';

import { factoryUseCase1} from './src/creational/factory/factoryUseCase1';
import { factoryUseCase2 } from './src/creational/factory/factoryUseCase2';

import { adapterUseCase1} from './src/structural/adapter/adapterUseCase1';
import { adapterUseCase2 } from './src/structural/adapter/adapterUseCase2';

import { decoratorUseCase1 } from './src/structural/decorator/decoratorUseCase1'
import {decoratorUseCase2 } from './src/structural/decorator/decoratorUseCase2'

function runAllUseCases() {
    console.log('--- Observer Pattern Use Case 1: Stock Price Monitoring ---');
    observerUseCase1();

    console.log('\n--- Observer Pattern Use Case 2: Event Subscription System ---');
    observerUseCase2();

    console.log('\n--- Strategy Pattern Use Case 1: Payment Processing ---');
    strategyUseCase1();

    console.log('\n--- Strategy Pattern Use Case 2: Sorting Algorithms ---');
    strategyUseCase2();

    console.log('\n--- Singleton Pattern Use Case 1: Configuration Manager ---');
    singletonUseCase1();

    console.log('\n--- Singleton Pattern Use Case 2: Database Connection ---');
    singletonUseCase2();

    console.log('\n--- Factory Pattern Use Case 1: Logger Factory ---');
    factoryUseCase1();

    console.log('\n--- Factory Pattern Use Case 2: Notification Factory ---');
    factoryUseCase2();

    console.log('\n--- Adapter Pattern Use Case 1: Payment Gateway Integration ---');
    adapterUseCase1();

    console.log('\n--- Adapter Pattern Use Case 2: Legacy System Integration ---');
    adapterUseCase2();

    console.log('\n--- Decorator Pattern Use Case 1: Enhancing Text Editor ---');
    decoratorUseCase1();

    console.log('\n--- Decorator Pattern Use Case 2: Adding Features to Notifications ---');
    decoratorUseCase2();
}

runAllUseCases();

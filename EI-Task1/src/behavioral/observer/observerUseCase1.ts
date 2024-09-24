import { Stock } from './Stock';
import { Investor } from './Investor';

export function observerUseCase1(): void {
    const stock = new Stock('AAPL', 150);
    const investor1 = new Investor('Alice');
    const investor2 = new Investor('Bob');

    stock.addInvestor(investor1);
    stock.addInvestor(investor2);

    stock.setPrice(155);
    stock.setPrice(160);
}

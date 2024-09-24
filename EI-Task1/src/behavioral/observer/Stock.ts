import { Investor } from './Investor';
import { Logger, LogLevel } from '../../utils/Logger';

export class Stock {
    private investors: Investor[] = [];
    private price: number;
    private logger: Logger;

    constructor(private name: string, initialPrice: number) {
        this.price = initialPrice;
        this.logger = Logger.getInstance();
    }

    public addInvestor(investor: Investor): void {
        this.investors.push(investor);
        this.logger.log(`${investor.getName()} has subscribed to ${this.name} stock.`, LogLevel.INFO);
    }

    public removeInvestor(investor: Investor): void {
        this.investors = this.investors.filter(inv => inv !== investor);
        this.logger.log(`${investor.getName()} has unsubscribed from ${this.name} stock.`, LogLevel.INFO);
    }

    public setPrice(newPrice: number): void {
        if (newPrice !== this.price) {
            this.price = newPrice;
            this.logger.log(`${this.name} stock price updated to ${this.price}.`, LogLevel.INFO);
            this.notifyInvestors();
        }
    }

    private notifyInvestors(): void {
        this.logger.log(`Notifying investors about ${this.name} price change.`, LogLevel.INFO);
        this.investors.forEach(investor => investor.update(this.name, this.price));
    }
}

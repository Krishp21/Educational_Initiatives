// src/structural/adapter/PaymentGateway.ts
export interface PaymentGateway {
    initiatePayment(amount: number): void;
}

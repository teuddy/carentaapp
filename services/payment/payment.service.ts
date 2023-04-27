import { Payment } from "../../interfaces/Payment";

const payment = [];

export const createPayment = (pago: Payment ) => {
    payment.push(pago);
    return payment
}
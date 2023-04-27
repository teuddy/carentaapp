import { Payment } from "../../interfaces/Payment";
import { PaymentModel } from "../../models/paymentModel";

const payment = [];

export const createPayment = (newPaymentData: Payment ) => {

    // console.log("newPaymentData: ", newPaymentData);

    const newPayment = new PaymentModel(newPaymentData)

    try {
        newPayment.save()
        return payment
    } catch (error) {
        return error
    }

}
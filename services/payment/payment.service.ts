import { Payment } from "../../interfaces/Payment";
import PaymentModel from "../../models/paymentModel";

const payment = [];

export const createPayment = async (newPaymentData: Payment ) => {

    // console.log("newPaymentData: ", newPaymentData);
    
    try {
        const newPayment = new PaymentModel(newPaymentData)
        await newPayment.save()
        return payment
    } catch (error) {
        return error
    }

}
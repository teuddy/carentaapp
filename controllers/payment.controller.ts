import type { NextApiRequest, NextApiResponse } from 'next'
import { paymentSchema } from '../validations/payment.validation'
import { createPayment as createPaymentService } from '../services/payment/payment.service'

// POST: api/payment // endpoint to create a payment
const createPayment = (req: NextApiRequest, res: NextApiResponse) => {
    
    // Validate request data
    const newPaymentData = req.body
    const { error } = paymentSchema.validate( newPaymentData )
    if (error) {
        return (
            res.status(400).json({
                message: error.details[0].message
            })
        )
    }
    // Sending validated data to be processed the payment
    const newPayment = createPaymentService( newPaymentData )
    // console.log("newPayment: ", newPayment);
    res.status(200).send({ 
        status: "data of createPayment is valid",
        data: newPayment
    })
}

// export const createPayment = async ( req: NextApiRequest, res: NextApiResponse ) => {
//     // const payment = await req.json(NextApiRequest)
//     // const allPayments = createPaymentService(payment)
//     res.status(200).json([
//         {
//             "payment_id": "string",
//             "reservation_id": "string",
//             "user_id": "string",
//             "listing_id": "string",
//             "amount": "number",
//             "payment_date": "Date",
//             "payment_method": "string"
//         },
//         {
//             "payment_id": "string",
//             "reservation_id": "string",
//             "user_id": "string",
//             "listing_id": "string",
//             "amount": "number",
//             "payment_date": "Date",
//             "payment_method": "string"
//         }
//     ]
//     )
// }

export {
    createPayment
}
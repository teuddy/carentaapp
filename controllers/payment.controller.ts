import type { NextApiRequest, NextApiResponse } from 'next'
import { createPayment as createPaymentService } from '../services/payment/payment.service'

export const createPayment = async ( req: NextApiRequest, res: NextApiResponse ) => {
    // const payment = await req.json(NextApiRequest)
    // const allPayments = createPaymentService(payment)
    res.status(200).json([
        {
            "payment_id": "string",
            "reservation_id": "string",
            "user_id": "string",
            "listing_id": "string",
            "amount": "number",
            "payment_date": "Date",
            "payment_method": "string"
        },
        {
            "payment_id": "string",
            "reservation_id": "string",
            "user_id": "string",
            "listing_id": "string",
            "amount": "number",
            "payment_date": "Date",
            "payment_method": "string"
        }
    ]
    )
}
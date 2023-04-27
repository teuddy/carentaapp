import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '../../../../utils/dbConnection'
// import { create as CreateListingController } from '../../../../controllers/listing.controller'
import { createPayment } from '../../../../controllers/payment.controller'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
    ) {
    
    await connect();

    if (req.method === 'POST') {
        createPayment(req,res)
    } else {
        res.send('hola')
    }
}
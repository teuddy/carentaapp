import type { NextApiRequest, NextApiResponse } from 'next'
// import { create as CreateListingController } from '../../../../controllers/listing.controller'
import { createPayment } from '../../../../controllers/payment.controller'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
    ) {
    
    if (req.method === 'POST') {
        createPayment(req,res)
    } else {
        res.send('hola')
    }

        
}
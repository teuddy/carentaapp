import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '../../../../utils/dbConnection'
import { deleteListing, getListing, putListing } from '../../../../controllers/listing.controller'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse ) {
    
    
    
    connect()

    switch(req.method) { 

        case "GET": { 
            getListing(req, res)
            break; 
        } 
        case "PUT": {
            putListing(req, res)
            break;
        }
        case "DELETE": {
            deleteListing(req, res)
            break;
        }
        default: { 
            res.send("deFaultListingId"); 
            break; 
        } 
    }
}
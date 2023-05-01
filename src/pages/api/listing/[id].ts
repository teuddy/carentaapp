import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '../../../../utils/dbConnection'
import { deleteListing, putListing } from '../../../../controllers/listing.controller'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse ) {
    
    
    
    connect()

    switch(req.method) { 

        //case "GET": { 
        
          //  break; 
        //} 
        case "PUT": {
            putListing(req, res)
        }
        case "DELETE": {
            deleteListing(req, res)
        }
        default: { 
          //  res.send("hola"); 
            break; 
        } 
    }
}
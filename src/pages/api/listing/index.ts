import type { NextApiRequest, NextApiResponse } from 'next'
import { create as CreateListingController, getAllListing } from '../../../../controllers/listing.controller'
import { connect } from '../../../../utils/dbConnection'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
    ) {
      connect();

    switch(req.method) {
        case "POST": {
          CreateListingController(req, res);
            break;
        }
        case "GET": {
            getAllListing(req, res)
            break;
        }
        case "PUT": {
            res.send("PUT")
        }
        
        default: {
            res.send("hola");
            break;
        }
    }
  
}
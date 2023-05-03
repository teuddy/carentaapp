import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '../../../../utils/dbConnection'
// import { create as CreateListingController } from '../../../../controllers/listing.controller'

import { createUser, getUser } from '../../../../controllers/user.controller';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
    ) {

    connect();

    switch(req.method) {
        case "POST": {
            createUser(req,res);
            break;
        }
        case "GET": {
            getUser(req,res);
            // res.send("GET")
            break;
        }
        case "PUT": {
            res.send("PUT")
        }
        case "DELETE": {
            res.send("DELETE")
        }
        default: {
            res.send("hola user");
            break;
        }
    }
}
import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '../../../../../utils/dbConnection'
// import { create as CreateListingController } from '../../../../controllers/listing.controller'

import { createUser, getUser, loginUser } from '../../../../../controllers/user.controller';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
    ) {

    connect();

    switch(req.method) {
        case "POST": {
            loginUser(req, res)
            // res.send("POST in AUTH")
            // createUser(req, res);
            break;
        }
        case "GET": {
            getUser(req,res);
            res.send("GET in AUTH")
            break;
        }
        case "PUT": {
            res.send("PUT in AUTH")
        }
        case "DELETE": {
            res.send("DELETE in AUTH")
        }
        default: {
            res.send("Here in user AUTH!");
            break;
        }
    }
}
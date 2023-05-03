import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '../../../../utils/dbConnection'
import { deleteUser, getUser, updateUser } from '../../../../controllers/user.controller'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse ) {
    
    // const userId = req.query.id
    // console.log("userId: ", userId);
    
    connect()

    switch(req.method) { 

        case "GET": {
            // console.log("req: ", req);
            getUser(req, res);
            // res.send(`GET method - get userIid: ${userId}`) 
            break; 
        } 
        case "PUT": {
            // console.log("user file - req.body: ", req.body);
            updateUser(req, res)
            // res.send(`PUT method - update userIid: ${userId}`) 
            break;
        }
        case "DELETE": {
            console.log("case DELETE");
            deleteUser(req, res)
            // res.send(`DELETE method - delete userIid: ${userId}`)
            break;
        }
        default: { 
            res.send("Whitout any method coincidence - GET, PUT or DELETE"); 
            break; 
        } 
    }
}
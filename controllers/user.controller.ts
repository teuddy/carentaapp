import type { NextApiRequest, NextApiResponse } from 'next'
import { createUser as createUserService, deleteUser as deleteUserService} from '../services/user/user.service'
import { getUser as getUserRecord, updateUser as updateUserRecord } from '../services/user/user.service'
import { userSchema } from '../validations/user.validation';
import { generateToken } from '../helpers/tokenHelper';

// POST: api/user // endpoint to create a user
export const createUser = async (req: NextApiRequest, res: NextApiResponse) => {

    // console.log("req.body: ", req.body);
    const newUserData = req.body
    // Validate request data
    const { error } = userSchema.validate( newUserData )
    if (error) {
        return (
            res.status(400).json({
                message: error.details[0].message
            })
        )
    }
    // Sending validated data to be processed the registration
    const newUser = await createUserService( newUserData )
    res.status(200).send({ 
        status: "data of createUser is valid",
        data: newUser
    })
}

// POST: api/user // endpoint to get user by id
export const getUser = async (req: NextApiRequest, res: NextApiResponse) => {
    
    // Validate request data
    const userId = req.query.id
    // console.log("userId in controller: ", userId);

    // Send user id to get record
    const recordUser = await getUserRecord ( userId )
    console.log("recordUser: ", recordUser);

    // const { error } = userSchema.validate( userId )

    // if (error) {
    //     return (
    //         res.status(400).json({
    //             message: error.details[0].message
    //         })
    //     )
    // }
    
    res.status(200).send({ 
        status: "data of get User is valid",
        data: recordUser
    })
}

// PUT: api/user // endpoint to update user by id
export const updateUser = async (req: NextApiRequest, res: NextApiResponse) => {
    
    const userId = req.query.id
    console.log("CONTROLLER userId: ", userId);
    
    // Validate request data
    const userDataToUpdate = req.body
    console.log("CONTROLLER userDataToUpdate: ", userDataToUpdate);
    
    // res.send(`userDataToUpdate: ${userDataToUpdate}`)
    // const { error } = userSchema.validate( userDataToUpdate )

    // if (error) {
    //     return (
    //         res.status(400).json({
    //             message: error.details[0].message
    //         })
    //     )
    // }
    // Send user id to get record
    const recordUserUpdated = await updateUserRecord ( userId, userDataToUpdate )
    console.log("recordUserUpdated: ", recordUserUpdated);
    res.status(200).send({ 
        status: "User data to update is valid",
        data: recordUserUpdated
    })
}

// DELETE: api/user // endpoint to delete payment by id
export const deleteUser = async (req: NextApiRequest, res: NextApiResponse) => {
    
    console.log("req.query DATA", req.query);
    try {
        const { id } = req.query
        // console.log("delteUser id: ", id);
        if (!(id === undefined) || !(id === null)) {
            const recordUser = await deleteUserService ( id )
            return res.status(200).send({ 
                status: "data of delete User is valid",
                data: recordUser
            })
        }
        
    } catch (error) {
        return res.status(400).json({
                message: error.details[0].message
            })
    }
}

// export {
    // createUser,
    // getReservation,
    // updateReservation,
    // delelteReservation
// }
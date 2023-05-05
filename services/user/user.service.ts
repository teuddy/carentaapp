import { User } from './../../models/userModel';
import { connect } from "../../utils/dbConnection";
// import { Reservation } from "../../interfaces/Reservation";
import UserModel from "../../models/userModel";
import ReservationModel from "../../models/reservationModel";
import { generateToken } from '../../helpers/tokenHelper';
import bcrypt from 'bcrypt';
// const payment = [];
// const reservation = [];

// Register new user in the DB
export const createUser = async (newUserData: User ) => {
    // console.log("newUserData: ", newUserData);
    try {
        // Sanitize: convert email to lowercase
        const email = newUserData.email.toLocaleLowerCase()
        newUserData.email = email
        // Check if user already exist
        // Check if the user's email is already registerd in the DB to reject the register process
        const registeredUser = await UserModel.findOne({ email: newUserData.email})

        if(registeredUser) {
            return {
                status: "Registration process failed",
                code: 400,
                message: "User has been registered, please login"
            }
        }

        // Encrypt password
        const encryptedPassword = await bcrypt.hash(newUserData.password, 10)
        newUserData.password = encryptedPassword
        //  Create user and save user in the DB
        const newUser = await UserModel.create(newUserData)
        await newUser.save()
        // Create token to allow access to protected routes for refistered users
        const userToken = generateToken(newUser)
        
        return {
            status: "Successful registration",
            code: 200,
            token: userToken
        }

    } catch (error) {
        return error
    }
}

// Get user record by id
export const getUser = async ( userId: string | string[] ) => {
    
    console.log("userId in getUser: ", userId);
    try {
        // connect()
        
        const getUser = await UserModel.findById(userId)
        console.log("getUser result: ", getUser);
        return getUser
        // return (
        //     {
        //         "user_id":  "_id-6446c4c2521bd181f752ee20",
        //         "listing_id": "asdf6446c4c2521bd181f752ee20",
        //         "start_date": "2023/04/29",
        //         "end_date": "2023/05/15",
        //         "total_price": 1235,
        //         "status": "pending",
        //         "created_at": "2023/04/01",
        //         "updated_at": "2023/04/29"
        //     }
        // )
    } catch (error) {
        return error
    }
}

// Update user record by id
export const updateUser = async ( userId: string | string[], userDataToUpdate: User ) => {
    
    console.log("userDataToUpdate: ", userDataToUpdate);
    try {
        // connect()
        const updatedUser = await UserModel.findByIdAndUpdate(userId, userDataToUpdate)
        return updatedUser
    } catch (error) {
        return error
    }
}

// Delete user record by id
export const deleteUser = async ( userId: string | string[] ) => {
    
    console.log("userId in delteUSer: ", userId);
    try {
        // connect()
        const userDeleted = await UserModel.findByIdAndDelete(userId)
        console.log("userDeleted: ", userDeleted);
        return userDeleted
    } catch (error) {
        return error
    }
}

// Login user registered in the DB
export const loginUser = async (userData: User ) => {
    console.log("userData: ", userData);
    try {
        // Sanitize: convert email to lowercase
        const email = userData.email.toLocaleLowerCase()
        userData.email = email
        // Check if user already exist
        // Validate if user exist in our database
        const registeredUser = await UserModel.findOne({ email: userData.email})

        if(!registeredUser) {
            return "User is not register. Please register and try to login again"
        }
        const result = await bcrypt.compare(userData.password, registeredUser.password)
        console.log("restul: ", result);
        if(registeredUser && (result)) {
            var userToken = generateToken(registeredUser)
            console.log("userToken: ", userToken);
        }
        // Encrypted password
        // const encryptedPassword = await bcrypt.hash(newUserData.password, 10)
        // newUserData.password = encryptedPassword

        // const newUser = await UserModel.create(newUserData)
        
        // const userToken = generateToken(newUser)
        // console.log("userToken: ", userToken);
        
        // newUser['token'] = userToken
        // console.log("user with TOKEN: ", newUser);

        // await newUser.save()
        
        return userToken
    } catch (error) {
        return error
    }
}
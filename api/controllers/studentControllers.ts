import { Request,Response } from "express"
import {getStudentsService} from '../services/studenServices'
//Aqui van todas las funciones encargadas de responderle al cliente
const getStudents = (req:Request,res:Response)=>{
    //le pasamos el servicio que obtiene todos los estudiantes
    const students = getStudentsService()
    res.status(200).json(students)
}

export {getStudents}
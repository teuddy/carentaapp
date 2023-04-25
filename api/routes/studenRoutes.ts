import express from 'express'
const router = express()
import { getStudents } from '../controllers/studentControllers'

//aqui van las funciones que responde a cada llamadas


//EJEMPLO: "/students", y responde el CONTROLLER
router.get("/",getStudents)

module.exports = router;

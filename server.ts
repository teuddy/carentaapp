// server.js
// import { createServer } from "http";
import express from 'express'
import cors from 'cors'
// const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();
// import  { createServer } = require('http')
// const { parse } = require('url')
// const next = require('next')

// const dev = process.env.NODE_ENV !== 'production'
// const hostname = 'localhost'
// const port = 3000
// // when using middleware `hostname` and `port` must be provided below
// const app = next({ dev, hostname, port })
// const handle = app.getRequestHandler()

const app = express()

let allowedOrigin = "https://carentaapp.vercel.app";

const corsOptions = {
    origin: allowedOrigin,
    credentials: true,
  };
  
app.use(cors(corsOptions));

nextApp.prepare().then(() => {

 

    app.use(cors(corsOptions))

    app.get('/api/hello',(req,res)=>{
        res.send("hello worssssld")
    })
    //TODAS LAS RUTAS DEL SERVIDOR

    app.use('/api/student/',require('./api/routes/studenRoutes'))
    //RUTAS DE NEXTJS
    app.get('*', (req, res) => nextHandler(req, res));

    //SERVIDOR ESCUCHANDO
    app.listen(3000,()=>{
        console.log("SERVER UP")
    })
})

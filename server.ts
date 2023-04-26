import path from 'path';
import next from 'next';
import nextBuild from 'next/dist/build';
import express from 'express';



const dev = process.env.NODE_ENV !== 'production';
const server = express();

const start = async () => {

  if (!process.env.NEXT_BUILD) {
    const nextApp = next({ dev });

    const nextHandler = nextApp.getRequestHandler();

    server.use('/api/student',require('./api/routes/studenRoutes'))


    server.get('*', (req, res) => nextHandler(req, res));


    nextApp.prepare().then(() => {
      console.log('NextJS started');

      server.listen(process.env.PORT, async () => {
        console.log(`Server listening on ${process.env.PORT}...`);
      });
    });
  } else {
    server.listen(process.env.PORT, async () => {
      console.log('NextJS is now building...');
      await nextBuild(path.join(__dirname, '../'));
      process.exit();
    });
  }
};

start();

// // server.js
// // import { createServer } from "http";
// import express from 'express'
// import mongoose from 'mongoose'
// import cors from 'cors'
// import {connect} from './api/configurations/dbConnection'
// // const express = require('express')
// import AdminJS from 'adminjs'
// import AdminJSExpress from '@adminjs/express'
// const next = require('next')
// const dev = process.env.NODE_ENV !== 'production';
// const nextApp = next({ dev });
// const nextHandler = nextApp.getRequestHandler();
// // import  { createServer } = require('http')
// // const { parse } = require('url')
// // const next = require('next')

// // const dev = process.env.NODE_ENV !== 'production'
// // const hostname = 'localhost'
// // const port = 3000
// // // when using middleware `hostname` and `port` must be provided below
// // const app = next({ dev, hostname, port })
// // const handle = app.getRequestHandler()

// const app = express()

// connect("mongodb://localhost:27017/your-db-name")

// let allowedOrigin = ["https://carentaapp.vercel.app"];

// const corsOptions = {
//     origin: allowedOrigin,
//     credentials: true,
//   };

//   //adminjs config
//   function getAllMongooseModels() {
//     return Object.values(mongoose.models).map((model) => ({
//       resource: model,
//       options: {
//         parent: {
//           name: model.modelName + ' Management',
//         },
//       },
//     }));
//   }
// //   const admin = new AdminJS({
// //     resources: getAllMongooseModels(),
// //     rootPath: '/admin',
// //   });





  
// app.use(cors());

// nextApp.prepare().then(() => {

    

//     app.use(cors(corsOptions))

//     app.get('/api/hello',(req,res)=>{
//         res.send("hello worssssld")
//     })
//     //TODAS LAS RUTAS DEL SERVIDOR

//     app.use('/api/student/',require('./api/routes/studenRoutes'))

//     //RUTAS ADMINJS
//     // const adminRouter = AdminJSExpress.buildRouter(admin)
//     // // app.use(admin.options.rootPath, adminRouter)

//     //RUTAS DE NEXTJS
//     app.get('*', (req, res) => nextHandler(req, res));

//     //SERVIDOR ESCUCHANDO
//     app.listen(3000,()=>{
//         console.log("SERVER UP")
//     })
// })

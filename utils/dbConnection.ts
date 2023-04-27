import mongoose from "mongoose";


export const connect = ()=>{
    const options = {
        useNewUrlParser: true,
        autoIndex: false, // Don't build indexes
          maxPoolSize: 10, // Maintain up to 10 socket connections
      };
    
      const connectWithRetry = ()=>{
        mongoose.Promise 
      }
}
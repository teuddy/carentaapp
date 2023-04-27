const mongoose  = require("mongoose");

exports.connect = () =>{
    const options = {
        useNewUrlParser: true,
        autoIndex: false, // Don't build indexes
          maxPoolSize: 10, // Maintain up to 10 socket connections
      };
    
      const connectWithRetry = () => {
        mongoose.Promise = global.Promise;
        console.log("MongoDB connection with retry");
        mongoose
          .connect("mongodb://127.0.0.1:27017/carenta", options)
          then(()=> {
            console.log("MongoDB is connected");
          })
          .catch(err) => {
            console.log("MongoDB connection unsuccessful, retry after 2 seconds.",
            err);
            setTimeout(connectWithRetry, 2000);
          });
      };
  connectWithRetry();
};
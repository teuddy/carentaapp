/**
 * Created by Teuddy J.
 */
import mongoose from 'mongoose'


export const connect = (URI : string) => {
  const options = {
    useNewUrlParser: true,
    autoIndex: false, // Don't build indexes
      maxPoolSize: 10, // Maintain up to 10 socket connections
  };

  const connectWithRetry = () => {
    mongoose.Promise = global.Promise;
    mongoose
      .connect(URI, options)
      .then(() => {
       console.log("DATABASE CONNECTED SUCCESFULLY")
      })
      .catch((err) => {
        console.log("MongoDB connection unsuccessful, retry after 2 seconds.", err);
        setTimeout(connectWithRetry, 2000);
      });
  };
  connectWithRetry();
};

import mongoose from 'mongoose';

const connectDB = async () => {
  mongoose.connection.on('connected', () => {
    console.log('Connection established');
  });

  mongoose.connection.on('error', (err) => {
    console.log('Connection error:', err.message);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose connection disconnected');
  });


  await mongoose.connect(`${process.env.MONGODB_URI}/spotify`);
};

export default connectDB;
 
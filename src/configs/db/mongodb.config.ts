import mongoose from 'mongoose';

import { MONGO_HOST, MONGO_PASSWORD, MONGO_USER } from '../env/env.config';

const MONGO_URL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:27017/mydb?authSource=admin`;

export const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log('MongoDB was successfully connected');
  } catch (error) {
    throw new Error('MongoDB connection error ' + error);
  }
};

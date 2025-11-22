import 'dotenv/config';

export const SERVER_PORT = process.env.SERVER_PORT || 3000;
export const MONGO_USER = process.env.MONGODB_USER;
export const MONGO_PASSWORD = process.env.MONGODB_PASSWORD;
export const MONGO_PORT = process.env.MONGODB_PORT || 27017;

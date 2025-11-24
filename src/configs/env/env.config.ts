import 'dotenv/config';

export const SERVER_PORT = process.env.SERVER_PORT || 3000;
export const MONGO_USER = process.env.MONGODB_USER || 'root';
export const MONGO_PASSWORD = process.env.MONGODB_PASSWORD || '123';
export const MONGO_HOST = process.env.MONGODB_HOST || 'localhost';

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {

    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@mern-todo.j1tkbdz.mongodb.net/`;

    mongoose.connect(MONGODB_URI, {useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Database connected successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected successfully');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting to the database', error.message);
    })
}

export default Connection;
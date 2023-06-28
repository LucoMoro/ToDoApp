import mongoose from "mongoose";

const Connection = () => {

    const MONGODB_URI = "mongodb+srv://user:lucomoro@mern-todo.j1tkbdz.mongodb.net/";

    mongoose.connect(MONGODB_URI, {useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Database connected successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected successfully');
    })

    mongoose.connection.on('error', () => {
        console.log('Erro while connecting to the database', error.message);
    })
}

export default Connection;
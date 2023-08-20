import mongoose from "mongoose";

let isConnected = false;

const connection = async () => {
    mongoose.set('strictQuery', true);

    try {
        await mongoose.connect(process.env.MONGODB);
        isConnected = true;
        console.log("Mongodb connected!");
    } catch (error) {
        console.log("Connection error: ", error.message);
    }
}

export default connection;
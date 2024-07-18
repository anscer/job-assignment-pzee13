import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DB: string = process.env.MONGO_URI || ""

const connectDB = async () => {
    try {
        await mongoose.connect(DB)
            .then((data: any) => console.log(`db connection on ${data.connection.host}`))
    } catch (error: any) {
        console.log(error.message)
        setTimeout(connectDB, 4000)
    }
}
 
export default connectDB
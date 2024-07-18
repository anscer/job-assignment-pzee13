import app from "./config/app";
import connectDB from "./config/database";
import dotenv from 'dotenv';
dotenv.config()

const PORT = process.env.PORT || 3000;

const server = () => {
  app.listen(PORT,()=> {
    connectDB()
    console.log(`Server connected to http://localhost/${PORT}`); 
  })
}

server();
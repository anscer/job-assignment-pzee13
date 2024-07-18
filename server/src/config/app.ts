import express from 'express';
import session from 'express-session';
import cors from 'cors';
import cookieParser from "cookie-parser";
import stateRoutes from '../routes/stateRoutes';
import userRoutes from '../routes/userRoutes';
import connectDB from './database';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Session setup
app.use(session({
    secret: "aswinpc9@", 
    resave: false,
    saveUninitialized: false
}));



// Routes
app.use('/states', stateRoutes);
app.use('/users', userRoutes);

// Database connection
connectDB();

export default app;

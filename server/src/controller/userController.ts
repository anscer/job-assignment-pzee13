import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserModel from '../models/userModel';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

const isEmailValid = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const isPasswordStrong = (password: string): boolean => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
};

export const registerUser = async (req: Request, res: Response) => {
    try {
        console.log('Register request body:', req.body);
        const { userName, email, password } = req.body;

        if (!userName || !email || !password) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        if (!isEmailValid(email)) {
            return res.status(400).json({ error: 'Invalid email format' });
        }

        if (!isPasswordStrong(password)) {
            return res.status(400).json({ error: 'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character' });
        }

        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        console.log('Hashed password:', hashedPassword);

        const user = new UserModel({ userName, email, password: hashedPassword });
        await user.save();
        console.log('User saved:', user);

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error in registerUser:', error);
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};

export const loginUser = async (req: Request, res: Response) => {
    try {
        console.log('Login request body:', req.body);
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        if (!isEmailValid(email)) {
            return res.status(400).json({ error: 'Invalid email format' });
        }

        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        if (!JWT_SECRET) {
            throw new Error('JWT_SECRET is not defined');
        }
        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
        console.log('Generated JWT token:', token);

        console.log("token", token);
        res.status(200).json({ message: "User logged in successfully", token });
    } catch (error) {
        console.error('Error in loginUser:', error);
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};

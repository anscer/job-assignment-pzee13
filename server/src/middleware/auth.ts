

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken'; 
import dotenv from 'dotenv';
dotenv.config();


console.log("JWT_SECRET:", process.env.JWT_SECRET)
const JWT_SECRETS:string = process.env.JWT_SECRET || "";

console.log("JWT_SECRET",JWT_SECRETS) 

export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    console.log(authHeader,"dede")

    if (authHeader) {
        let token: string | undefined;
         token = authHeader;
         console.log(token,"token")

        jwt.verify(token, JWT_SECRETS, (err, decodedToken) => {
            if (err) {
                return res.status(403).json({ error: 'Forbidden: Invalid token' });
            }

            req.user = decodedToken; 
            next();
        });
    } else {
        res.sendStatus(401);
    }
};



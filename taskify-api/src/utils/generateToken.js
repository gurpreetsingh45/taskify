import jwt from 'jsonwebtoken';
import { JWT_SECRET, JWT_REFRESH_SECRET } from '../config/env.js';

export default function generateToken(userId){
    const accessToken = jwt.sign({userId : userId}, JWT_SECRET, { expiresIn: '15m'});
    const refreshToken = jwt.sign({userId : userId }, JWT_REFRESH_SECRET, { expiresIn: '7d'});
    return {
        accessToken,
        refreshToken, 
    }
}


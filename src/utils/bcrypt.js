import bcrypt from 'bcrypt';
import config from '../config/config.js';


const saltRounds = 10;
const pepper = config.PEPPER;

export const hashPassword =async (password) => {
 
    try {
        const hashPassword =await bcrypt.hash(password + pepper, saltRounds);
        return hashPassword
    } catch (error) {
        throw new Error('Error hashing password');
    }
}

export const comparePassword =async (password, hash) => {
    try {
        return await bcrypt.compare(password + pepper, hash)
    } catch (error) {
        throw new Error('Error comparing password');
    }
}
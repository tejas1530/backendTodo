import bcrypt from 'bcrypt';
import config from '../config/config';


const saltRounds = 10;
const pepper = config.PEPPER;

export const hashPassword =async (password: string) => {
 
    try {
        const hashPassword =await bcrypt.hash(password + pepper, saltRounds);
        return hashPassword
    } catch (error) {
        throw new Error('Error hashing password');
    }
}

export const comparePassword =async (password: string, hash: string) => {
    try {
        return await bcrypt.compare(password + pepper, hash)
    } catch (error) {
        throw new Error('Error comparing password');
    }
}
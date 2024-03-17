import Jwt from "jsonwebtoken";

type payload = Record<string,any>

export const generateToken =<T extends payload> (
    payload:T,
):string=>{
    const token = Jwt.sign(payload,process.env.JWT_SECRET!,{
        expiresIn:process.env.JWT_EXPIRES_IN,
    })
    return token
}
export const generateRefreshToken =<T extends payload> (
    payload:T,
):string=>{
    const token = Jwt.sign(payload,process.env.JWT_REFRESH_SECRET!,{
        expiresIn:process.env.JWT_REFRESH_EXPIRES_IN,
    })
    return token
}

export const verifyToken = (token: string): any => {
    try {
      const payload = Jwt.verify(token, process.env.JWT_SECRET!) as any;
      return payload;
    } catch (error) {
      throw new Error('Invalid token');
    }
  };
export const verifyRefreshToken = (token:string):any=>{
    const payload = Jwt.verify(token, process.env.JWT_REFRESH_SECRET!)
    return payload
}

export const decodeToken = (token:string):any=>{
    const payload = Jwt.decode(token)
    return payload
}
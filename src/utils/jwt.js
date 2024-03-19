import Jwt from "jsonwebtoken";


export const generateToken = (
)=>{
    const token = Jwt.sign(payload,process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRES_IN,
    })
    return token
}
export const generateRefreshToken = (
)=>{
    const token = Jwt.sign(payload,process.env.JWT_REFRESH_SECRET,{
        expiresIn:process.env.JWT_REFRESH_EXPIRES_IN,
    })
    return token
}

export const verifyToken = (token) => {
    try {
      const payload = Jwt.verify(token, process.env.JWT_SECRET) ;
      return payload;
    } catch (error) {
      throw new Error('Invalid token');
    }
  };
export const verifyRefreshToken = (token)=>{
    const payload = Jwt.verify(token, process.env.JWT_REFRESH_SECRET)
    return payload
}

export const decodeToken = (token)=>{
    const payload = Jwt.decode(token)
    return payload
}
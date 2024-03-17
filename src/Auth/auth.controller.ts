import { Request, Response } from "express";
import db from "../model";
import utils from "../utils";

export const signUp= async(req:Request,res:Response):Promise<void>=>{
    try {
        const {name,email ,phone  , password} =req.body



        let existingUser ;
        if(email){ 
            existingUser = await db.UserModel.findOne({email})
        } else {
            existingUser = await db.UserModel.findOne({phone})
        
        }
        if(existingUser){
            res.status(400).json({message:"User already exist"})
        }
 
        const hashedPassword = await utils.HashedPassword(password)

        const user = await db.UserModel.create({
            name,
            email,
            phone,
            password:hashedPassword
        })
        res.status(201).json({
            success:true,
            message:"User created successfully",
            data: user
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({message:error})
    }
}

export const login = async(req:Request, res:Response):Promise<void>=>{
    try {
        const {email,password,phone}=req.body
        let user ;
        if(email){
            user = await db.UserModel.findOne({email})
        }
        if(phone){
            user = await db.UserModel.findOne({phone})
        }
        if(!user){
            res.status(400).json({message:"User not found"})
        }

        // verify password
        if(user?.password){

            const isMatch = await utils.ComparePassword(password,user.password)
            if(!isMatch){
                res.status(40).json({message:"Invalid password"})
            }
        }

        const accessToken = utils.GenerateToken({userID:user?._id})
        const refreshToken = utils.GenerateRefreshToken({userId:user?._id})

        await db.TokenModel.create({
            userId:user?._id,
            token:refreshToken})
        res.status(200).json({
            success:true,
            message:"Login successful",
            data:{
               data: user,
                accessToken:accessToken,
                refreshToken:refreshToken
            }})
    } catch (error) {
       console.log(error)
       res.status(500).json({error}) 
    }
}

export const getRefreshToken = async(req:Request, res:Response):Promise<void>=>{
    try {
        const refToken = req.params.token
        if(!refToken){
            res.status(400).json({message:"Refresh token is required"})
        }
        const decode = utils.VerifyRefreshToken(refToken)
        const existingToken = await db.TokenModel.findOne({token:refToken})
        if(!existingToken){
            res.status(400).json({message:"Invalid token"})
        }
        const accessToken = utils.GenerateToken({userID:decode?.userID})
        res.status(200).json({
            success:true,
            message:"Token refreshed",
            data:accessToken
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
}

export const logout = async(req:Request,res:Response):Promise<void>=>{
    try {
        const token = req.params.token
        if(!token){
            res.status(400).json({message:"Refresh token is required"})
        }
        
        await db.TokenModel.deleteOne({token:token})
        res.status(200).json({
            success:true,
            message:"Logout successful"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }} 
import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'

const protect = asyncHandler(async(req,res,next)=>{
    let token
    if(req.headers.authorization && 
        req.headers.authorization.startsWith('Bearer')){
        try{
            token=req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token,process.env.JWT_SECRET)
            req.user=await User.findById(decoded.id).select('-password')
            next()
        }catch(error){
            console.error(error)
            console.log("ERRRROR++++++++++++++++++++++++++++++")
            res.status(401)
            throw new Error('NOT AUTHORIZED, TOKEN FAILED')
        }
    }

    if(!token){
        console.log("NO TOKEN")
        res.status(401)
        throw new Error("NO TOKEN")
    }
})

export {protect}
import {Request,Response} from 'express'
import { AuthModel } from "../Models/AuthModel";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from 'config'


export async function RegisterUser(req:Request, res:Response){

       const user = new AuthModel({
            username: req.body.username,
            password: bcrypt.hashSync(req.body.password,10)
       })

       try {
            const savedUser = await user.save()
            res.send(savedUser)
       } catch (error) {
            res.status(400).send(error)
       }
}

export async function LoginUser(req:Request, res:Response){

     const user = await AuthModel.findOne({username: req.body.username})
     if(!user) return res.status(404).send('Usuário não encontrado')

     const MatchCreds = bcrypt.compareSync(req.body.password, user.password)
     if(!MatchCreds) return res.status(400).send('Crendenciais inválidas')

     const token = jwt.sign({_id: user._id}, config.get<string>('SECRET_TOKEN'))

     res.header('authorization', token)
     res.status(200).json({user,token})


     
}
import {Request, Response} from 'express'
import {UserModel} from '../Models/UserModel'

export async function createUser(req:Request, res:Response){
    try {
       const {name, email,tel,cpf,address} = req.body
       const newUser = new UserModel({
        name,
        email,
        tel,
        cpf,
        address,

       })

       if(!name || !email || !tel || !cpf || !address){
            res.json({message: 'Você provavelmente não preencheu alguns campos.'})
       }

       await newUser.save()
       const user = await UserModel.find()
       res.status(201).json(user)
    } catch (error:any) {
        console.log(error.message)
    }
}

export async function getUsers(req:Request, res:Response){
    try {
        const user = await UserModel.find()
        res.status(200).json(user)
    } catch (error:any) {
        res.status(404).json({message: error.message})
    }
}

export async function getUser(req:Request, res:Response){
    try {
        const {id} = req.params
        const user = await UserModel.findById(id)
        res.status(200).json(user)
    } catch (error:any) {
        res.status(404).json({message: error.message})
    }
} 

export async function updateUser(req:Request,res:Response){
    try {
        const {id} = (req.params)
        const {name,email,tel,cpf,address} = req.body

        const user = await UserModel.findById(id)

        if(!user){
            res.status(404).send('User do not exist')
        }

        const updateUser = await UserModel.findByIdAndUpdate({_id:id}, {
            name,
            email,
            tel,
            cpf,
            address
        })

        res.status(200).json(updateUser)
    } catch (error:any) {
        res.status(404).json({message: error.message})
    }

}

export async function deleteUser(req:Request, res:Response){
    try {
        const user = await UserModel.findById(req.params.id)
        if(!user) res.send('user not found')
        const deleteUser = await UserModel.findByIdAndDelete(req.params.id)
        res.status(200).send(deleteUser)

    } catch (error:any) {
        res.status(404).json({message: error.message})
    }
}
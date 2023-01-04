import axios from 'axios'
import {Request,Response} from 'express'

export async function RandomUsers(req:Request, res:Response){
    try {
        const response = await axios.get('https://randomuser.me/api/?page=3&results=30&seed=abc')
        res.send(response.data.results)
    } catch (error:any) {
        console.log(error.message)
    }
}
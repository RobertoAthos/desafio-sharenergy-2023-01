import axios from 'axios'
import {Request,Response} from 'express'

export async function RandomDog(req:Request,res:Response){
    try {
        const response = await axios.get('https://random.dog/woof?filter=mp4,webm')
        res.send(response.data)
     } catch (error:any) {
        console.log(error.message)
     }
}
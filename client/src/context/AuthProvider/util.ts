import { API } from "../../services/api"
import { IUser} from "./types"


export function setUserLocalStorage(user: IUser | null){
    localStorage.setItem('authorization',JSON.stringify(user))
}

export function getUserLocalStorage(){
    const json = localStorage.getItem('authorization')

    if(!json){
        return null
    }

    const user = JSON.parse(json)

    return user ?? null
}

export async function Login (username:string,password:string){
    try {
        const req = await API.post('signin', {username,password})
        return req.data
    } catch (error) {
        return null
    }
}
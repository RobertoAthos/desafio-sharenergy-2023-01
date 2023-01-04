import {model, Schema} from 'mongoose'

const UserSchema = new Schema({
    name: {type: String, required:true},
    email:{type: String, required:true},
    tel:{type: String, required:true},
    cpf: {type: String, required:true},
    address:{type: String, required:true},
})

export const UserModel = model('Users', UserSchema)
import { model, Schema } from "mongoose";

const AuthSchema = new Schema({
    username: {type: String, required:true},
    password:{type: String, required:true},
})

export const AuthModel = model('authentication', AuthSchema)

import express from 'express'
import cors from 'cors'
import config from 'config'
import db from './config/db'
import mongoose from 'mongoose'
import router from './routes'
mongoose.set("strictQuery", false);

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api',router)

const PORT = config.get('PORT')

app.listen(PORT, async()=>{
    await db()
    console.log(`Server Running on Port ${PORT}`)

})

import mongoose from "mongoose";
import config from 'config';

async function connect(){
    const MONGO_URL = config.get<string>('DB')

    try {
        await mongoose.connect(MONGO_URL)
        console.log('Database Connected')
    } catch (error) {
        console.log(error)
    }
}

export default connect
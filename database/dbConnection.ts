// Date - 24-11-2024  -  Sunday
// Date - 26-11-2024  -  Tuesday


import mongoose from "mongoose"

export const connect  = async () => {
    try {
         await mongoose.connect(process.env.MONGO_URI!)
         const connection =  mongoose.connection;

         connection.on('connected', ()=> {
            console.log("MongoDB connected")
         })
         connection.on('error', ()=> {
            console.log("MongoDB connection Error !!")
            process.exit()
         })
    } catch(error) {
        console.log("MongoDB Error", error)
    }
}
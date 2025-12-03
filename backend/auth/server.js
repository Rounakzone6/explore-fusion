import app from './src/app.js'
import connectDB from './src/db/db.js'

connectDB()


app.listen(3000,()=>{
    console.log("Server is runing on Port 3000")
})
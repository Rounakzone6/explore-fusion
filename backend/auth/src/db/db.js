import mongoose, { connect } from "mongoose";

async function connectDB(){
    await mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("connected to MongoDB")
    })
    .catch((err)=>{
        console.error('Failed to connect to MongoDB:', err)
    });
}

export default connectDB
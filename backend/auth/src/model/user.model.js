import mongoose from "mongoose";
import { isStrongPassword } from "validator";

const userSchema = new mongoose.Schema({
    name:{
        firstName:{
            type:String,
            required:true,
        },
        lastName:{
            type:String,
        }
    },

    password:{
        type:String,
        require:true,
        unique:true
    },

    age:{
        type:Number,
        required:true,
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    phoneNumber:{
        type:Number,
        required:true,
        unique:true
    }

})

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel
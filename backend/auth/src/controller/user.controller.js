

async function register(req,res){
    try{
        const {name{firtName,lastName}, email, password, age, phoneNumber} = req.body
        const exists = await userModel.findOne({email})
    if(exists){
        return res.json({
            success:false,message:"User Already Exists"
        })
    }
    } catch (error) {
        console.log(error).res.status(){

        }
    }

}
async function login(){

}


export {register,login}
const  mongoose = require("mongoose")

const ConnectDb=async()=>{
  mongoose.connect(process.env.MONGODB_URI).then(()=>{

    console.log("Connected to MongoDB")
  }).catch((err)=>{
    console.log(err);
    
  })
}
export default ConnectDb
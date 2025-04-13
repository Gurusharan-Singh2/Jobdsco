import mongoose from "mongoose"


const ApplicationSchema =new mongoose.Schema({
  recruiterId:String,
  name:String,
  email:String,
  candidateUserId:String,
  status: {
    type: String,
    enum: ['Applied', 'Selected', 'Rejected'],
    required: true
  },
  jobID:String,
  jobApplicationDate:String
})

const Application=mongoose.models.Application || mongoose.model("Application",ApplicationSchema);

export default Application;
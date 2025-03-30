const { default: mongoose } = require("mongoose");


const ProfileSchema=new mongoose.Schema({
  userId:String,
  role:String,
  email:String,
  isPremiumUser:String,
  memberShipType:String,
  memberShipStartDate:String,
  memberShipEndDate:String,
  recruiterInfo:{
  RName:String,
  RCompany:String,
  RRole:String
  },
  candidateInfo:{
    resume:String,
    CName:String,
    CCurrentCompany:String,
    CCurrentJobLocation:String,
    CPreferedJobLocation:String,
    CCurrentSalary:String,
    CNoticePeriod:String,
    CSkills:String,
    CPreviousCompany:String,
    CExperience:String,
    CCollege:String,
    CCollegeLocation:String,
    CGradautedYear:Date,
    CLinkedinProfile:String,
    CGithbProfile:String,
  }
});


const Profile=mongoose.models.Profile || mongoose.model("Profile",ProfileSchema);

export default Profile 

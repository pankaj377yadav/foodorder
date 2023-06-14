const User = require('../model/user')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

 const registerNewUser=  async (req,res)=>{
  const hashPassword = await bcrypt.hash(req.body.password, saltRounds);
  req.body.password = hashPassword

// console.log(hashPassword)
  
    const data = await User.create(req.body)
    if(data) {
      res.json({
        msg: "registration succes"
      })
    }
  }

 
 const loginUser=  async (req,res)=>{
  try{
    // step 1: check if the phonenumber/username/email exists or not
    const data = await User.findOne({email: req.body.email})
    //step 2: check if the password is matched
    if(data){
      const isMatched = await bcrypt.compare(req.body.password, data.password)
      // getnerate a token for the user
      if(isMatched){
        const token = jwt.sign({ email:  req.body.email}, process.env.SECRET_KEY);
        console.log(token)
        res.json({
        isLoggedIn: true,
        msg:  "success",
        id: data._id,
        token: token
        })
      }else{
        res.json({
          isLoggedIn: false,
          msg: "invalid password"
        })
      }
    }else{
      res.json({
        isLoggedIn: false,
        msg: "user doesnnot exist"
      })
    }
  }catch(err){
    console.log(err)
  }


}


const getAllUser =  async (req,res)=>{
   const data = await User.find()
   if(data){
     res.json({
     userList: data
     })
   }
 }

 const getUserDetailsById = async (req,res)=>{
   const data = await User.findById(req.params.id)
   if(data){
     res.json({
     userList: data
     })
   }
 }
 
  module.exports = {registerNewUser,loginUser,getAllUser,getUserDetailsById}
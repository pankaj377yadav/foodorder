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
 console.log(req.body)
  const data = await User.findOne({email: req.body.email})

  const isMatched = await bcrypt.compare(req.body.email, data.Password);

 

  if(data && isMatched){
    const token = jwt.sign({ email: req.body.email }, process.env.SECRET_KEY);
    console.log(token)
    
    res.json({
    isLoggedIn: true,
    msg:  "success",
    id: data._id
    })
  }else{
    res.json({
      isLoggedIn: false,
      msg: "user doesnnot exist"
    })
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
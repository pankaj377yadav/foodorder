const mongoose= require('mongoose')

const userSchema =  new mongoose.Schema({
  restaurantName: {type: String},
  email: {type: String}, 
  password:  {type: String},
  userType:{type: String},
  role:{type: String},
  status:{type: String, default:"pending"} 
  
  });
  const User = mongoose.model('User', userSchema);

  
module.exports = User
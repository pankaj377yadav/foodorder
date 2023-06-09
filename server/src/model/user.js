const mongoose= require('mongoose')

const userSchema =  new mongoose.Schema({
  email: {type: String}, 
  password:  {type: String}, 
  phoneNumber: {type: String}, 
  cartList: [{type: String}],
  favList: [{type: String}]
  });
  const User = mongoose.model('User', userSchema);

  
module.exports = User
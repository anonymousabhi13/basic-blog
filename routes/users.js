const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/express-demo',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log('Connected to MongoDB...'))
.catch(err=>console.error('Could not connect to MongoDB...'));

const createSchema=mongoose.Schema({
  username:String,
  email:String,
  password:String
});
module.exports=mongoose.model('User',createSchema);
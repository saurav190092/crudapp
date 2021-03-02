const mongoose=require('mongoose');
const Schema=mongoose.Schema;

// Define collection and schema for form
let Form=new Schema({
 firstName:{
  type:String
},
lastName:{
  type:String
},
email:{
type:String
},
password:{
  type:String
},
confirmPassword:{
type:String
}
},{
 collection:'form'
});
module.exports = mongoose.model('Form', Form);

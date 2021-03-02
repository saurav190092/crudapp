const express=require('express');
const app=express();
const formRoutes=express.Router();

// Require form model in our routes module
let Form =require('../models/Form');

//define form route
	formRoutes.route('/add').post(function (req, res) {
  let form = new Form(req.body);
	console.log(form);
	form.save()
  .then(form => {
      res.status(200).json({'form': 'form in added successfully'});      
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    console.log('unable to save to database');
    });
});

//Define get data (index or listing) route
formRoutes.route('/').get(function(req, res){
  Form.find(function(err, forms){
      if(err) {
          console.log(err);
      } else {
          res.json(forms);
      }
  })
});

//define edit route
formRoutes.route('/edit/:id').get(function(req,res){
let id=req.params.id;
Form.findById(id,function(err,form){
  res.json(form);
})
});

//define update route
formRoutes.route('/update/:id').post(function(req,res){
Form.findById(req.params.id,function(err,form){
if(!form){
  //return next(new Error('could not load Document'));
  console.log('error throw',err);
}
else{
  form.firstName=req.body.firstName;
  form.lastName=req.body.lastName;
  form.email=req.body.email;
  form.password=req.body.password;
  form.confirmPassword=req.body.confirmPassword;

  form.save().then(form =>{
    res.json('update complete');
	console.log('update has been complete');
  })
  .catch(err => {
    res.status(400).send("Unable to update the databsee");
	console.log('unable to update the databse');
  });
}
})
});

//Define remove / delete/ destroy route
formRoutes.route('/delete/:id').get(function(req,res){
Form.findByIdAndRemove({_id: req.params.id},function(err,form){
if(err){
	res.json(err);
}
else{
	res.json('Successfully removed');
	
}
});
});

module.exports=formRoutes;

const express 		= require('express');
const userModel		= require.main.require('./models/userModel');
const router 	    = express.Router();	




router.get('/',(req,res)=>{
    res.render('login/register');
})
router.post('/',(req,res)=>{
    var user=
    {

        mname: req.body.mname,
        age: req.body.age,
        contactno: req.body.contactno,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password

    };
    userModel.insert2(user, function(status){

        if(status){
    
            console.log("Created");
            res.redirect('/home');
            
        }
        else{
              console.log("Error");  
        }
    });
})
module.exports = router; 
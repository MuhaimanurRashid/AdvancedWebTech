const express 	= require('express');
const userModel		= require.main.require('./models/userModel');
const router 	= express.Router();

router.get('*',  (req, res, next)=>{
	if(req.cookies['username'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});

router.get('/create', (req, res)=>{
	res.render('user/create');
});
router.post('/create', (req, res)=>{

    var user=
    {
        cname: req.body.cname,
        ccatagories: req.body.ccatagories,
        cprice: req.body.cprice,
        cdescription: req.body.cdescription
      

    };
    userModel.insert(user, function(status){

        if(status){
    
            console.log("Created");
            res.redirect('/home');
          
        }
        else{
              console.log("Error");  
        }
    });
});
router.get('/edit/:id', (req, res)=>{
   
    userModel.getById(req.params.id, (result) => {
        res.render('user/edit', { user: result[0] });
    });
       
});

router.post('/edit/:id', (req, res)=>{
    var user = {
        id: req.params.id,
        cname: req.body.cname,
        ccatagories: req.body.ccatagories,
        cprice: req.body.cprice,
        cdescription: req.body.cdescription

	};
    userModel.update(user, function(status){

        if(status){
    
            console.log("Updated");
            res.redirect('/home/carlist');
          
        }
        else{
              console.log("Error");  
        }
});
})
router.get('/delete/:id', (req, res)=>{
    var user = {
		id: req.params.id
	};
    
	res.render('user/delete',user);
});

router.post('/delete/:id', (req, res)=>{
    var user = {
        id: req.params.id
      
	};
    userModel.delete(user, function(status){

        if(status){
    
            console.log("deleted");
            res.redirect('/home/userlist');
          
        }
        else{
              console.log("Error");  
        }
});
})
module.exports = router;
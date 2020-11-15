const db = require('./db');

module.exports= {
	validate: function(user, callback){
		var sql = "select * from admin where username='"+user.username+"' and password='"+user.password+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getById: function(id, callback){

	},
	
	insert2: function(user, callback){
		var sql = "Insert into member (name,age,contactno,username,email,password) VALUES('"+user.mname+"','"+user.age+"','"+user.contactno+"','"+user.username+"','"+user.email+"', '"+user.password+"')";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	validate2: function(user, callback){
		var sql = "select * from member where username='"+user.username+"' and password='"+user.password+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(true);
			}else{
				callback(false);
			}
		});
	}
	
} 
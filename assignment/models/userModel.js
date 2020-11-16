  
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
		var sql = "select * from carlist where id='"+id+ "'";
		db.getResults(sql, function(result){
			callback(result);
		});

	},
	getAll: function(callback){
		var sql = "select * from member";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAll2: function(callback){
		var sql = "select * from carlist";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	update:function(user,callback){
		var sql = "update carlist set carname = '"+user.cname+"',catagories = '"+user.ccatagories+"',price = '"+user.cprice+"',description = '"+user.cdescription+"' where id = '"+user.id+"'";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
	
		});
	},
	delete: function(user, callback){
		var sql = "delete from member where id = '"+user.id+"'";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
	
		});

	},
	insert: function(user, callback){
		var sql = "Insert into carlist (carname,catagories,price,description) VALUES('"+user.cname+"','"+user.ccatagories+"','"+user.cprice+"','"+user.cdescription+"')";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
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
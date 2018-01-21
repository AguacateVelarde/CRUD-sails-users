
module.exports = {
	index: function(req, res){
	 	Users.find(function(err, users){
			 res.view({
					 "users": users,
					 "title" : "Mis usuarios"
			 })
	 })
	}
};

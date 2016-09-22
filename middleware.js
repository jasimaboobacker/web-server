var middleware = {
	requireAuthentication: function(req,res,next){
		console.log('Private');
		next();
	},
	logger: function(req,res,next){
		console.log(req.method);
		next();
	}
}


module.exports = middleware;
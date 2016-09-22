var express = require('express');
var app = express();

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

app.use(middleware.logger);
//app.use(middleware.requireAuthentication);
app.get('/about',middleware.requireAuthentication,function(req,res){
	res.send('About Us');
});

app.use(express.static(__dirname+'/public'));

app.listen(3000);


var express = require('express');
var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/ei'
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
	o = req.body.json;
	console.log("[EFFECTS] "+o);
	json = JSON.parse(o);
	console.dir(json);
	(async function(opts) {
		var client = await mongo.connect(url, {userNewUrlParser: true});
		if(!client) {
			return console.dir(client);
		}
		out = [];
		db = client.db("ei");
		var results = await db.collection("effects").find(opts).toArray();
		res.send(JSON.stringify(results,null,"\t"));
	})(json);
});
router.use(function (err, req, res, next) {
	  if (err) {
	      console.log('Error', err);
	  } else {
		console.log('404')
	  }
});
module.exports = router;

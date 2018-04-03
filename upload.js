var csv = require('fast-csv');
var mongoose = require('mongoose');
var Scripture = require('./scripture');

exports.post = function (req, res) {
	if (!req.files)
		return res.status(400).send('No files were uploaded.');
	
	var scriptureFile = req.files.file;

	var scriptures = [];
		
	csv
	 .fromString(scriptureFile.data.toString(), {
		 headers: true,
		 ignoreEmpty: true
	 })
	 .on("data", function(data){
		 data['_id'] = new mongoose.Types.ObjectId();
		 
		 scriptures.push(data);
	 })
	 .on("end", function(){
		 Scripture.create(scriptures, function(err, documents) {
			if (err) throw err;
			
			res.send(scriptures.length + ' authors have been successfully uploaded.');
		 });
	 });
};

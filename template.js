var json2csv = require('json2csv');

exports.get = function(req, res) {

	//var fields = Object.keys(Author.schema.obj);
	var fields = [
		'reference'
	];

	var csv = json2csv({ data: '', fields: fields });

	res.set("Content-Disposition", "attachment;filename=scriptures.csv");
	res.set("Content-Type", "application/octet-stream");

	res.send(csv);

};

var mongoose = require('mongoose');

var scriptureSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	reference: String,
});

var Scripture = mongoose.model('Scripture', scriptureSchema);

module.exports = Scripture;

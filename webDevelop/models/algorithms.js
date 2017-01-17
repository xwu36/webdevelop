var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var algorithmsSchema = new Schema({
	index: {type: Number, required: true},
	title: {type: String, required: true},
	content: {type: String, required: true}
}, { collection: 'algorithms'});


module.exports = mongoose.model('Algorithms', algorithmsSchema);
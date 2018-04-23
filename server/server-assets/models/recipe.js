var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = mongoose.SchemaTypes.ObjectId
var schemaName = 'Recipe'


var schema = new Schema({
    title: { type: String, required: true },
    style: { type: String},
    ingredients: {type: Array},
    yield: {type: String},
    photos: {type: Array},
    pub: {type: Boolean, default: false},
    totalTime: {type: String},
    date: { type: Date, required: true, default: new Date(Date.now()) },
    userId: { type: ObjectId, ref: 'User' },
});

// schema.post('remove', function (next) {
//     // This deletes where boardId = current boardId (board & all it's children)
//     Lists.remove({ boardId: this._id }).exec();
//     Tasks.remove({ boardId: this._id }).exec();
//     Comments.remove({ boardId: this._id }).exec();
// });


module.exports = mongoose.model(schemaName, schema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  title: { type: String },
  edit: { type: Boolean },
  id:{ type: String},
  userid:{type: String}
});

const todo = mongoose.model('Todo', TodoSchema)

module.exports = todo;
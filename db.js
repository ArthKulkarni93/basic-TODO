const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://arthteerth93:WaveCreativeEcho@cluster0.i22535d.mongodb.net")

const todo_Schema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo_Table = mongoose.model('todo_Table',todo_Schema);

module.exports = {
    todo_Table
}
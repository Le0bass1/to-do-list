const mongoose = require('mongoose')

const checklistSchema = mongoose.Schema({
    name: {type: String, required: true},
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        name: {type: String, required: true},
        done: {type: Boolean, default: false},
        ref: 'TaskModel'
    }]
})

module.exports = mongoose.model('ChecklistModel', checklistSchema)
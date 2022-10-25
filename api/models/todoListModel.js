'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSChema = new Schema({
    name: {
        type: String,
        required: '¿En qué piensas?'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    }
});

module.exports = mongoose.model('Tasks', TaskSChema);
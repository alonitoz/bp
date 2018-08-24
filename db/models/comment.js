const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');

const CommentSchema = new Schema({
    message: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        validate: [ isEmail, 'Email is not valid' ]
    }
},{
    timestamps: true
});

const Comment = mongoose.model('comment', CommentSchema);

module.exports = Comment;

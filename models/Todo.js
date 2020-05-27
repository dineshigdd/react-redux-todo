const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({  
    id:{
        type:String,
        required: true,
        unique:true
    },

    title:{
        type: String,
        required:true
    },

    body:{
        type: String,
        required:true
    },
    
    done:{
        type: Boolean,
        required:true
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
    
});

module.exports = Todo = mongoose.model('Todo',TodoSchema);